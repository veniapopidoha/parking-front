import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 46px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 44px 89px 36px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid #000;
  filter: drop-shadow(-3px 5px 4px rgba(0, 0, 0, 0.25));
  border-radius: 20px;
`;

export const Input = styled.input`
  padding: 17px 18px 14px;
  max-width: 360px;
  width: 100%;
  border-radius: 30px;
  border: 1px solid rgba(0, 0, 0, 0);
  margin-bottom: 12px;
  background: #fff;
  color: rgba(0, 0, 0, 0.8);
  font-size: 15px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.225px;
  font-family: Montserrat;
`;

export const Textarea = styled.textarea`
  padding: 24px 24px 210px;
  width: 100%;
  resize: none;
  border-radius: 30px;
  border: 1px solid rgba(0, 0, 0, 0);
  background: #fff;
  color: rgba(0, 0, 0, 0.8);
  font-size: 15px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.225px;
  font-family: Montserrat;
  margin-bottom: 27px;
`;

export const Label = styled.label`
  color: rgba(0, 0, 0, 0.8);
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.225px;
  align-self: start;
  margin-bottom: 10px;
`;

export const FormButton = styled.button`
  border-radius: 30px;
  border: 1px solid rgba(0, 0, 0, 0);
  background: #fecb21;
  padding: 16px 129px;
  margin-top: 38px;
  color: #626060;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.27px;
  width: 100%;
  cursor: pointer;
`;

export const ErrorText = styled.p`
  color: red;
  align-self: end;
  font-size: 14px;
`;
