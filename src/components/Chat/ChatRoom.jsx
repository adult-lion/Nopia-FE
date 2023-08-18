import ChatHeader from "./ChatHeader";
import TransitEnterexitRoundedIcon from "@mui/icons-material/TransitEnterexitRounded";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";
import image5 from "../../assets/images/image5.jpg";
import image6 from "../../assets/images/image6.jpg";
import {
  ChatWrap,
  ChatContent,
  ChatMessages,
  ChatInputWrap,
  StyledInput,
} from "../../styles/ChatStyles";
import CountDown from "../CountDown";
import { useEffect, useState, useRef } from "react";
import useChatService from "../../hooks/useChatService";
import { useRecoilValue } from "recoil";
import { UserState } from "../../states/UserState";

const ChatRoom = () => {
  const [userTalk, setUserTalk] = useState("");
  const scrollRef = useRef();
  const session_id = useRecoilValue(UserState.session_id);

  const {
    joinChatRoom,
    sendTalk,
    messages,
    notices
  } = useChatService();

  useEffect(() => {
    joinChatRoom();
  }, []);

  useEffect(() => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  });


  const people = [
    {
      session_id,
      name: "익명1",
      img: image1,
    },
    {
      session_id,
      name: "익명2",
      img: image2,
    },
    {
      session_id,
      name: "익명3",
      img: image3,
    },
    {
      session_id,
      name: "익명4",
      img: image4,
    },
    {
      session_id,
      name: "익명5",
      img: image5,
    },
    {
      session_id,
      name: "익명6",
      img: image6,
    },
  ];

  return (
    <>
      <CountDown people={people} />
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
            <ChatMessages ref={scrollRef}>
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
                }}

              />
              <TransitEnterexitRoundedIcon onClick={() => {
                sendTalk(userTalk);
                setUserTalk("");
              }}

              />
            </ChatInputWrap>
          </ChatContent>
        </ChatWrap>
      </div>
    </>
  );
};

export default ChatRoom;
