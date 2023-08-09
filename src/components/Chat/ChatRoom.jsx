import styled from "styled-components";
import ChatHeader from "./ChatHeader";

const ChatRoom = () => {
  return (
      <div style={{
        display: "flex", 
        justifyContent: "center"
      }}>
        <ChatWrap>
          <ChatHeader />
          <ChatContent>
            chat page
          </ChatContent>
        </ChatWrap>
      </div>
  );
};

const ChatWrap = styled.div`
  width: 70vw;
  height: 85vh;
  background-color: #55AA55;
  margin: 5% 10%;
  border-radius: 5px;
  overflow: hidden;
`
const ChatContent = styled.div`
  height: 85vh;
  padding-top: 40px;
`;

export default ChatRoom;