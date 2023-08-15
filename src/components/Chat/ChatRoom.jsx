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
import { useState, useEffect } from "react";

const ChatRoom = () => {
  // 카운트 다운 시간을 브라우저의 로컬 스토리지에 저장하여 새로고침 후에도 값을 유지할 수 있도록 한다.
  const [countdownEndTime, setCountdownEndTime] = useState(
    parseInt(localStorage.getItem("countdownEndTime")) ||
      Date.now() + 1000 * 60 * 4.99
  );

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

  // 컴포넌트가 렌더링 될 때(새로고침 때)마다, 그리고 countdownEndTime이 변경될 때마다 로컬 스토리지 countdownEndTime 값을 변경한다(문자열로).
  useEffect(() => {
    // Save the countdown end time to local storage
    localStorage.setItem("countdownEndTime", countdownEndTime.toString());
  }, [countdownEndTime]);

  return (
    <>
      <div
        style={{ width: "100%", backgroundColor: "white", padding: "15px 0" }}
      >
        <Countdown date={countdownEndTime} renderer={renderer} />
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
