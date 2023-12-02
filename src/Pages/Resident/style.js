import styled from "styled-components";

export const Wrap = styled.div`
  height: 100vh;
  max-width: 1546px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  gap: 20px;
  margin-bottom: 50px;
  align-self: start;
`;

export const BottomWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 80px;
  margin-bottom: 50px;
`;
