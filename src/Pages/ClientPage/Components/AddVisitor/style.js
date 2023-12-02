import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  gap: 140px;
  align-items: start;
`;

export const Image = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;

  @media only screen and (max-width: 768px) {
    max-width: 400px;
  }
`;

export const Form = styled.form`
  padding-top: 42px;
  display: flex;
  align-items: start;
  gap: 26px;
  justify-content: center;
`;

export const Title = styled.h2`
  color: #000;
  font-family: Jost;
  font-size: 29px;
  font-weight: 600;
  line-height: 116%;
`;

export const DateTitle = styled.h4`
  color: #000;
  font-family: Jost;
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 20px;
`;

export const StyledInput = styled.input`
  border-radius: 23px;
  padding: 26px 46px;
  color: #000;
  font-family: Jost;
  font-size: 29px;
  font-weight: 600;
  line-height: 116%;
  outline: none;
  border: 0;
  background-color: #eae9e9;
`;
