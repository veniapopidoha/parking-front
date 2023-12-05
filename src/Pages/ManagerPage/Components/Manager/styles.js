import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  height: 100%;
`;

export const WrapContent = styled.div`
  display: flex;
  align-items: start;
  height: 100%;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 46px;
  margin-bottom: 40px;
  overflow: hidden;

  @media only screen and (max-width: 1200px) {
    gap: 16px;
  }
`;

export const Leftside = styled.div`
  margin-right: 50px;
  max-width: 500px;
  width: 100%;

  @media only screen and (max-width: 768px) {
    max-width: 400px;
    margin-right: 0px;
    margin-bottom: 20px;
    margin-left: 0px;
  }

  @media only screen and (max-width: 400px) {
    max-width: 300px;
  }
`;

export const Title = styled.h2`
  color: #616467;
  font-family: Montserrat;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.525px;

  @media only screen and (max-width: 1200px) {
    font-size: 20px;
  }
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
    content: ""; /* Add a value here */
    width: 30px;
    height: 2px;
    left: 0;
    bottom: 0;
    background-color: black;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 16px;
  }
`;
