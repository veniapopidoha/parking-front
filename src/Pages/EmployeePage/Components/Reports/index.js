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
  TopWrap,
  Title,
} from "../../../../Components/Cars/style";
import { useSelector } from "react-redux";
import { ConfigProvider, Space, DatePicker } from "antd";
import { formatDate } from "../../../../utils/formatDate";

export const ReportsPage = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredReports, setFilteredReports] = useState([]);
  const [dateRange, setDateRange] = useState([]);
  const { RangePicker } = DatePicker;

  const data = useSelector((state) => state);

  const withinDateRange = (report) => {
    if (!dateRange[0] || !dateRange[1]) {
      return true;
    }

    const reportTimestamp = new Date(report.timeStamp);

    return (
      reportTimestamp >= dateRange[0].$d && reportTimestamp <= dateRange[1].$d
    );
  };

  const handleDateRangeChange = (value) => {
    if (value && value.length === 2 && value[0] !== null && value[1] !== null) {
      setDateRange(value);
    } else {
      setDateRange([null, null]);
    }
  };

  useEffect(() => {
    const getReports = async () => {
      setLoading(true);
      await axios
        .get(`${backLink}/reports/${data.buildingName}`)
        .then((response) => {
          setReports(response.data);
        });
      setLoading(false);
    };

    getReports();
  }, [data.buildingName]);

  useEffect(() => {
    const filteredReports = reports.filter((report) => withinDateRange(report));
    setFilteredReports(filteredReports);
  }, [reports, dateRange]);

  const reportsToDisplay =
    dateRange[0] && dateRange[1] ? filteredReports : reports;

  return (
    <Wrap>
      <Table>
        <TopWrap>
          <Title>Reports</Title>
          <ConfigProvider
            theme={{
              components: {
                DatePicker: {
                  colorLink: "#FECB21",
                  colorLinkActive: "#000",
                  colorPrimary: "#FECB21",
                  colorLinkHover: "#FECB21",
                  colorPrimary: "#FECB21",
                  colorPrimaryHover: "#FECB21",
                },
              },
            }}
          >
            <Space
              direction="vertical"
              size={12}
              style={{ marginBottom: "10px" }}
            >
              <RangePicker
                showTime={{
                  format: "HH",
                }}
                format="YYYY-MM-DD HH"
                onChange={handleDateRangeChange}
              />
            </Space>
          </ConfigProvider>
        </TopWrap>
        <thead>
          <TableHeader>
            <TableHead width="10%">Plate</TableHead>
            <TableHead width="16%">Reason</TableHead>
            <TableHead width="20%">Date</TableHead>
            <TableHead width="20%">Name</TableHead>
            <TableHead width="15%">Status</TableHead>
            <TableHead width="20%">Notes</TableHead>
            <TableHead width="14%">Attachment</TableHead>
          </TableHeader>
        </thead>
        {!loading ? (
          <TableBody>
            {reportsToDisplay.map((item, index) => (
              <TableRow key={index}>
                <TableData width="10%">{item.plate}</TableData>
                <TableData width="16%">{item.reason}</TableData>
                <TableData width="20%">{formatDate(item.timeStamp)}</TableData>
                <TableData width="20%">{item.name}</TableData>
                <TableData width="15%">{item.status}</TableData>
                <TableData width="20%">{item.notes}</TableData>
                <TableData width="14%">
                  {item.imageUrls.map((link, i) => (
                    <a
                      key={i}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      photo {i + 1} &nbsp;
                    </a>
                  ))}
                </TableData>
              </TableRow>
            ))}
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
