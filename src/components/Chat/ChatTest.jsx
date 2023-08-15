import * as React from "react";
import {
  ChatBubble,
  ChatAvatar,
  ChatNickName,
  ChatBox,
} from "../../styles/ChatStyles";

const ChatTest = () => {
  return (
    <>
      <ChatBubble>
        {/* 프로필 이미지 */}
        <ChatAvatar alt="user" src="/static/images/avatar/1.jpg" />
        <div>
          <ChatNickName>nickname</ChatNickName>
          <ChatBox>
            멋쟁이사자처럼 11기 이동규
            <br />
            화이팅
          </ChatBox>
        </div>
      </ChatBubble>
    </>
  );
};

export default ChatTest;
