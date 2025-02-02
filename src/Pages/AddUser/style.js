import styled from "styled-components";

export const Wrap = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  filter: drop-shadow(-3px 5px 4px rgba(0, 0, 0, 0.25));
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  border: 1px solid #000;

  @media only screen and (max-width: 1200px) {
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 768px) {
    max-width: 400px;
    width: 100%;
    overflow-x: auto;
  }

  @media only screen and (max-width: 480px) {
    padding: 20px;
  }
`;
export const Row = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:space-between;
  margin-top:15px;
  width: 100%;
  max-width:360px;
  &>div{
    width:70%;
  }
  &>span{
    padding:15px 20px;
  }
`;
export const CheckboxWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin: 10px 0;
  label {
    color: rgba(0, 0, 0, 0.8);
    font-family: "Montserrat", sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 160% */
    letter-spacing: -0.225px;
  }

  @media only screen and (max-width: 768px) {
    gap: 10px;
    margin: 10px;
    width: 100%;
  }
`;

export const Checkbox = styled.input`
  accent-color: #3a3a3a;
  margin-right: 5px;
`;

export const ComboBox = styled.div`
  position: absolute;
  background-color: white;
  width: 100%;
  bottom: 0;
  transform: translateY(110%);
  border-radius: 20px;
  padding: 10px 0;

  p {
    &:hover {
      background-color: #d3d3d3;
      cursor: pointer;
    }
  }
`;

export const ComboBoxText = styled.p`
  font-weight: 600;
  padding: 10px;
  transition: all 0.5s;
  margin: 5px 0;
`;
export const Result = styled.p`
  font-weight: 600;
  padding: 10px;
  transition: all 0.5s;
  margin: 5px 0;
  color:green
`;
export const Loading = styled.p`
  font-weight: 600;
  padding: 10px;
  transition: all 0.5s;
  margin: 5px 0;
  color:gray;
`;
export const FileError = styled.p`
  font-weight: 600;
  padding: 10px;
  transition: all 0.5s;
  margin: 5px 0;
  color:red;
`;