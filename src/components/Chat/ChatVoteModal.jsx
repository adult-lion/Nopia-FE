import React, { useState } from "react";
import { Modal, Button } from "@mui/material";
import {
  ChatModalBox,
  HeaderUserImage,
  HeaderUser,
  VoteGroup,
  ChatModalButton,
  ChatModalHeader,
  HeaderUserName,
  VoteOnImg,
  VoteUserWrap,
} from "../../styles/ChatStyles";
import voteimg from "../../assets/images/vote.jpg";
import useChatService from "../../hooks/useChatService";

// start
const ChatVoteModal = ({ people }) => {
  // 모달_열기/닫기 상태
  const [open, setOpen] = useState(true);
  // 모달_열기/닫기 함수
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // 유저 선택 상태
  const [selectedPersonIndex, setSelectedPersonIndex] = useState(null);
  const [userVote, setUserVote] = useState("");

  const {
    sendVote
  } = useChatService();

  const handleSelectPerson = (index) => {
    setSelectedPersonIndex(index === selectedPersonIndex ? null : index);
  };

  const listItems = people.map((person, index) => (
    <HeaderUser key={index} style={{ marginBottom: '30px' }}>
      <VoteUserWrap>
        <HeaderUserImage
          onClick={() => {
            handleSelectPerson(index);
            setUserVote(person.name);
          }
          }
          src={person.img}
          alt="1"
        />
        {selectedPersonIndex === index && (
          <VoteOnImg src={voteimg} alt="voteimg" />
        )}
      </VoteUserWrap>
      <HeaderUserName>{person.name}</HeaderUserName>
    </HeaderUser>
  ));



  //렌더링
  return (
    <div>
      {/* 모달창 */}
      <Modal open={open}>
        {/* 모달_컨테이너 */}
        <ChatModalBox>
          {/* 모달_헤더 텍스트 */}
          <ChatModalHeader>술래를 지목해주세요!</ChatModalHeader>
          {/* 모달_유저들 */}
          <VoteGroup>{listItems}</VoteGroup>
          {/* 모달_ 버튼 */}
          <Button
            variant="contained"
            sx={ChatModalButton}
            onClick={() => sendVote(userVote)}
          >
            지목하기
          </Button>
        </ChatModalBox>
      </Modal>
    </div>
  );
};

export default ChatVoteModal;
