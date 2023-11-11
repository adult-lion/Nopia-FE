import * as React from "react";
import {
  ChatBubbleContainer,
  ChatAvatar,
  ChatNickName,
  ChatBox,
} from "../../styles/ChatStyles";

const OthersChat = ({ nickName, text }) => {
  return (
    <>
      <ChatBubbleContainer>
        {/* 프로필 이미지 */}
        <ChatAvatar alt="user" src="/static/images/avatar/1.jpg" />
        <div>
          <ChatNickName>{nickName}</ChatNickName>
          <ChatBox>
            {text}
          </ChatBox>
        </div>
      </ChatBubbleContainer>
    </>
  );
};

export default OthersChat;
