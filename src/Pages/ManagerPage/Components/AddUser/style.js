import styled from "styled-components";

export const Wrap = styled.div`
  height: 100%;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 20;
  background-color: rgba(255, 255, 255, 0.5);
`;

export const Image = styled.img`
  width: 100%;
  max-height: 340px;
`;
