import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilCallback, useRecoilValue } from "recoil";
import { GlobalState } from "../states/GlobalState";
import { UserState } from "../states/UserState";
import OthersChat from "../components/Chat/OthersChat";
import MyChat from "../components/Chat/MyChat";
import Notice from "../components/Chat/Notice";
import ChatVoteModal from "../components/Chat/ChatVoteModal";
import ChatResultModal from "../components/Chat/ChatResultModal";

export default function useChatService() {
  const webSocket = useRecoilValue(GlobalState.webSocket);
  const joiningChatRoom = useRecoilValue(GlobalState.joiningChatRoom);
  const joiningQueue = useRecoilValue(GlobalState.joiningQueue);
  const messages = useRecoilValue(GlobalState.messages);
  const notices = useRecoilValue(GlobalState.notices);
  const age = useRecoilValue(UserState.age);
  const room_id = useRecoilValue(UserState.room_id);
  const session_id = useRecoilValue(UserState.session_id);
  const session_nickname = useRecoilValue(UserState.session_nickname);
  const navigate = useNavigate();

  const onMessage = useRecoilCallback(({ set }) => (event) => {
    let message = JSON.parse(event.data);
    console.log(message);
    switch (message.type) {
      case "ENTER":
        set(UserState.room_id, message.roomId);
        set(UserState.session_id, null);
        navigate("/chat");
        break;

      case "NOTICE":
        if (message.senderId && message.senderNickname) {
          set(UserState.session_id, message.senderId);
          set(UserState.session_nickname, message.senderNickname);
        }
        set(GlobalState.notices, previous =>
          [
            ...previous,
            <Notice key={message.senderId} notice={message.message} />,
          ]
        );
        break;

      case "TALK":
        if (message.senderId === session_id) { // my message returned
          set(GlobalState.messages, previous => [...previous, <MyChat nickName={message.senderNickname} text={message.message} />]
          );
        } else {
          set(GlobalState.messages, previous => [...previous, <OthersChat nickName={message.senderNickname} text={message.message} />]
          );
        }
        break;
      case "VOTE":
        set(GlobalState.messages, previous => [...previous, <ChatVoteModal key={message.senderId} />]
        );
        break;

      case "RESULT":
        set(GlobalState.messages, previous => [...previous, <ChatResultModal key={message.senderId} result={message.message} />])
        break;

      default:
        break;
    }
  }, [navigate, session_id]);

  const onCloseOrError = useRecoilCallback(({
    set,
  }) => (eventOrError) => {
    console.log(eventOrError);
    navigate("/");
    set(GlobalState.webSocket, null);
  }, [navigate]);

  useEffect(() => {
    if (!webSocket) {
      return;
    }
    const sendPingInterval = setInterval(() => {
      if (webSocket.readyState !== 1) {
        return;
      }
      webSocket.send(JSON.stringify({
        type: "PING",
      }));
    }, 5000);
    webSocket.addEventListener("close", onCloseOrError);
    webSocket.addEventListener("error", onCloseOrError);
    webSocket.addEventListener("message", onMessage);
    return () => {
      clearInterval(sendPingInterval);
      webSocket.removeEventListener("close", onCloseOrError);
      webSocket.removeEventListener("error", onCloseOrError);
      webSocket.removeEventListener("message", onMessage);
    };
  }, [onMessage, onCloseOrError, webSocket]);

  const getOrCreateSocket = useRecoilCallback(({
    set,
  }) => () => {
    const createWebsocket = () => {
      set(GlobalState.joiningChatRoom, false);
      set(GlobalState.joiningQueue, false);
      const ip = process.env.REACT_APP_API_URL;
      return new WebSocket(`ws://${ip}/api/ws`);
    };
    if (!webSocket) {
      const webSocket = createWebsocket();
      set(GlobalState.webSocket, webSocket);
      return webSocket;
    }
    return webSocket;
  }, [webSocket]);;

  const sendMessage = useCallback((message) => {
    const webSocket = getOrCreateSocket();
    const sendJoinMessage = () => {
      webSocket.send(message);
    }
    switch (webSocket.readyState) {
      case 0: {
        webSocket.addEventListener("open", () => {
          sendJoinMessage();
        });
        break;
      }
      case 1: {
        sendJoinMessage();
        break;
      }
      default: {
        throw new Error("unreachable")
      };
    }
  }, [getOrCreateSocket]);

  const joinQueue = useCallback(() => {
    if (joiningQueue) {
      return;
    }
    sendMessage(JSON.stringify({
      type: "JOIN",
      message: age === 50 ? 1 : 0
    }));
  }, [sendMessage, joiningQueue, age]);

  const joinChatRoom = useCallback(() => {
    if (joiningChatRoom) {
      return;
    }
    sendMessage(JSON.stringify({
      type: "ENTER",
      roomId: room_id,
      senderId: session_id
    }));
  }, [sendMessage, joiningChatRoom, room_id, session_id]);

  const sendTalk = useCallback((userTalk) => {
    sendMessage(JSON.stringify({
      type: "TALK",
      senderId: session_id,
      senderNickname: session_nickname,
      roomId: room_id,
      message: userTalk
    }))
  }, [sendMessage, session_id, session_nickname, room_id]);

  const sendVote = useCallback((userVote) => {
    sendMessage(JSON.stringify({
      type: "VOTE",
      senderId: session_id,
      senderNickname: session_nickname,
      roomId: room_id,
      message: userVote
    }))
    console.log(userVote)
    navigate("/result");
  }, [sendMessage, session_id, session_nickname, room_id]);

  return {
    webSocket,
    joinQueue,
    joinChatRoom,
    sendTalk,
    sendVote,
    messages,
    notices
  }
}
