import styled from "styled-components";

export const Wrap = styled.div`
  max-width: 1546px;
  padding: 20px 94px 29px 94px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  width: 100%;
`;

export const Title = styled.h2`
  color: #616467;
  font-family: Montserrat;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: 35px;
  letter-spacing: -0.525px;
  word-wrap: break-word;

  @media only screen and (max-width: 1200px) {
    font-size: 20px;
  }
`;

export const StyledInput = styled.input`
  border-radius: 30px;
  padding: 15px 20px;
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  font-weight: 600;
  width: 100%;
  outline: none;
  border: 0;
  background-color: #eae9e9;
`;

export const TopWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 20px;
  margin-bottom: 50px;
  align-self: start;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    align-items: start;
    margin: 20px 0;
  }
`;

export const BottomWrap = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  width: 100%;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const Leftside = styled.div`
  max-width: 300px;
  width: 100%;
  margin-right: 50px;

  @media only screen and (max-width: 1200px) {
    margin-bottom: 30px;
    order: 2;
  }

  @media only screen and (max-width: 768px) {
    max-width: 400px;
    margin-right: 0px;
    margin-left: 0px;
  }

  @media only screen and (max-width: 400px) {
    max-width: 300px;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  margin-bottom: 40px;

  @media only screen and (max-width: 1200px) {
    gap: 16px;
  }
`;

export const Status = styled.p`
  color: rgba(0, 0, 0, 0.8);
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.36px;
  position: relative;
  padding-bottom: 15px;

  &:after {
    position: absolute;
    content: "";
    width: 35px;
    height: 2px;
    left: 0;
    bottom: 0;
    background-color: black;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 16px;
  }
`;
