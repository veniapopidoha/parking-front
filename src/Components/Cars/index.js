import {
  Image,
  TableBody,
  TableData,
  TableDataS,
  TableHead,
  TableHeader,
  TableRow,
  Title,
  Wrap,
} from "./style";
import bgImg from "../../images/bg4.png";

export const Cars = () => {
  return (
    <>
      <Wrap>
        <Title>Car List</Title>
        <table>
          <thead>
            <TableHeader>
              <TableHead>License plate</TableHead>
              <TableHead>Model</TableHead>
              <TableHead>Colour</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>End Date</TableHead>
            </TableHeader>
          </thead>
          <TableBody>
            <TableRow>
              <TableData>СE7248VB</TableData>
              <TableDataS>Reno</TableDataS>
              <TableDataS>12.10.2023 11:30</TableDataS>
              <TableData>Reno</TableData>
              <TableData>13.10.2023 11:30</TableData>
            </TableRow>
          </TableBody>
        </table>
      </Wrap>
      <Image src={bgImg} alt="bg" />
    </>
  );
};
