import ChatHeader from "./ChatHeader";
import TransitEnterexitRoundedIcon from "@mui/icons-material/TransitEnterexitRounded";

import {
  ChatWrap,
  ChatContent,
  ChatMessages,
  ChatInputWrap,
  StyledInput,
} from "../../styles/ChatStyles";
import CountDown from "../CountDown";
import { people } from "../CountDown";
import { useEffect, useState } from "react";
import useChatService from "../../hooks/useChatService";

const ChatRoom = () => {
  const [userTalk, setUserTalk] = useState("");

  const {
    joinChatRoom,
    sendTalk,
    messages,
    notices
  } = useChatService();

  useEffect(() => {
    joinChatRoom();
  }, []);

  return (
    <>
      <CountDown />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#fff",
        }}
      >
        <ChatWrap>
          <ChatHeader people={people} />
          <ChatContent>
            {notices}
            <ChatMessages>
              {messages}
            </ChatMessages>
            <ChatInputWrap>
              <StyledInput type="text" onChange={(event) => {
                setUserTalk(event.target.value)
              }}
                value={userTalk}
                onKeyDown={(event) => {
                  if (event.code !== "Enter") {
                    return;
                  }
                  if (event.nativeEvent.isComposing) {
                    return;
                  }

                  sendTalk(userTalk);
                  setUserTalk("");
                }} />
              <TransitEnterexitRoundedIcon onClick={() => {
                sendTalk(userTalk);
                setUserTalk("");
              }} />
            </ChatInputWrap>
          </ChatContent>
        </ChatWrap>
      </div>
    </>
  );
};

export default ChatRoom;
