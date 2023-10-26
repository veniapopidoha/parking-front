import styled from 'styled-components';
import bg from '../../images/bg2.png';

export const Wrap = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${bg});
  background-position: right;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  color: #000;
  font-family: 'Jost', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
`;

export const StyledInput = styled.input`
  border-radius: 30px;
  padding: 15px 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  font-weight: 600;
  width: 100%;
  outline: none;
  border: 0;
  background-color: #eae9e9;
`;
