import React, { useEffect, useState } from "react";
import {
  Image,
  TableBody,
  TableData,
  TableDataS,
  Title,
  TableRow,
  Wrap,
  TableHeader,
  TableHead,
  TopWrap,
} from "../Cars/style";
import bgImg from "../../images/bg4.png";
import { formatDate } from "../../utils/formatDate";

export const Offenders = ({ building }) => {
  const [recentReports, setRecentReports] = useState([]);

  useEffect(() => {
    const reports = building.reports;

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;

    const filteredReports = reports.filter((report) => {
      const reportDate = new Date(report.timeStamp);
      const reportYear = reportDate.getFullYear();
      const reportMonth = reportDate.getMonth() + 1;

      return reportYear === currentYear && reportMonth === currentMonth;
    });

    setRecentReports(filteredReports);
  }, [building.reports]);

  return (
    <>
      <Wrap>
        <TopWrap>
          <Title>Offenders</Title>
        </TopWrap>
        <table width="100%">
          <thead>
            <TableHeader>
              <TableHead width="33%">Plate</TableHead>
              <TableHead width="33%">Reason</TableHead>
              <TableHead width="33%">Start Date</TableHead>
              <TableHead width="33%">Attachment</TableHead>
            </TableHeader>
          </thead>
          <TableBody>
            {recentReports.map((offender) => {
              return (
                <TableRow key={`${offender.plate} ${Math.random() * 9999}`}>
                  <TableDataS width="33%">{offender.plate}</TableDataS>
                  <TableData width="33%">{offender.reason}</TableData>
                  <TableData width="33%">
                    {formatDate(offender.timeStamp)}
                  </TableData>
                  <TableData width="33%">
                    {" "}
                    {offender.imageUrls.map((link, i) => (
                      <a
                        key={i}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        photo {i + 1} &nbsp;
                      </a>
                    ))}
                  </TableData>
                </TableRow>
              );
            })}
          </TableBody>
        </table>
      </Wrap>
      <Image src={bgImg} alt="bg" />
    </>
  );
};
