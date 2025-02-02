import styled from "styled-components";

export const Wrap = styled.div`
  font-family: Montserrat;
  max-width: 400px;
  width: 100%;
  overflow: hidden;

  @media only screen and (max-width: 1200px) {
    order: 2;
  }

  @media only screen and (max-width: 768px) {
    max-width: 500px;
  }

  @media only screen and (max-width: 550px) {
    max-width: 300px;
  }
`;

export const Title = styled.h3`
  color: #616467;
  font-size: 35px;
  font-weight: 600;
  line-height: 37px;
  letter-spacing: -0.525px;
  margin-bottom: 46px;

  @media only screen and (max-width: 1200px) {
    font-size: 20px;
    margin-bottom: 16px;
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
  margin-bottom: 25px;

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

export const DescriptionT = styled.dt`
  color: #000;
  font-family: Jost;
  font-size: 29px;
  font-weight: 300;
  line-height: 116%;
  margin-right: 20px;

  @media only screen and (max-width: 1200px) {
    font-size: 20px;
  }
`;

export const DescriptionD = styled.dd`
  color: #000;
  font-family: Jost;
  font-size: 29px;
  font-weight: 600;
  line-height: 116%;
  min-width: 150px;

  @media only screen and (max-width: 1200px) {
    font-size: 20px;
  }
`;

export const DescriptionWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 360px;
  width: 100%;
  margin-bottom: 12px;

  @media only screen and (max-width: 1200px) {
    max-width: 280px;
  }
`;

export const Label = styled.label`
  color: #616467;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.3px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
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

  width: 1px;
  acity: 1;
`;
