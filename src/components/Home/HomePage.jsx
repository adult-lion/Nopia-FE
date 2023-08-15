import React, {useState} from 'react';
import styled from 'styled-components';
import '../../App.css';
import Button from '@mui/material/Button';
import picture from '../../assets/images/home.png';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';

const Img = styled.img`
  width: 50%;
  max-width: 600px;
  margin-bottom: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Rule = styled.div`
  font-size: 15px;
  color: #ccc;
  text-align: center;
  margin-bottom: 10px;
`;

const H1 = styled.h1`
  font-size: 130px;
  text-align: center;
  padding-bottom: 0%;
`;

const Span = styled.span`
  font-weight: bold;

  &:nth-child(1) {
    color: #ff0000;
  }
  &:nth-child(2) {
    color: #ffffff;
  }
  &:nth-child(3) {
    color: #0085FF;
  }
  &:nth-child(4) {
    color: #7B65FF;
  }
  &:nth-child(5) {
    color: #FF59A9;
  }
`;


function HomePage() {

  const [open,setOpen] = useState(false);

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
          <Button variant="outlined" color="error"
          onClick={() => {
            setOpen(true);
          }}>
            GAME START
          </Button>
          <Dialog open={open}>
            <DialogTitle>AGE</DialogTitle>
              <Box sx={{width: '100%', maxWidth: 360, bgcolor:'background.paper'}}>
                <nav aria-label="main mailbox folder">
                  <List>
                    {/* 20대 */}
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <Checkbox 
                          edge="start"/>
                        </ListItemIcon>
                        <ListItemText primary="20대" />
                      </ListItemButton>
                    </ListItem>
                    {/* 30대 */}
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <Checkbox
                          edge="start" />
                        </ListItemIcon>
                        <ListItemText primary="30대" />
                      </ListItemButton>
                    </ListItem>
                    {/* 40대 */}
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <Checkbox
                          edge="start" />
                        </ListItemIcon>
                        <ListItemText primary="40대" />
                      </ListItemButton>
                    </ListItem>
                    {/* 50대 */}
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <Checkbox
                          edge="start" />
                        </ListItemIcon>
                        <ListItemText primary="50대" />
                      </ListItemButton>
                    </ListItem>
                    {/* 60대 */}
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <Checkbox
                          edge="start" />
                        </ListItemIcon>
                        <ListItemText primary="60대" />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </nav>
              </Box>
              <Button 
              onClick={() => {
                setOpen(false);
              }}>select</Button>
          </Dialog>
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