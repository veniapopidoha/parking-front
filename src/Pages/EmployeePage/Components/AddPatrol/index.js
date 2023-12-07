import React, { useState } from "react";
import { backLink } from "../../../../App";
import { InputWrap } from "../../../../Components/Input/style";
import { Button, Container, Title, Wrap } from "../../../Registration/style";
import { StyledInput, Form } from "./style";
import axios from "axios";
import { useSelector } from "react-redux";
import { ConfigProvider, DatePicker, Space } from "antd";

export const AddPatrol = () => {
  const [dateRange, setDateRange] = useState([]);
  const data = useSelector((state) => state);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("Date Range:", dateRange); // Add this line to log the dateRange

    try {
      const response = await axios
        .post(`${backLink}/add-patrol`, {
          buildingName: data.buildingName,
          startDate: dateRange[0].$d,
          endDate: dateRange[1].$d,
          name: data.name,
        })
        .then(() => setDateRange([]));
    } catch (error) {
      console.error("Error loading files", error);
    }

    setDateRange([]);
  };

  return (
    <>
      <Wrap>
        <Title>Patrol report</Title>
        <Form onSubmit={handleFormSubmit}>
          <Container>
            <InputWrap>
              <ConfigProvider>
                <Space direction="vertical" size={12}>
                  <DatePicker.RangePicker
                    showTime={{
                      format: "HH:mm",
                    }}
                    format="YYYY-MM-DD HH:mm"
                    onChange={(values) => {
                      console.log("Selected Values:", values); // Add this line
                      setDateRange(values);
                    }}
                  />
                </Space>
              </ConfigProvider>
            </InputWrap>
          </Container>
          <Button type="submit">Add Report</Button>
        </Form>
      </Wrap>
    </>
  );
};
