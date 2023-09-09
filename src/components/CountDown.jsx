import { useState, useEffect } from "react";
import { CountdownCotainer } from "../styles/ChatStyles";
import ChatVoteModal from "./Chat/ChatVoteModal";
import useChatService from "../hooks/useChatService";

const CountDown = ({ people }) => {
  const initialTime = 10; // 600초 = 10분

  const [time, setTime] = useState(
    parseInt(localStorage.getItem("remainingTime")) || initialTime
  );

  useEffect(() => {
    localStorage.setItem("remainingTime", time.toString());
  }, [time]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => Math.max(prevTime - 1, 0));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const { aliveUsers } = useChatService();

  return (
    <div style={{ width: "100%", backgroundColor: "white", padding: "15px 0" }}>
      <CountdownCotainer color={minutes < 1 ? "red" : undefined}>
        {`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}
      </CountdownCotainer>
      {time === 0 && <ChatVoteModal />}
    </div>
  );
};

export default CountDown;
