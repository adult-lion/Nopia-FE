import React, { useState } from "react";
import { Modal, Button } from "@mui/material";
import {
  ChatModalBox,
  ChatModalHeader,
  ChatModalHeader2,
  ChatModalButton,
  TextLogo,
} from "../../styles/ChatStyles";
import { useNavigate } from "react-router-dom";

const ChatResultModal = ({ result }) => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div>
      <Modal open={open}>
        <ChatModalBox sx={{ textAlign: "center" }}>
          <TextLogo style={{ marginBottom: "15px" }} />
          <ChatModalHeader style={{ marginBottom: "15px" }}>
            술래 승리!
          </ChatModalHeader>
          <ChatModalHeader2>
            술래는 익명 1이 아닙니다!
            <br />
            술래는 익명 3입니다!
          </ChatModalHeader2>
          <Button
            variant="contained"
            sx={ChatModalButton}
            onClick={() => {
              console.log(result)
              // navigate("/");
            }}
          >
            돌아가기
          </Button>
        </ChatModalBox>
      </Modal>
    </div >
  );
};

export default ChatResultModal;
