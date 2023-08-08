import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styled from '@emotion/styled';
import { StepButton } from '@mui/material';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid white',
  boxShadow: 24,
  p: 10,
  borderRadius: 5,
};

const StyledBox = styled(Box)`
`;

const SingInButton = styled.button`
    width: 220px;
    height: 100px;
    border-radius:50px;
    border: 10px solid white;
    background-color:black;
    color:white;
    font-weight:bold;
    font-size:25px;
    &:hover{
        cursor:pointer;
    }
`;

const StyledCloseIcon = styled(CloseIcon)`
    position:absolute;
    top:10px;
    right: 10px;
    width:30px;
    height:30px;
`;

const StyledInput = styled.input`
    border: 2px dashed black;
    color:gray;
    font-size:20px;
`;

const SignIn = ({className}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [idValue, setIdValue] = useState('');
    const [pwValue, setPwValue] = useState('');

    const detectId = (e) => {
        // console.log(e.target.value); // 테스트 코드
        setIdValue(e.target.value);
    }

    const detectPw = (e) => {
        // console.log(e.target.value); //테스트 코드
        setPwValue(e.target.value);
    }

    return (
        <div style={{backgroundColor:'black'}} className={className}>
          <SingInButton onClick={handleOpen} className='box-border'>로그인</SingInButton>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <StyledBox sx={style} >
                <StyledCloseIcon onClick={handleClose} className="hover:cursor-pointer"/>
                <form className='flex flex-col justify-center'>
                    <StyledInput placeholder='ID' className='mb-3' value={idValue} onChange={detectId}></StyledInput>
                    <StyledInput placeholder='PASSWORD' style={{marginBottom:'50px'}} value={pwValue} onChange={detectPw}></StyledInput>
                    <SingInButton style={{borderRadius:'20px', width: '230px', height:'50px', border:'0px' }}>로그인</SingInButton>                </form>
            </StyledBox>
          </Modal>
        </div>
      );
};

export default SignIn;




