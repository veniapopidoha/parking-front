import styled from "styled-components";

export const Wrap = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  filter: drop-shadow(-3px 5px 4px rgba(0, 0, 0, 0.25));
  padding: 45px 64px 0 35px;
  min-height: 844px;
  border-radius: 30px;
  max-width: 1350px;
  width: 100%;
  margin-left: 60px;
`;

export const TableBody = styled.tbody`
  display: flex;
  align-items: center;
  position: relative;
`;

export const TableHead = styled.th`
  color: #626060;
  border-radius: 30px;
  border: 1px solid rgba(0, 0, 0, 0);
  background: #fecb21;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  padding: 18px 0px;
  letter-spacing: -0.27px;
  white-space: nowrap;
  min-width: 309px;
`;

export const Icon = styled.img`
  width: 42px;
  heigth: 42px;
`;

export const IconWrap = styled.div`
  position: absolute;
  right: -56px;
`;

export const Table = styled.table`
  display: flex;
  align-items: center;
`;

export const TableHeader = styled.thead`
  display: flex;
  align-items: center;
  gap: 99px;
  margin-bottom: 50px;
`;

export const TableRow = styled.tr`
  border-radius: 30px;
  border: 1px solid rgba(0, 0, 0, 0);
  flex: 1;
  background: #fff;
  padding: 18px 0px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
`;
