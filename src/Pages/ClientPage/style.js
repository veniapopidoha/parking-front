import styled from "styled-components";

export const Wrap = styled.div`
  z-index: 25;
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 23px;
  padding: 68px 94px;
  max-width: 1546px;
  width: 100%;
  margin: 0 auto;
  overflow-x: auto;
  overflow-y: hidden;

  @media only screen and (max-width: 1024px) {
    padding: 38px 94px;
  }

  @media only screen and (max-width: 768px) {
    padding: 38px 20px;
    gap: 15px;
  }
`;

export const ClientWrap = styled.div`
  height: 100%;
`;
