import styled from "styled-components";

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 46px;
  margin-bottom: 65px;
`;

export const Title = styled.h2`
  color: #616467;
  font-family: Montserrat;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.525px;
`;

export const Status = styled.p`
  position: relative;
  padding-bottom: 15px;
  color: rgba(0, 0, 0, 0.8);
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.36px;

  &:after {
    position: absolute;
    content: "";
    width: 30px;
    height: 2px;
    left: 0;
    bottom: 0;
    background-color: black;
  }
`;

export const DropDown = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  color: #616467;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.3px;
  max-width: 220px;
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  position: relative;
  cursor: pointer;
  background: ${(props) => (props.checked ? "#FECB21;" : "none")};
  transition: all 150ms;
`;

export const Input = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  acity: 1;
`;

export const TextArea = styled.textarea`
  min-height: 200px;
  width: 100%;
  border-radius: 5px;
  background: #ddd;
  padding: 15px;
  font-size: 20px;
  max-height: 400px;
  resize: vertical;
  border: none;
  outline: none;
  appearance: none;
`;

export const Instructions = styled.div`
  border-radius: 31px;
  background-color: rgba(255, 255, 255, 0.5);
  filter: drop-shadow(-3px 5px 4px rgba(0, 0, 0, 0.25));
  padding: 32px 37px;
  height: 559px;
  overflow: hidden;
  max-width: 540px;
`;

export const InstructionsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 26px;
`;

export const PencilIcon = styled.img`
  width: 34px;
  height: 34px;
  cursor: pointer;
`;

export const InstructionsText = styled.p`
  color: #616467;
  text-shadow: -3px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Montserrat;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: -0.24px;
`;

export const Image = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

export const Button = styled.button`
  background-color: #fecb21;
  color: #616467;
  padding: 16px 42px;
  max-height: 60px;
  border-radius: 24px;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.3px;
  font-family: Montserrat;
  cursor: pointer;
  margin-top: 20px;
`;
