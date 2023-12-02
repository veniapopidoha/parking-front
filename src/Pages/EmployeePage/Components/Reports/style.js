import styled from "styled-components";

export const Table = styled.table`
  width: 100%;

  a {
    text-decoration: none;
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
