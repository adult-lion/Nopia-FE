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
import useChatService from "../../hooks/useChatService";

const ChatResultModal = ({ result }) => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { exitService } = useChatService();

  return (
    <div>
      <Modal open={open}>
        <ChatModalBox sx={{ textAlign: "center" }}>
          <TextLogo style={{ marginBottom: "15px" }} />
          {/* <ChatModalHeader style={{ marginBottom: "15px" }}>
            술래 승리!
          </ChatModalHeader> */}
          <ChatModalHeader2 style={{ marginTop: "40px" }}>
            {result}
          </ChatModalHeader2>
          <Button
            variant="contained"
            sx={ChatModalButton}
            onClick={() => {
              console.log(result);
              exitService();
              navigate("/");
              window.location.reload();
            }}
          >
            돌아가기
          </Button>
        </ChatModalBox>
      </Modal>
    </div>
  );
};

export default ChatResultModal;
