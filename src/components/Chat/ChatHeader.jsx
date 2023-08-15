import React from "react";

import {
  HeaderContainer,
  HeaderUser,
  HeaderUserImageBorder,
  HeaderUserImage,
  HeaderUserName,
} from "../../styles/ChatStyles";

const ChatHeader = ({ people }) => {
  const listItems = people.map((person) => (
    <HeaderUser key={person.name}>
      <HeaderUserImageBorder>
        <HeaderUserImage src={person.img} alt="1" />
      </HeaderUserImageBorder>
      <HeaderUserName>{person.name}</HeaderUserName>
    </HeaderUser>
  ));

  //렌더링
  return (
    <>
      <HeaderContainer>{listItems}</HeaderContainer>
    </>
  );
};

export default ChatHeader;
