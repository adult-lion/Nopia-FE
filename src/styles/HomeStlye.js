import styled from "styled-components";

export const Img = styled.img`
  width: 50%;
  max-width: 600px;
  margin-bottom: 10px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Rule = styled.div`
  font-size: 15px;
  color: #ccc;
  text-align: center;
  margin-bottom: 10px;
`;

export const H1 = styled.h1`
  font-size: 130px;
  text-align: center;
  padding-bottom: 0%;
`;

export const Span = styled.span`
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