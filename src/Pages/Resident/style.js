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
  color: #000;
  font-family: "Jost", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
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
  gap: 80px;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;
