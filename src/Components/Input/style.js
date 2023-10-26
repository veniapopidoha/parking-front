import styled from 'styled-components';

export const InputWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0;
`;

export const Icon = styled.img`
  height: 26px;
`;

export const IconContainer = styled.div`
  border-radius: 30px 0 0 30px;
  padding: 9.5px 20px;
  background-color: #fff;
`;

export const StyledInput = styled.input`
  border-radius: 0 30px 30px 0;
  padding: 15px 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  font-weight: 600;
  width: 100%;
  outline: none;
  border: 0;
  background-color: #F4F4F4;
`;