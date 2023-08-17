import React, { useState, useEffect } from 'react';
import {
  Img,
  Container,
  Rule,
  H1,
  Span,
} from "../../styles/HomeStlye";
import '../../App.css';
import picture from '../../assets/images/home.png';
import {
  Radio,
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Button,
  Modal,
  Alert
} from "@mui/material";
import { ChatModalBox } from "../../styles/ChatStyles";
import Waiting from "./Waiting";
import useChatService from "../../hooks/useChatService";
import { useCallback } from "react";
import { useSetRecoilState } from 'recoil';
import { UserState } from "../../states/UserState";


function HomePage() {
  const ageList = [10, 20, 30, 40, 50];
  const [open, setOpen] = useState(false);
  const [selectedAge, setSelectedAge] = useState(null);
  const [wait, setWait] = useState(false);
  const setAge = useSetRecoilState(UserState.age);

  const {
    joinQueue,
  } = useChatService();

  const join = useCallback((age) => {
    setWait(true);
    joinQueue();
  }, [joinQueue, setWait]);

  return (
    <div>
      <H1 className='logo'>
        <Span>N</Span>
        <Span>O</Span>
        <Span>P</Span>
        <Span>I</Span>
        <Span>A</Span>
      </H1>
      <Container>
        <div className='gameStart'>
          <Button
            sx={{ width: '200px', height: '60px', border: '5px solid', fontWeight: 'bold', fontSize: '20px' }} variant="outlined" color="error"
            disabled={wait}
            onClick={() => {
              setOpen(true);
            }}
          >
            {wait === true ? (<Waiting />) : "GAME START"}
          </Button>
          <Modal open={open} onClose={() => setOpen(false)}>
            <ChatModalBox sx={{ paddingTop: '20px', paddingBottom: '10px' }}>
              <FormControl>
                <FormLabel sx={{ fontWeight: 'bold', fontSize: '40px', marginBottom: '5px' }} id="demo-radio-buttons-group-label">Age</FormLabel>
                <Box sx={{ width: '300px' }}>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                  >
                    {ageList.map((age) => (
                      <FormControlLabel key={age} onClick={() => {
                        setSelectedAge(age);
                        setAge(age);
                      }} value={age} control={<Radio />} label={age === 50 ? `${age}대 이상` : `${age}대`} />
                    ))}
                  </RadioGroup>
                </Box>
                <Button
                  onClick={() => {
                    setOpen(false);
                    join();
                  }}>select</Button>
              </FormControl>
            </ChatModalBox>
          </Modal>

        </div>
        <br />
        <br />
        <Img src={picture} />
      </Container>
      <Rule className='rule'>
        문의하기 개인정보처리방침 이용약관
      </Rule>
    </div>
  );
}

export default HomePage;
