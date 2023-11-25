import styled from "styled-components";

export const InputWrap = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0;
  max-width: 360px;
  width: 100%;
`;

export const Icon = styled.img`
  height: 26px;
`;

export const IconContainer = styled.div`
  border-radius: 30px 0 0 30px;
  padding: 9.5px 20px;
  background-color: #fff;
  margin-top: 5px;
`;

export const StyledInput = styled.input`
  border-radius: 0 30px 30px 0;
  padding: 15px 20px;
  max-width: 360px;
  width: 100%;
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  font-weight: 600;
  width: 100%;
  outline: none;
  border: 0;
  background-color: #f4f4f4;
  margin-top: 5px;
`;
