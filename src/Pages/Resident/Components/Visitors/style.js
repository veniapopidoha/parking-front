import styled from "styled-components";

export const Wrap = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  filter: drop-shadow(-3px 5px 4px rgba(0, 0, 0, 0.25));
  padding: 45px 64px 45px 35px;
  border-radius: 30px;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;

  @media only screen and (max-width: 1340px) {
    margin-bottom: 50px;
  }

  @media only screen and (min-width: 768px) {
    padding: 45px 64px 45px 35px;
  }
`;

export const Table = styled.table`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;

  a {
    text-decoration: none;
  }
`;

export const TableHeader = styled.tr`
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  max-width: 1200px;
  padding: 0 20px;
  gap: 25px;
  margin-bottom: 50px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const TableHead = styled.th`
  color: #626060;
  border-radius: 30px;
  border: 1px solid rgba(0, 0, 0, 0);
  background: #fecb21;
  font-family: Montserrat;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  padding: 18px 0px;
  letter-spacing: -0.27px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const TableBody = styled.tbody`
  display: flex;
  flex-direction: column;
  gap: 17px;
  max-width: 1200px;

  @media only screen and (max-width: 768px) {
    max-width: 500px;
  }

  @media only screen and (max-width: 590px) {
    max-width: 400px;
  }

  @media only screen and (max-width: 480px) {
    max-width: 320px;
  }

  @media only screen and (max-width: 400px) {
    max-width: 250px;
  }

  @media only screen and (max-width: 360px) {
    max-width: 220px;
  }
`;

export const TableRow = styled.tr`
  border-radius: 30px;
  border: 1px solid rgba(0, 0, 0, 0);
  background: #fff;
  padding: 18px 20px;
  display: flex;
  align-items: center;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    gap: 10px;
  }
`;

export const TableData = styled.td`
  color: #626060;
  overflow: hidden;
  text-align: center;
  font-family: Jost;
  font-size: 20px;
  font-weight: 600;
  line-height: 116%;
  overflow-x: auto;
  overflow-y: hidden;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media only screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const TableDataS = styled.td`
  color: #626060;
  font-family: Jost;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  line-height: 116%;
  overflow-x: auto;
  overflow-y: hidden;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Title = styled.h3`
  color: #616467;
  font-family: Montserrat;
  font-size: 36px;
  font-weight: 600;
  line-height: 33px;
  letter-spacing: -0.54px;
  margin-bottom: 47px;
`;

export const ToggleButton = styled.button`
  position: absolute;
  right: 45px;
  background: transparent;
  border: none;

  @media only screen and (max-width: 480px) {
    right: 32px;
  }

  @media only screen and (max-width: 360px) {
    right: 12px;
  }
`;

export const ToggleImage = styled.img`
  width: 42px;
  height: 42px;

  @media only screen and (max-width: 768px) {
    width: 32px;
    height: 32px;
  }

  @media only screen and (max-width: 480px) {
    width: 22px;
    height: 22px;
  }
`;

export const Image = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
  max-width: 500px;

  @media only screen and (max-width: 1024px) {
    max-width: 400px;
  }

  @media only screen and (max-width: 768px) {
    max-width: 300px;
  }
`;
