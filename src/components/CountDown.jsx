import { useState, useEffect } from 'react';
import Countdown from "react-countdown";
import { CountdownCotainer } from "../styles/ChatStyles";
import ChatVoteModal from "./Chat/ChatVoteModal";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";
import image5 from "../assets/images/image5.jpg";
import image6 from "../assets/images/image6.jpg";

export const people =  [
  { name: "익명1", img: image1, },
  { name: "익명2", img: image2, },
  { name: "익명3", img: image3, },
  { name: "익명4", img: image4, },
  { name: "익명5", img: image5, },
  { name: "익명6", img: image6, },
];

const CountDown = () => {
  const [countdownEndTime, setCountdownEndTime] = useState(
    parseInt(localStorage.getItem("countdownEndTime")) ||
    Date.now() + 1000 * 60 * 4.99
  );

  const resetCountdown = () => {
    setCountdownEndTime(
      Date.now() + 1000 * 60 * 4.99
    );
  };

  const renderer = ({ minutes, seconds, completed }) => {
    // 시간 마감 시
    if (completed) {
      // Render a completed state
      resetCountdown();
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

  useEffect(() => {
    // Save the countdown end time to local storage
    localStorage.setItem("countdownEndTime", countdownEndTime.toString());
  }, [countdownEndTime]);

  return (
    <div
      style={{ width: "100%", backgroundColor: "white", padding: "15px 0" }}
    >
      <Countdown date={countdownEndTime} renderer={renderer} />
    </div>
  );
};

export default CountDown;