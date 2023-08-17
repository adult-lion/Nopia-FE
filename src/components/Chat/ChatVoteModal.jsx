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

// start
const ChatVoteModal = ({ people }) => {
  // 모달_열기/닫기 상태
  const [open, setOpen] = useState(true);
  // 모달_열기/닫기 함수
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // 유저 선택 상태
  const [isSelected, setIsSelected] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  // 유저 선택 상태 변경 함수
  const Selected = (index) => {
    const updatedSelected = [...isSelected]; // 새로운 배열을 만들어서 isSelected 배열을 복사
    updatedSelected[index] = !updatedSelected[index]; // index 위치의 값이 true이면 false로, false이면 true로 토글
    setIsSelected(updatedSelected); // 변경된 배열로 isSelected 상태를 업데이트
    console.log("click"); // 클릭이 일어났을 때 메시지를 출력
  };

  // map으로 유저들 투표칸 뿌리기
  const listItems = people.map((person, index) => (
    <HeaderUser key={index} style={{ marginBottom: "30px" }}>
      {isSelected[index] === true ? (
        <>
          <VoteUserWrap>
            <HeaderUserImage
              onClick={() => Selected(index)}
              src={person.img}
              alt="1"
            />
            <VoteOnImg
              onClick={() => Selected(index)}
              src={voteimg}
              alt="voteimg"
            />
          </VoteUserWrap>
          <HeaderUserName>{person.name}</HeaderUserName>
        </>
      ) : (
        <>
          <HeaderUserImage
            onClick={() => Selected(index)}
            src={person.img}
            alt="1"
          />
          <HeaderUserName>{person.name}</HeaderUserName>
        </>
      )}
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
          <Button variant="contained" sx={ChatModalButton}>
            지목하기
          </Button>
        </ChatModalBox>
      </Modal>
    </div>
  );
};

export default ChatVoteModal;
