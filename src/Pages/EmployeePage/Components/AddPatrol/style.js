import styled from 'styled-components';

export const StyledInput = styled.input`
  border-radius: 30px;
  padding: 15px 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  font-weight: 600;
  width: 30vw;
  outline: none;
  border: 0;
  background-color: #f4f4f4;
  margin-top: 5px;
`;

export const TextArea = styled.textarea`
  border-radius: 30px;
  padding: 15px 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  font-weight: 600;
  width: 30vw;
  min-height: 120px;
  outline: none;
  border: 0;
  background-color: #f4f4f4;
  margin-top: 5px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px;
  border-radius: 31px;
  background: rgba(0, 0, 0, 0.3);
  box-shadow: -3px 5px 4px 0px rgba(0, 0, 0, 0.25);
`;
