import styled from 'styled-components';

export const Wrap = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  filter: drop-shadow(-3px 5px 4px rgba(0, 0, 0, 0.25));
  background-color: rgba(0, 0, 0, 0.2);
  width: fit-content;
  border-radius: 30px;
  border: 1px solid #000;
`;

export const CheckboxWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  label {
    color: rgba(0, 0, 0, 0.8);
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 160% */
    letter-spacing: -0.225px;
  }
`;

export const Checkbox = styled.input`
  accent-color: #3a3a3a;
`;
