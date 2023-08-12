import * as React from "react";
import {
  ChatBubble,
  ChatAvatar,
  ChatNickName,
  ChatBox,
} from "../../styles/index";

const ChatTest = () => {
  return (
    <>
      <ChatBubble>
        {/* 프로필 이미지 */}
        <ChatAvatar alt="user" src="/static/images/avatar/1.jpg" />
        <div>
          <ChatNickName>nickname</ChatNickName>
          <ChatBox>
            멋쟁이사자처럼 11기 운영진 쾌남 정현준 형님
            <br />
            (경남 사천 거주, 연일 정씨 32대손)
          </ChatBox>
        </div>
      </ChatBubble>
    </>
  );
};

export default ChatTest;
