import styled from "styled-components";

export const Wrap = styled.div`
  padding: 42px 0 0 97px;
  font-family: Montserrat;
  min-width: 400px;
  max-width: 600px;
  width: 100%;
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    padding: 0;
    max-width: 500px;
    min-width: 300px;
  }

  @media only screen and (max-width: 550px) {
    padding: 0;
    max-width: 300px;
    min-width: 200px;
  }
`;

export const Title = styled.h3`
  color: #616467;
  font-size: 35px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.525px;
  margin-bottom: 46px;
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
`;

export const DescriptionT = styled.dt`
  color: #000;
  font-family: Jost;
  font-size: 29px;
  font-weight: 300;
  line-height: 116%;
  margin-right: 20px;
`;

export const DescriptionD = styled.dd`
  color: #000;
  font-family: Jost;
  font-size: 29px;
  font-weight: 600;
  line-height: 116%;
  min-width: 150px;
`;

export const DescriptionWrap = styled.div`
  display: flex;
  align-item: center;
  justify-content: space-between;
  max-width: 360px;
  width: 100%;
  margin-bottom: 12px;
`;
