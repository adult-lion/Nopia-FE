import React from "react";
import useChatService from "../../hooks/useChatService";

import {
  HeaderContainer,
  HeaderUser,
  HeaderUserImageBorder,
  HeaderUserImage,
  HeaderUserName,
} from "../../styles/ChatStyles";

import { imageMap } from "./ChatVoteModal";

const ChatHeader = () => {
  const { aliveUsers } = useChatService();
  console.log(aliveUsers, "header");

  const listItems = aliveUsers.map((person, index) => (
    <HeaderUser key={person.id}>
      <HeaderUserImageBorder>
        <HeaderUserImage src={imageMap[index + 1]} alt="user" />
      </HeaderUserImageBorder>
      <HeaderUserName>{person.nickname}</HeaderUserName>
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
