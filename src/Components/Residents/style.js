import styled from "styled-components";

export const Icon = styled.img`
  width: 32px;
  heigth: 32px;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    width: 28px;
    height: 28px;
  }

  @media only screen and (max-width: 480px) {
    width: 22px;
    height: 22px;
  }
`;

export const IconWrap = styled.td`
  position: absolute;
  right: 0px;

  @media only screen and (max-width: 768px) {
    right: -38px;
  }
`;

export const TableRowContainer = styled.tr`
  display: flex;
  align-items: center;
  gap: 36px;
  max-width: 1000px;
  width: 100%;

  @media only screen and (max-width: 768px) {
    position: relative;
  }
`;
