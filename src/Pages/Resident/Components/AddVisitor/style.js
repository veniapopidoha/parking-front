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
  max-width: 500px;

  @media only screen and (max-width: 1024px) {
    max-width: 400px;
  }

  @media only screen and (max-width: 768px) {
    max-width: 300px;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: start;
  gap: 26px;
  justify-content: center;

  @media only screen and (max-width: 1200px) {
    margin-bottom: 30px;
  }

  @media only screen and (max-width: 360px) {
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  color: #000;
  font-family: Jost;
  font-size: 29px;
  font-weight: 600;
  line-height: 116%;

  @media only screen and (max-width: 1200px) {
    font-size: 20px;
  }
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
  padding: 15px 16px;
  color: #000;
  font-family: Jost;
  font-size: 20px;
  font-weight: 600;
  line-height: 116%;
  outline: none;
  border: 0;
  background-color: #eae9e9;

  @media only screen and (max-width: 1200px) {
    font-size: 14px;
    padding: 13px 23px;
  }
`;
