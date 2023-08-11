import styled from "styled-components";

export const ChatWrap = styled.div`
  width: 70vw;
  height: 85vh;
  background-color: #55AA55;
  margin: 5% 10%;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const ChatContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ChatMessages = styled.div`
  flex: 1;
  padding-top: 40px;
  overflow-y: auto;
  position: relative;
`;

export const ChatInputWrap = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  border-top: 1px solid #ccc;
  margin: 10px;
  border-radius: 5px;
`;

export const StyledInput = styled.input`
  flex-grow: 1;
  border: 1px #cccccc solid;
  padding: 5px;
  transition: border-color 0.3s ease-in-out;

  appearance: none;
  -webkit-appearance: none;

  &:focus {
    border-color: #d6a8e9;
    outline: none;
    box-shadow: 0 0 10px #d6a8e9;
  }
`;