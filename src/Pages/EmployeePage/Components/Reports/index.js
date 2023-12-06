import axios from "axios";
import { backLink } from "../../../../App";
import { useEffect, useState } from "react";
import {
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
  Wrap,
  Table,
} from "../../../../Components/Cars/style";
import { useSelector } from "react-redux";

export const ReportsPage = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const data = useSelector((state) => state);

  const getReports = async () => {
    setLoading(true);
    await axios
      .get(`${backLink}/reports/${data.buildingName}`)
      .then((response) => {
        setReports(response.data);
      });
    setLoading(false);
  };

  useEffect(() => {
    getReports();
  }, []);

  return (
    <Wrap>
      <Table>
        <thead>
          <TableHeader>
            <TableHead width="10%">Plate</TableHead>
            <TableHead width="25%">Reason</TableHead>
            <TableHead width="45%">Notes</TableHead>
            <TableHead width="20%">Attachment</TableHead>
          </TableHeader>
        </thead>
        {!loading ? (
          <TableBody>
            {Array.from(reports).map((item, index) => {
              return (
                <TableRow key={index}>
                  <TableData width="10%">{item.plate}</TableData>
                  <TableData width="25%">{item.reason}</TableData>
                  <TableData width="45%">{item.notes}</TableData>
                  <TableData width="20%">
                    {Array.from(item.imageUrls).map((link, index) => {
                      return (
                        <a key={index} href={link} target="_blank">
                          photo {index + 1} &nbsp;
                        </a>
                      );
                    })}
                  </TableData>
                </TableRow>
              );
            })}
          </TableBody>
        ) : (
          <tbody>
            <tr>
              <td>Loading...</td>
            </tr>
          </tbody>
        )}
      </Table>
    </Wrap>
  );
};
