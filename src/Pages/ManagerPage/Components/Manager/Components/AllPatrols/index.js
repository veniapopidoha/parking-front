import { ConfigProvider, DatePicker, Space } from "antd";
import {
  Image,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  Title,
  TopWrap,
  Wrap,
} from "../../../../../../Components/Cars/style";
import bgImg from "../../../../../../images/bg4.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { backLink } from "../../../../../../App";
import { TableRow } from "../../../../../Resident/Components/Visitors/style";

export const AllPatrols = () => {
  const [buildings, setBuildings] = useState([]);
  const [dateRange, setDateRange] = useState([null, null]);
  const [filteredBuildings, setFilteredBuildings] = useState([]);

  const handleDateRangeChange = (value) => {
    setDateRange(value || [null, null]);
  };

  const withinDateRange = (patrol) => {
    if (!dateRange[0] || !dateRange[1]) {
      return true;
    }

    const startDatePatrol = new Date(patrol.startTime);
    const endDatePatrol = new Date(patrol.endTime);

    return (
      startDatePatrol >= dateRange[0].$d && endDatePatrol <= dateRange[1].$d
    );
  };

  const filterBuildings = () => {
    const newFilteredBuildings = buildings.map((building) => ({
      ...building,
      numberOfPatrols: building.patrols.filter(withinDateRange).length,
    }));
    setFilteredBuildings(newFilteredBuildings);
  };

  useEffect(() => {
    axios
      .get(`${backLink}/buildings`)
      .then((res) => setBuildings(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    filterBuildings();
  }, [dateRange]);

  return (
    <>
      <Wrap>
        <TopWrap>
          <Title>All Patrols</Title>
          <ConfigProvider
            theme={{
              components: {
                DatePicker: {
                  colorLink: "#FECB21",
                  colorLinkActive: "#000",
                  colorPrimary: "#FECB21",
                  colorLinkHover: "#FECB21",
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
              <DatePicker.RangePicker
                showTime={{
                  format: "HH",
                }}
                format="YYYY-MM-DD HH"
                onChange={handleDateRangeChange}
                value={dateRange}
              />
            </Space>
          </ConfigProvider>
        </TopWrap>
        <table width="100%">
          <thead>
            <TableHeader>
              <TableHead width="50%">Building name</TableHead>
              <TableHead width="50%">Number of patrols</TableHead>
            </TableHeader>
          </thead>
          <TableBody>
            {filteredBuildings.map((building) => (
              <TableRow key={building.name}>
                <TableData width="50%">{building.name}</TableData>
                <TableData width="50%">{building.numberOfPatrols}</TableData>
              </TableRow>
            ))}
          </TableBody>
        </table>
      </Wrap>
      <Image src={bgImg} alt="bg" />
    </>
  );
};
