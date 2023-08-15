import ChatHeader from "./ChatHeader";
import TransitEnterexitRoundedIcon from "@mui/icons-material/TransitEnterexitRounded";
import {
  ChatWrap,
  ChatContent,
  ChatMessages,
  ChatInputWrap,
  StyledInput,
  CountdownCotainer,
} from "../../styles/ChatStyles";
import ChatTest from "./ChatTest";
import Notice from "./Notice";
import Countdown from "react-countdown";
import ChatVoteModal from "./ChatVoteModal";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";
import image5 from "../../assets/images/image5.jpg";
import image6 from "../../assets/images/image6.jpg";

const ChatRoom = () => {
  const people = [
    { name: "익명1", img: image1 },
    { name: "익명2", img: image2 },
    { name: "익명3", img: image3 },
    { name: "익명4", img: image4 },
    { name: "익명5", img: image5 },
    { name: "익명6", img: image6 },
  ];

  // 카운트 다운 렌더링
  const renderer = ({ minutes, seconds, completed }) => {
    // 시간 마감 시
    if (completed) {
      // Render a completed state
      return <ChatVoteModal people={people}></ChatVoteModal>;
    }
    // 진행 중
    else {
      // Render a countdown
      return (
        <CountdownCotainer color={minutes < 1 ? "red" : undefined}>
          {minutes}:{seconds}
        </CountdownCotainer>
      );
    }
  };
  return (
    <>
      <div
        style={{ width: "100%", backgroundColor: "white", padding: "15px 0" }}
      >
        <Countdown date={Date.now() + 1000 * 60 * 4.99} renderer={renderer} />
      </div>
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
    </>
  );
};

export default ChatRoom;
