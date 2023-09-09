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
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";
import image5 from "../../assets/images/image5.jpg";
import image6 from "../../assets/images/image6.jpg";

export const imageMap = [image1, image2, image3, image4, image5, image6];

// start
const ChatVoteModal = () => {
  // 모달_열기/닫기 상태
  const [open, setOpen] = useState(true);
  // 모달_열기/닫기 함수
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // 유저 선택 상태
  const [selectedPersonIndex, setSelectedPersonIndex] = useState(null);
  const [userVote, setUserVote] = useState("");

  const { sendVote, aliveUsers } = useChatService();

  const handleSelectPerson = (index) => {
    setSelectedPersonIndex(index === selectedPersonIndex ? null : index);
  };
  console.log(aliveUsers, "vote");
  const listItems = aliveUsers.map((user, index) => (
    <HeaderUser key={user.id} style={{ marginBottom: "30px" }}>
      <VoteUserWrap>
        <HeaderUserImage
          onClick={() => {
            handleSelectPerson(index);
            setUserVote(user.id);
          }}
          src={imageMap[index + 1]}
          alt="user"
        />
        {selectedPersonIndex === index && (
          <VoteOnImg src={voteimg} alt="voteimg" />
        )}
      </VoteUserWrap>
      <HeaderUserName>{user.nickname}</HeaderUserName>
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
            onClick={() => {
              sendVote(userVote);
              setOpen(false);
            }}
          >
            지목하기
          </Button>
        </ChatModalBox>
      </Modal>
    </div>
  );
};

export default ChatVoteModal;
