import styled from "styled-components";

export const ComboBoxText = styled.p`
  font-weight: 600;
  padding: 10px;
  transition: all 0.5s;
  margin: 5px 0;
`;

export const InputWrap = styled.div`
  display: flex;
  position: relative;
  top: -55px;
  z-index: 25;
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

export const ComboBox = styled.div`
  position: absolute;
  background-color: white;
  -webkit-box-shadow: -7px 10px 37px -24px rgba(0, 0, 0, 0.53);
  -moz-box-shadow: -7px 10px 37px -24px rgba(0, 0, 0, 0.53);
  box-shadow: -7px 10px 37px -24px rgba(0, 0, 0, 0.53);
  z-index: 30;
  width: 100%;
  bottom: 0;
  transform: translateY(102%);
  border-radius: 10px;
  padding: 10px 0;

  p {
    &:hover {
      background-color: #d3d3d3;
      cursor: pointer;
    }
  }
`;

export const Button = styled.button`
  border: none;
  background-color: none;
  padding: 10px 20px;
  margin-top: 5px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
`;
