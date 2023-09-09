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
  const aliveUsers = useRecoilValue(GlobalState.aliveUsers);
  const age = useRecoilValue(UserState.age);
  const room_id = useRecoilValue(UserState.room_id);
  const session_id = useRecoilValue(UserState.session_id);
  const session_nickname = useRecoilValue(UserState.session_nickname);
  const navigate = useNavigate();

  const onMessage = useRecoilCallback(
    ({ set }) =>
      (event) => {
        let message = JSON.parse(event.data);
        console.log(message, "1");
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
            if (!!message.aliveUsers) {
              set(GlobalState.aliveUsers, message.aliveUsers);
            }

            set(GlobalState.notices, (previous) => [
              ...previous,
              <Notice key={message.senderId} notice={message.message} />,
            ]);
            break;

          case "TALK":
            if (message.senderId === session_id) {
              // my message returned
              set(GlobalState.messages, (previous) => [
                ...previous,
                <MyChat
                  nickName={message.senderNickname}
                  text={message.message}
                />,
              ]);
            } else {
              set(GlobalState.messages, (previous) => [
                ...previous,
                <OthersChat
                  nickName={message.senderNickname}
                  text={message.message}
                />,
              ]);
            }
            break;
          case "VOTE":
            set(GlobalState.aliveUsers, message.aliveUsers);
            break;

          case "RESULT":
            set(GlobalState.messages, (previous) => [
              ...previous,
              <ChatResultModal
                key={message.senderId}
                result={message.message}
              />,
            ]);
            break;

          default:
            break;
        }
      },
    [navigate, session_id]
  );

  const onCloseOrError = useRecoilCallback(
    ({ set }) =>
      (eventOrError) => {
        console.log(eventOrError);
        set(GlobalState.webSocket, null);
        navigate("/");
      },
    [navigate]
  );

  useEffect(() => {
    if (!webSocket) {
      return;
    }
    console.log("attach", webSocket);
    const sendPingInterval = setInterval(() => {
      if (webSocket.readyState !== 1) {
        return;
      }
      webSocket.send(
        JSON.stringify({
          type: "PING",
        })
      );
    }, 20000);

    webSocket.onclose = onCloseOrError;
    webSocket.onerror = onCloseOrError;
    webSocket.onmessage = onMessage;
    return () => {
      clearInterval(sendPingInterval);
      webSocket.onclose = undefined;
      webSocket.onerror = undefined;
      webSocket.onmessage = undefined;
    };
  }, [onMessage, onCloseOrError, webSocket]);

  const getOrCreateSocket = useRecoilCallback(
    ({ set }) =>
      () => {
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
      },
    [webSocket]
  );

  const sendMessage = useCallback(
    (message) => {
      const webSocket = getOrCreateSocket();
      const sendJoinMessage = () => {
        webSocket.send(message);
      };
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
          break;
        }
      }
    },
    [getOrCreateSocket]
  );

  const joinQueue = useCallback(() => {
    if (joiningQueue) {
      return;
    }
    sendMessage(
      JSON.stringify({
        type: "JOIN",
        message: age === 50 ? 1 : 0,
      })
    );
  }, [sendMessage, joiningQueue, age]);

  const joinChatRoom = useCallback(() => {
    if (joiningChatRoom) {
      return;
    }
    sendMessage(
      JSON.stringify({
        type: "ENTER",
        roomId: room_id,
        senderId: session_id,
        message: age === 50 ? 1 : 0,
      })
    );
  }, [sendMessage, joiningChatRoom, room_id, session_id]);

  const sendTalk = useCallback(
    (userTalk) => {
      console.log("send");
      sendMessage(
        JSON.stringify({
          type: "TALK",
          senderId: session_id,
          senderNickname: session_nickname,
          roomId: room_id,
          message: userTalk,
        })
      );
    },
    [sendMessage, session_id, session_nickname, room_id]
  );

  const sendVote = useCallback(
    (userVote) => {
      sendMessage(
        JSON.stringify({
          type: "VOTE",
          senderId: session_id,
          senderNickname: session_nickname,
          roomId: room_id,
          message: userVote,
        })
      );
      console.log(aliveUsers, "user", userVote);
      // navigate("/result");
    },
    [sendMessage, session_id, session_nickname, room_id]
  );

  const exitService = useRecoilCallback(
    ({ set }) =>
      () => {
        webSocket.close();
        set(GlobalState.webSocket, null);
        set(GlobalState.messages, []);
        console.log("closed");
      },
    [webSocket]
  );

  return {
    webSocket,
    joinQueue,
    joinChatRoom,
    sendTalk,
    sendVote,
    exitService,
    messages,
    notices,
    aliveUsers,
  };
}
