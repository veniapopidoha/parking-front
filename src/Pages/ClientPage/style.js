import styled from "styled-components";

export const Wrap = styled.div`
  position: relative;
  z-index: 25;
  display: flex;
  align-items: center;
  gap: 46px;
  padding: 68px 0;
  max-width: 1546px;
  width: 100%;
  margin: 0 auto;
  heigth: 100vh;

  @media only screen and (max-width: 1340px) {
    overflow-x: scroll;
  }
`;
