import styled from "styled-components";

export const WrapContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImageWrap = styled.div`
  position: absolute;
  z-index: -1;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const BgImage = styled.img`
  transform: rotate(180deg);
  max-height: 690px;
  width: 100%;
`;

export const Image = styled.img`
  width: 42px;
  heigth: 42px;
`;
