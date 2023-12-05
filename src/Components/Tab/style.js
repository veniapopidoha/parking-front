import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: #fecb21;
  color: #616467;
  padding: 16px 24px;
  max-height: 60px;
  border-radius: 24px;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.3px;
  font-family: Montserrat;
  cursor: pointer;

  @media only screen and (max-width: 1024px) {
    min-width: 220px;
  }

  @media only screen and (max-width: 768px) {
    padding: 12px 18px;
    font-size: 16px;
    min-width: 180px;
  }
`;
