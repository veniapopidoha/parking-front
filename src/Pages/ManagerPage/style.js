import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 23px;
  padding: 68px 94px;
  max-width: 1546px;
  width: 100%;
  margin: 0 auto;

  @media only screen and (max-width: 1024px) {
    padding: 38px 94px;
  }

  @media only screen and (max-width: 768px) {
    padding: 38px 20px;
    gap: 15px;
  }
`;

export const ManagerWrap = styled.div``;

export const Container = styled.div`
  max-width: 1546px;
  margin: 0 auto;
  padding: 0 94px;
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 768px) {
    padding: 0px 20px;
  }
`;
