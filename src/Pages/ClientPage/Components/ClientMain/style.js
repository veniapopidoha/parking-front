import styled from "styled-components";

export const Wrap = styled.div`
  height: 100%;
  display: flex;
  align-items: start;
  justify-content: space-between;
`;

export const Container = styled.div`
  max-width: 1546px;
  padding: 0 20px;
  margin: 0 auto;
  width: 100%;
`;

export const WrapContent = styled.div`
  display: flex;
  align-items: start;
  gap: 50px;

  @media only screen and (max-width: 1420px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Image = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;

  @media only screen and (max-width: 768px) {
    max-width: 400px;
  }
`;
