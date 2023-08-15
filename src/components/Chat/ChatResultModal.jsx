import React from "react";
import { Modal, FormControl, Button } from "@mui/material";
import {
  ChatModalBox,
  ChatModalHeader,
  ChatModalHeader2,
  ChatModalButton,
  TextLogo,
} from "../../styles";
import { Link } from "react-router-dom";

const ChatResultModal = () => {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
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
          <FormControl>
            <Link to="/HomePage">
              <Button variant="contained" sx={ChatModalButton}>
                돌아가기
              </Button>
            </Link>
          </FormControl>
        </ChatModalBox>
      </Modal>
    </div>
  );
};

export default ChatResultModal;
