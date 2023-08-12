import React, {useState} from 'react';
import styled from 'styled-components';
import './App.css';
import Button from '@mui/material/Button';
import picture from './설명.png';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
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

function HomePage() {

  const [open,setOpen] = useState(false);

  return (
    <div>
      <h1 className='logo'>
        <span>N</span>
        <span>O</span>
        <span>P</span>
        <span>I</span>
        <span>A</span>
      </h1>
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