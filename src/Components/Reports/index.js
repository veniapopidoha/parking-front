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
import bgImage from "../../images/bg1.png";
import Bell from "../../images/bell.svg";

export const Reports = ({ building, buildings }) => {
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
            {buildings
              ? buildings.map((building) =>
                  building.visitors.map((car) => (
                    <TableRow key={car.plate}>
                      <TableData>{car.plate}</TableData>
                      <TableDataS>{car.model}</TableDataS>
                      <TableDataS>{car.startDate}</TableDataS>
                      <TableData>{car.endDate}</TableData>
                    </TableRow>
                  ))
                )
              : building.reports.map((report) => {
                  return (
                    <TableRow key={report.plate}>
                      <TableData>{report.plate}</TableData>
                      <TableData>{report.startDate}</TableData>
                      <TableData>{report.name}</TableData>
                      <TableDataS>{report.status}</TableDataS>
                      <TableData>
                        <Image src={Bell} alt="icon" />
                      </TableData>
                      <TableData>{report.notes}</TableData>
                    </TableRow>
                  );
                })}
          </TableBody>
        </table>
      </Wrap>
      <ImageWrap>
        <BgImage src={bgImage} alt="img" />
      </ImageWrap>
    </WrapContent>
  );
};
