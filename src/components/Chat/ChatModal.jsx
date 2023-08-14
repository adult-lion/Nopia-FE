import React from "react";
import { Modal } from "@mui/material";
import {
  ChatModalBox,
  HeaderUserImage,
  HeaderUser,
  RadioGroupStyle,
  ChatModalButton,
  ChatModalHeader,
} from "../../styles/index";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

const ChatModal = ({ people }) => {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const listItems = people.map((person) => (
    <HeaderUser key={person.name} style={{ marginBottom: "30px" }}>
      <HeaderUserImage src={person.img} alt="1" />

      <FormControlLabel
        value={person.name}
        control={<Radio />}
        label={person.name}
      />
    </HeaderUser>
  ));

  //렌더링
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <ChatModalBox>
          <ChatModalHeader>술래를 지목해주세요!</ChatModalHeader>
          <FormControl>
            <RadioGroup name="row-radio-buttons-group" style={RadioGroupStyle}>
              {listItems}
            </RadioGroup>
            <Button variant="contained" sx={ChatModalButton}>
              지목하기
            </Button>
          </FormControl>
        </ChatModalBox>
      </Modal>
    </div>
  );
};

export default ChatModal;
