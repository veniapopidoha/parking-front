import styled from "styled-components";

export const Wrap = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  filter: drop-shadow(-3px 5px 4px rgba(0, 0, 0, 0.25));
  padding: 45px 30px;
  border-radius: 30px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 50px;

  @media only screen and (max-width: 1340px) {
    margin-bottom: 50px;
  }

  @media only screen and (max-width: 768px) {
    padding: 45px 64px 45px 35px;
    overflow-x: scroll;
  }
`;

export const Table = styled.table`
  width: 100%;

  a {
    text-decoration: none;
  }

  @media only screen and (max-width: 768px) {
    min-width: 700px;
    overflow-x: scroll;
  }
`;

export const TableHeader = styled.tr`
  display: flex;
  align-items: center;
  padding: 0 20px;
  gap: 25px;
  margin-bottom: 50px;
  @media only screen and (max-width: 768px) {
    display: none;
  }

  @media only screen and (max-width: 1400px) {
    gap: 10px;
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

  @media only screen and (max-width: 1400px) {
    font-size: 12px;
    padding: 10px 0;
  }
`;

export const TableBody = styled.tbody`
  display: flex;
  flex-direction: column;
  gap: 17px;
  max-width: 1200px;
  width: 100%;

  @media only screen and (max-width: 920px) {
    max-width: 800px;
  }

  @media only screen and (max-width: 768px) {
    max-width: 600px;
  }
`;

export const TableRow = styled.tr`
  border-radius: 30px;
  border: 1px solid rgba(0, 0, 0, 0);
  background: #fff;
  width: 100%;
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
  text-align: center;
  font-family: Jost;
  font-size: 20px;
  font-weight: 600;
  line-height: 116%;

  @media only screen and (max-width: 920px) {
    font-size: 15px;
  }

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

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Title = styled.h3`
  color: #616467;
  font-family: Montserrat;
  font-size: 36px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.54px;
  margin-bottom: 47px;
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
