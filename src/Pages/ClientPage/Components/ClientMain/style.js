import styled from "styled-components";

export const Wrap = styled.div`
  height: 100%;
  display: flex;
  align-items: start;
  justify-content: space-between;
`;

export const Image = styled.img`
  transform: rotate(180deg);
  max-height: 596px;
  height: 100%;
  width: 100%;
`;

export const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  width: 100%;
`;

export const WrapContent = styled.div`
  display: flex;
  align-items: start;
  gap: 50px;
`;
