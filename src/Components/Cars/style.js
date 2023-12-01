import styled from "styled-components";

export const Wrap = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  filter: drop-shadow(-3px 5px 4px rgba(0, 0, 0, 0.25));
  padding: 45px 64px 0 35px;
  min-height: 844px;
  border-radius: 30px;
  max-width: 1812px;
  width: 100%;
  margin: 0 auto;
`;

export const Table = styled.table`
  width: 100%;

  a {
    text-decoration: none;
  }
`;

export const TableHeader = styled.tr`
  display: flex;
  align-items: center;
  overflow-x: auto;
  max-width: 1200px;
  padding: 0 20px;
  gap: 25px;
  margin-bottom: 50px;
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
  white-space: nowrap;
`;

export const TableBody = styled.tbody`
  display: flex;
  flex-direction: column;
  gap: 17px;
`;

export const TableRow = styled.tr`
  border-radius: 30px;
  border: 1px solid rgba(0, 0, 0, 0);
  background: #fff;
  padding: 18px 20px;
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const TableData = styled.td`
  color: #626060;
  text-align: center;
  font-family: Jost;
  font-size: 20px;
  font-weight: 600;
  line-height: 116%;
`;

export const TableDataS = styled.td`
  color: #626060;
  font-family: Jost;
  font-size: 15px;
  font-weight: 500;
  line-height: 116%;
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
`;
