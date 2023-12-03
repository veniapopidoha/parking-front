import styled from "styled-components";

export const Wrap = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  filter: drop-shadow(-3px 5px 4px rgba(0, 0, 0, 0.25));
  padding: 45px 64px 45px 35px;
  border-radius: 30px;
  max-width: 1350px;
  width: 100%;
  margin-bottom: 30px;
`;

export const TableBody = styled.tbody`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  position: relative;
`;

export const TableHead = styled.td`
  color: #626060;
  border-radius: 30px;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0);
  background: #fecb21;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  padding: 18px 0px;
  letter-spacing: -0.27px;
`;

export const Icon = styled.img`
  width: 36px;
  heigth: 36px;
  cursor: pointer;
`;

export const IconWrap = styled.td`
  position: absolute;
  right: -45px;
`;

export const Table = styled.table`
  display: flex;
  align-items: center;
`;

export const TableHeader = styled.tr`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 50px;

  @media only screen and (max-width: 768px) {
    display: none;
    margin-bottom: 20px;
  }
`;

export const TableRow = styled.td`
  gap: 20px;
  border-radius: 30px;
  border: 1px solid rgba(0, 0, 0, 0);
  flex: 1;
  width: 100%;
  background: #fff;
  padding: 18px 20px;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const TableData = styled.td`
  color: #626060;
  font-family: Jost;
  overflow-x: auto;
  overflow-y: hidden;
  text-align: center;

  font-size: 20px;
  font-weight: 600;
  line-height: 116%;
`;

export const TableDataS = styled.td`
  color: #626060;
  font-family: Jost;
  overflow-x: auto;
  overflow-y: hidden;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  line-height: 116%;
`;
