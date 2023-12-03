import styled from "styled-components";

export const Wrap = styled.div`
  position: relative;
  z-index: 25;
  display: flex;
  align-items: center;
  gap: 46px;
  padding: 68px 94px;
  max-width: 1546px;
  width: 100%;
  margin: 0 auto;

  @media only screen and (max-width: 1400px) {
    overflow-x: auto;
    overflow-y: hidden;
  }

  @media only screen and (max-width: 768px) {
    padding: 38px 20px;
  }
`;

export const ClientWrap = styled.div`
  height: 100%;
`;
