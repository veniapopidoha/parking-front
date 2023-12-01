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
import { WrapContent, Image } from "./style";
import Bell from "../../images/bell.svg";

export const Reports = ({ building }) => {
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
            {building.reports.map((report) => {
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
    </WrapContent>
  );
};
