import styled from "styled-components";

export const Wrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const WrapContent = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 46px;
  margin-top: 40px;
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
    content: ""; /* Add a value here */
    width: 30px;
    height: 2px;
    left: 0;
    bottom: 0;
    background-color: black;
  }
`;
