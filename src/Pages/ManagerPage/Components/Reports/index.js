import bgImage from "../../../../images/bg1.png";
import {
  TableBody,
  TableData,
  TableDataS,
  TableHead,
  TableHeader,
  Title,
  Wrap,
  TableRow,
} from "../Cars/style";
import { ImageWrap, WrapContent, BgImage, Image } from "./style";
import Bell from "../../../../images/bell.svg";

export const Reports = () => {
  return (
    <WrapContent>
      <Wrap>
        <Title>Reports list</Title>
        <table>
          <thead>
            <TableHeader>
              <TableHead>License plate</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Security Guard</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Attachment</TableHead>
              <TableHead>Notes</TableHead>
            </TableHeader>
          </thead>
          <TableBody>
            <TableRow>
              <TableData>СE7248VB</TableData>
              <TableData>12.10.2023 11:30</TableData>
              <TableData>Veniamin Vitaliovich</TableData>
              <TableDataS>Towed</TableDataS>
              <TableData>
                <Image src={Bell} alt="icon" />
              </TableData>
              <TableData>Notes</TableData>
            </TableRow>
          </TableBody>
        </table>
      </Wrap>
      <ImageWrap>
        <BgImage src={bgImage} alt="img" />
      </ImageWrap>
    </WrapContent>
  );
};
