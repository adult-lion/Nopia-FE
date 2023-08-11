import ChatHeader from "./ChatHeader";
import TransitEnterexitRoundedIcon from '@mui/icons-material/TransitEnterexitRounded';
import { ChatWrap, ChatContent, ChatMessages, ChatInputWrap, StyledInput } from "../../styles/index";

const ChatRoom = () => {
  return (
      <div style={{
        display: "flex", 
        justifyContent: "center"
      }}>
        <ChatWrap>
          <ChatHeader />
          <ChatContent>
            <ChatMessages>
              asd
            </ChatMessages>
            <ChatInputWrap>
              <StyledInput type="text" />
              <TransitEnterexitRoundedIcon />
            </ChatInputWrap>
          </ChatContent>
        </ChatWrap>
      </div>
  );
};

export default ChatRoom;