import styled from "styled-components";

export const TextArea = styled.textarea`
  width: 100%;
  border-radius: 5px;
  background: #ddd;
  padding: 15px;
  font-size: 20px;
  max-height: 400px;
  resize: vertical;
  border: none;
  outline: none;
  appearance: none;
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #616467;
  font-family: Montserrat;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.525px;
  margin-bottom: 20px;
  @media only screen and (max-width: 1200px) {
    font-size: 20px;
  }
`;
