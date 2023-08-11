import React from "react";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";
import image5 from "../../assets/images/image5.jpg";
import image6 from "../../assets/images/image6.jpg";
import image7 from "../../assets/images/image7.jpg";
import image8 from "../../assets/images/image8.jpg";
import {
  HeaderContainer,
  HeaderUser,
  HeaderUserImageBorder,
  HeaderUserImage,
  HeaderUserName,
} from "../../styles/index";

const ChatHeader = () => {
  const people = [
    { name: "익명1", img: image1 },
    { name: "익명2", img: image2 },
    { name: "익명3", img: image3 },
    { name: "익명4", img: image4 },
    { name: "익명5", img: image5 },
    { name: "익명6", img: image6 },
    { name: "익명7", img: image7 },
    { name: "익명8", img: image8 },
  ];

  const listItems = people.map((person) => (
    <HeaderUser key={person.name}>
      <HeaderUserImageBorder>
        <HeaderUserImage src={person.img} alt="1" />
      </HeaderUserImageBorder>
      <HeaderUserName>{person.name}</HeaderUserName>
    </HeaderUser>
  ));

  return <HeaderContainer>{listItems}</HeaderContainer>;
};

export default ChatHeader;
