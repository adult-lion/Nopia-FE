import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Countdown from "react-countdown";



// start of 채팅 페이지
export const ChatWrap = styled.div`
  width: 70vw;
  height: 85vh;
  background-color: #55aa55;
  margin: 5% 10%;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const ChatContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ChatMessages = styled.div`
  flex: 1;
  padding-top: 40px;
  overflow-y: auto;
  position: relative;
`;

export const ChatInputWrap = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  border-top: 1px solid #ccc;
  margin: 10px;
  border-radius: 5px;
`;

export const StyledInput = styled.input`
  flex-grow: 1;
  border: 1px #cccccc solid;
  padding: 5px;
  transition: border-color 0.3s ease-in-out;

  appearance: none;
  -webkit-appearance: none;

  &:focus {
    border-color: #d6a8e9;
    outline: none;
    box-shadow: 0 0 10px #d6a8e9;
  }
`;
// end of 채팅 페이지

// start of 채팅 페이지 헤더
// 헤더 전체 컨테이너
export const HeaderContainer = styled.div`
  background-color: #e6ecc9;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  /* overflow-x: scroll; //가로 스크롤 사용 */
  width: 70vw;

  @media (max-width: 1200px) {
    display: grid;
    grid-template-rows: auto auto; /* 2개의 행을 자동으로 크기 조절 */
    grid-template-columns: auto auto auto; /* 2개의 행을 자동으로 크기 조절 */
  }
`;

// 헤더 유저 원형 이미지
export const HeaderUserImage = styled.img`
  border-radius: 50%;
  background-color: beige;
  width: 60px;
  height: 60px;
  @media (max-width: 1200px) {
    width: 50px;
    height: 50px;
  }
`;

//  헤더 유저 이미지 테두리
export const HeaderUserImageBorder = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 2px solid skyblue;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1200px) {
    width: 60px;
    height: 60px;
  }
`;

// 헤더 유저 이미지&닉네임 담는 컨테이너
export const HeaderUser = styled.div`
  margin-left: 30px;
  margin-right: 30px;
`;

//  헤더 유저 닉네임
export const HeaderUserName = styled.div`
  text-align: center;
  color: #a0a087;
  font-size: 15px;
  font-weight: bold;
  @media (max-width: 1200px) {
    font-size: 15px;
    font-weight: 800;
  }
`;

// 투표 모달 컨테이너
export const ChatModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400;
  height: 400;
  background-color: white;
  border: 2px solid #000;
  box-shadow: 24;
  padding: 50px;
`;

// 투표 모달 헤더
export const ChatModalHeader = styled.div`
  font-size:30px;
  font-weight:bolder;
  text-align:center;
  margin-bottom:30px;
`

// 투표 모달 라디오 그룹
export const RadioGroupStyle = {
  display:'grid',
  gridTemplateColumns:'1fr 1fr 1fr',
  gridTemplateRows:'1fr 1fr',
};

// 투표 모달 버튼
export const ChatModalButton = {
  backgroundColor: "#8CABFF",
  fontSize: "20px",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#4477CE", // 호버 시 배경색 변경
  },
};

export const CountdownCotainer = styled.div`
  background-color:#C8FFE0;
  color: ${props => props.color || 'black'};
  font-size: 50px;
  font-weight:bold;
  text-align:center;
`;


// end of 채팅 페이지 헤더

// start of 채팅 말풍선
//채팅 wrap
export const ChatBubble = styled.div`
  display: flex;
`;

//채팅 프로필 사진
export const ChatAvatar = styled(Avatar)`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0;
  margin-right: 5px;
`;

//채팅 닉네임
export const ChatNickName = styled.div`
  margin-left: 5px;
  font-weight: bold;
  color: #282828;
`;

//채팅 박스
export const ChatBox = styled(Box)`
  //위치
  //정렬
  text-align: center;
  overflow-wrap: break-word;
  //크기
  padding: 15px 20px;
  max-width: 500px;
  //디자인
  background-color: #5c5cfb;
  border-radius: 20px;
  color: white;
  font-size: 20px;
`;
// end of 채팅 말풍선
