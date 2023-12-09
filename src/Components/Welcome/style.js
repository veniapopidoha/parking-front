import styled from "styled-components";

export const Wrap = styled.div`
  background: #fecb21;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Title = styled.h4`
  color: #616467;
  font-family: Montserrat;
  font-size: 32px;
  margin-bottom: 20px;
`;

export const Limits = styled.p`
  color: #616467;
  font-family: Montserrat;
  font-size: 18px;
`;

export const Close = styled.button`
  top: 40px;
  left: 40px;
  position: absolute;
  font-size: 28px;
  font-weight: 600;
  background: none;
  border: none;
  color: #616467;
  cursor: pointer;
`;
