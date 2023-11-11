import * as React from 'react';
import {CircularProgress, Box} from '@mui/material';

const Waiting = () => {
  return (
    <Box sx={{ height:'50px', borderRadius: "5px", backgroundColor: "black", textAlign:'center', marginLeft:'auto', marginRight:'auto' }}>
      <CircularProgress size={50}/>
      <div style={{ width: "300px", paddingTop: "10px", color: "white", fontWeight:'bold'}}>채팅방에 입장 중입니다...</div>
    </Box>
  );
};

export default Waiting;