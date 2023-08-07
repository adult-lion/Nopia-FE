import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styled from "@emotion/styled";
import { StepButton } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  height: 400,
  bgcolor: "background.paper",
  border: "2px solid white",
  boxShadow: 24,
  p: 5,
  borderRadius: 5,
};

const StyledBox = styled(Box)``;

const SingInButton = styled.button`
  width: 220px;
  height: 80px;
  border-radius: 50px;
  background-color: white;
  color: black;
  font-weight: bold;
  font-size: 25px;
  &:hover {
    cursor: pointer;
  }
`;

const SignInButton2 = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 10px;
  background-color: black;
  color: white;
  font-weight: bold;
  font-size: 15px;
  &:hover {
    cursor: pointer;
  }
`;

const StyledCloseIcon = styled(CloseIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
`;

const InputContainer = styled.div`
  display: flex;
  margin-left: 20px;
`;

const StyledInput = styled.input`
  color: gray;
  font-size: 20px;
  border-style: inset;
  height: 30px;
`;

const StyledLabel = styled.label``;

function MidiumInput({ label }) {
  return <></>;
}

function SmallInput({ label }) {
  return <></>;
}

const SignUp = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [form, setForm] = useState({
    // 객체 형식의 useState를 생성하여 여러 개의 입력 값을 받을 수 있도록 한다
    ID: "", // <input name='username'/> 요소의 입력 값을 받을 key-value
    AGE: "", // 위와 동일
    PW: "", // 위와 동일
    PWCONFIRM: "", // 위와 동일
    PHONENUMBER: "", // 위와 동일
    CERTIFICATIONNUMBER: "", // 위와 동일
  });
  const { ID, AGE, PW, PWCONFIRM, PHONENUMBER, CERTIFICATIONNUMBER } = form; // form 객체를 비구조화 할당하여 이후 form.username이 아닌 username으로 사용 가능
  const onChange = (e) => {
    const nextForm = {
      ...form, // 기존 form을 복사하여
      [e.target.name]: e.target.value, // event가 발생한 input 요소의 name 값을 입력값으로 변경
      // 즉, 이벤트가 <input name='username'/> 에서 발생했다면 form 객체의 username 키의 value를 이벤트 입력 값으로 변경한다.
    };
    setForm(nextForm); // state 갱신
    console.log(nextForm); // 기능 확인
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      <SingInButton onClick={handleOpen} className="box-border">
        회원가입
      </SingInButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledBox sx={style}>
          <StyledCloseIcon onClick={handleClose} className="hover:cursor-pointer" />
          <form style={{ textAlign: "center" }}>
            <div className="grid grid-cols-6 gap-4 mb-5">
              {/*  */}
              <StyledLabel className="justify-self-end col-span-2">
                아이디
              </StyledLabel>
              <StyledInput
                className="col-span-4"
                name="ID" // name을 username으로 설정하여 form 객체의 username 키의 값을 변경할 수 있도록한다
                value={ID} // form 객체의 username 키의 value에 해당하는 값을 value로 사용
                onChange={onChange} // onChange 시에 onChange 함수 호출
              ></StyledInput>

              {/*  */}
              <StyledLabel className="justify-self-end col-span-2">
                나이
              </StyledLabel>
              <StyledInput
                className="col-span-4"
                name="AGE" // name을 username으로 설정하여 form 객체의 username 키의 값을 변경할 수 있도록한다
                value={AGE} // form 객체의 username 키의 value에 해당하는 값을 value로 사용
                onChange={onChange} // onChange 시에 onChange 함수 호출
              ></StyledInput>

              {/*  */}

              <StyledLabel className="justify-self-end col-span-2">
                비밀번호
              </StyledLabel>
              <StyledInput
                className="col-span-4"
                name="PW" // name을 username으로 설정하여 form 객체의 username 키의 값을 변경할 수 있도록한다
                value={PW} // form 객체의 username 키의 value에 해당하는 값을 value로 사용
                onChange={onChange} // onChange 시에 onChange 함수 호출
              ></StyledInput>

              {/*  */}

              <StyledLabel className="justify-self-end col-span-2">
                비밀번호 확인
              </StyledLabel>
              <StyledInput
                className="col-span-4"
                name="PWCONFIRM" // name을 username으로 설정하여 form 객체의 username 키의 값을 변경할 수 있도록한다
                value={PWCONFIRM} // form 객체의 username 키의 value에 해당하는 값을 value로 사용
                onChange={onChange} // onChange 시에 onChange 함수 호출
              ></StyledInput>

              {/*  */}

              <StyledLabel className="justify-self-end col-span-2">
                번호
              </StyledLabel>
              <StyledInput
                className="col-span-4"
                name="PHONENUMBER" // name을 username으로 설정하여 form 객체의 username 키의 값을 변경할 수 있도록한다
                value={PHONENUMBER} // form 객체의 username 키의 value에 해당하는 값을 value로 사용
                onChange={onChange} // onChange 시에 onChange 함수 호출
              ></StyledInput>

              {/*  */}
              <StyledLabel className="text-xs justify-self-end col-span-2">
                인증번호
              </StyledLabel>
              <StyledInput
                className=" col-span-3"
                style={{ height: "15px" }}
                name="CERTIFICATIONNUMBER" // name을 username으로 설정하여 form 객체의 username 키의 값을 변경할 수 있도록한다
                value={CERTIFICATIONNUMBER} // form 객체의 username 키의 value에 해당하는 값을 value로 사용
                onChange={onChange} // onChange 시에 onChange 함수 호출
              ></StyledInput>
              <button
                className="self-start text-xs"
                style={{ backgroundColor: "black", color: "white" }}
              >
                확인
              </button>
            </div>
            <SignInButton2>계정 생성하기</SignInButton2>
          </form>
        </StyledBox>
      </Modal>
    </div>
  );
};

export default SignUp;
