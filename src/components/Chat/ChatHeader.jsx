import React from "react";
import styled from "styled-components";
import image1 from '../../assets/images/image1.jpg'
import image2 from '../../assets/images/image2.jpg'
import image3 from '../../assets/images/image3.jpg'
import image4 from '../../assets/images/image4.jpg'
import image5 from '../../assets/images/image5.jpg'
import image6 from '../../assets/images/image6.jpg'
import image7 from '../../assets/images/image7.jpg'
import image8 from '../../assets/images/image8.jpg'


const Container = styled.div`
  background-color: #e6ecc9;
  display:flex;
  justify-content:center;
  align-items:center;
  padding-top:20px;
  padding-bottom:20px;
  /* overflow-x: scroll; //가로 스크롤 사용 */
  width:1920px;
`;

const UserImage = styled.img`
  border-radius: 50%;
  background-color: beige;
  width: 80px;
  height: 80px;
`;

const UserImageBorder = styled.div`
    width:90px;
    height:90px;
    border-radius:50%;
    border: 2px solid skyblue;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const User = styled.div`
  margin-left:30px;  
  margin-right:30px;
`;

const UserName = styled.div`
    text-align:center;
    color: #a0a087;
    font-size: 20px;
    font-weight:bold;
`;

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
    <User key={person.name}>
      {/* <img src={person.src} alt="1"></img> */}
      {/* <UserImageBorder><UserImage /></UserImageBorder> */}
      <UserImageBorder><UserImage src={person.img} alt="1"/></UserImageBorder>
      <UserName>{person.name}</UserName>
    </User>
  ));

  return (
    <Container>
        {listItems}
    </Container>
  );
};

export default ChatHeader;
