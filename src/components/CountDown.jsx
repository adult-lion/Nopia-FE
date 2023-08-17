import { useState, useEffect } from 'react';
import { CountdownCotainer } from "../styles/ChatStyles";
import ChatVoteModal from "./Chat/ChatVoteModal";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";
import image5 from "../assets/images/image5.jpg";
import image6 from "../assets/images/image6.jpg";

export const people = [
  { name: "익명1", img: image1, },
  { name: "익명2", img: image2, },
  { name: "익명3", img: image3, },
  { name: "익명4", img: image4, },
  { name: "익명5", img: image5, },
  { name: "익명6", img: image6, },
];

const CountDown = () => {
  const initialTime = 5; // 600초 = 10분

  const [time, setTime] = useState(
    parseInt(localStorage.getItem('remainingTime')) || initialTime
  );

  useEffect(() => {
    localStorage.setItem('remainingTime', time.toString());
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

  return (
    <div
      style={{ width: "100%", backgroundColor: "white", padding: "15px 0" }}
    >
      <CountdownCotainer color={minutes < 1 ? "red" : undefined}>
        {`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}
      </CountdownCotainer>
      {time === 0 && <ChatVoteModal people={people} />}
    </div>
  );
};

export default CountDown;

