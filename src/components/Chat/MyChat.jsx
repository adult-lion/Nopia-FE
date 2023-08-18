import * as React from "react";
import {
  MyChatBubbleContainer,
  ChatAvatar,
  MyChatNickName,
  ChatBox,
} from "../../styles/ChatStyles";


const MyChat = ({ nickName, text }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <MyChatBubbleContainer>
        {/* 프로필 이미지 */}
        <div>
          <MyChatNickName>{nickName}</MyChatNickName>
          <ChatBox style={{ marginRight: '5px' }}>
            {text}
          </ChatBox>
        </div>
        <ChatAvatar alt="user" src="/static/images/avatar/1.jpg" style={{ marginRight: '10px' }} />
      </MyChatBubbleContainer >
    </div >
  );
};

export default MyChat;