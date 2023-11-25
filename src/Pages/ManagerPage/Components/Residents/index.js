import { Image, TableData, TableDataS, Title } from "../Cars/style";
import bgImg from "../../../../images/bg4.png";
import Bell from "../../../../images/bell.svg";
import {
  Icon,
  IconWrap,
  TableHeader,
  Wrap,
  TableHead,
  TableRow,
  TableBody,
} from "./style";

export const Residents = () => {
  return (
    <>
      <Wrap>
        <Title>Resident list</Title>
        <table>
          <thead>
            <TableHeader>
              <TableHead>Name</TableHead>
              <TableHead>Unit</TableHead>
              <TableHead>Number of visitors</TableHead>
            </TableHeader>
          </thead>
          <TableBody>
            <TableRow>
              <TableDataS>Andrii Smaluniuk</TableDataS>
              <TableData>455555555555555555555</TableData>
              <TableDataS style={{ paddingLeft: "30px" }}>24</TableDataS>
            </TableRow>
            <IconWrap>
              <Icon src={Bell} alt="bell" />
            </IconWrap>
          </TableBody>
        </table>
      </Wrap>
      <Image src={bgImg} />
    </>
  );
};
