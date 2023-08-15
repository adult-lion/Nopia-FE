import React from "react";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";
import image5 from "../../assets/images/image5.jpg";
import image6 from "../../assets/images/image6.jpg";
import {
  HeaderContainer,
  HeaderUser,
  HeaderUserImageBorder,
  HeaderUserImage,
  HeaderUserName,
  CountdownCotainer,
} from "../../styles/index";
import Countdown from "react-countdown";
import ChatVoteModal from "./ChatVoteModal";
import ChatResultModal from "./ChatResultModal";

const ChatHeader = () => {
  const people = [
    { name: "익명1", img: image1 },
    { name: "익명2", img: image2 },
    { name: "익명3", img: image3 },
    { name: "익명4", img: image4 },
    { name: "익명5", img: image5 },
    { name: "익명6", img: image6 },
  ];

  const listItems = people.map((person) => (
    <HeaderUser key={person.name}>
      <HeaderUserImageBorder>
        <HeaderUserImage src={person.img} alt="1" />
      </HeaderUserImageBorder>
      <HeaderUserName>{person.name}</HeaderUserName>
    </HeaderUser>
  ));

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

  //렌더링
  return (
    <>
      <HeaderContainer>{listItems}</HeaderContainer>
      <Countdown date={Date.now() + 1000 * 60 * 4.99} renderer={renderer} />
    </>
  );
};

export default ChatHeader;
