import ChatHeader from "./ChatHeader";
import TransitEnterexitRoundedIcon from "@mui/icons-material/TransitEnterexitRounded";
import {
  ChatWrap,
  ChatContent,
  ChatMessages,
  ChatInputWrap,
  StyledInput,
} from "../../styles/ChatStyles";
import ChatTest from "./ChatTest";
import Notice from "./Notice";

const ChatRoom = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <ChatWrap>
        <ChatHeader />
        <ChatContent>
          <Notice />
          <ChatMessages>
            <ChatTest />
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
