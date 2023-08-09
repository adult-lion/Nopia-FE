import styled from "styled-components";
import { Container, Box } from "@mui/material";

const ChatRoom = () => {
  return (
      <Container fixed>
      <Box sx={{ bgcolor: '#55AA55', height: '100vh' }}>
        chat page
      </Box>
      </Container>
  );
};

// const Container = styled.div`
//   width: 1600px;
//   height: 900px;
//   background-color: #55AA55;
//   margin-top: 20px;
//   border-radius: 5px;
// `

export default ChatRoom;