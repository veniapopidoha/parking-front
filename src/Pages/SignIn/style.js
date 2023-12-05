import styled from "styled-components";
import bg1 from "../../images/bg1.png";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${bg1});
  min-height: 100vh;
  background-size: cover;
`;

export const Title = styled.h1`
  color: #3f3d56;
  text-shadow: -3px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: "Montserrat", sans-serif;
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 53.333% */
  letter-spacing: -0.675px;
  margin-bottom: 30px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px;
  border-radius: 31px;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: -3px 5px 4px 0px rgba(0, 0, 0, 0.25);

  @media only screen and (max-width: 768px) {
    padding: 40px;
  }
`;

export const Button = styled.button`
  border-radius: 30px;
  border: none;
  padding: 10px 80px;
  margin-top: 20px;
  background-color: ${({ disabled }) => (disabled ? "#D3D8E1" : "#fecb21")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  color: #626060;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.27px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
    padding: 10px 40px;
    font-size: 16px;
  }
`;

export const Error = styled.h3`
  color: red;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 500;
  max-width: 250px;
  margin: 4px;
`;

export const Container = styled.div`
  margin-bottom: 15px;
`;
