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
import { ConfigProvider, DatePicker, Space } from "antd";

export const Patrols = ({ building }) => {
  const [filteredPatrols, setFilteredPatrols] = useState([]);
  const [dateRange, setDateRange] = useState([]);
  const { RangePicker } = DatePicker;

  const withinDateRange = (patrol) => {
    if (!dateRange[0] || !dateRange[1]) {
      return true;
    }

    const startDatePatrol = new Date(patrol.startTime);
    const endDatePatrol = new Date(patrol.endTime);

    return startDatePatrol >= dateRange[0] && endDatePatrol <= dateRange[1];
  };
  const handleDateRangeChange = (value) => {
    if (value && value.length === 2 && value[0] !== null && value[1] !== null) {
      const start = value[0].$d;
      const end = value[1].$d;

      setDateRange([start, end]);
      filterPatrols();
    } else {
      setDateRange([]);
    }
  };

  useEffect(() => {
    filterPatrols();
  }, [dateRange[0], dateRange[1]]);

  const filterPatrols = () => {
    const filteredPatrols = building.patrols.filter((patrol) =>
      withinDateRange(patrol)
    );
    setFilteredPatrols(filteredPatrols);
  };

  const patrolsToDisplay =
    dateRange[0] && dateRange[1] ? filteredPatrols : building.patrols;

  return (
    <>
      <Wrap>
        <TopWrap>
          <Title>Patrols completed</Title>
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
                  format: "HH:mm",
                }}
                format="YYYY-MM-DD HH:mm"
                onOk={handleDateRangeChange}
              />
            </Space>
          </ConfigProvider>
        </TopWrap>
        <table width="100%">
          <thead>
            <TableHeader>
              <TableHead width="33%">Name</TableHead>
              <TableHead width="33%">Start</TableHead>
              <TableHead width="33%">End</TableHead>
            </TableHeader>
          </thead>
          <TableBody>
            {patrolsToDisplay.map((patrol) => {
              return (
                <TableRow key={`${patrol.name} ${Math.random() * 9999}`}>
                  <TableDataS width="33%">{patrol.name}</TableDataS>
                  <TableData width="33%">
                    {formatDate(patrol.startTime)}
                  </TableData>
                  <TableData width="33%">
                    {formatDate(patrol.endTime)}
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
