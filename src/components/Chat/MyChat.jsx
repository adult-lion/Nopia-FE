import * as React from "react";
import {
  MyChatBubbleContainer,
  ChatAvatar,
  ChatNickName,
  ChatBox,
} from "../../styles/ChatStyles";


const MyChat = ({ nickName, text }) => {
  return (
    <div style={{ float: 'right' }}>
      <MyChatBubbleContainer>
        {/* 프로필 이미지 */}
        <div style={{ display: 'flex', justifyItems: 'end' }}>
          <ChatNickName >{nickName}</ChatNickName>
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