import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
`;

export const Container = styled.div`
  max-width: 1546px;
  padding: 0 94px;
  margin: 0 auto;
  width: 100%;

  @media only screen and (max-width: 768px) {
    padding: 0px 20px;
  }
`;

export const WrapContent = styled.div`
  display: flex;
  align-items: start;
  gap: 50px;
  margin-top: 50px;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
  }
`;

export const Image = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
  max-width: 500px;

  @media only screen and (max-width: 1024px) {
    max-width: 400px;
  }

  @media only screen and (max-width: 768px) {
    max-width: 300px;
  }
`;
