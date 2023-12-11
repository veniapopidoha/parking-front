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
    try {
      await axios.post(`${backLink}/add-patrol`, {
        buildingName: data.buildingName,
        startDate: dateRange[0],
        endDate: dateRange[1],
        name: data.name,
      });
      setDateRange([null, null]);
    } catch (error) {
      console.error("Error loading files", error);
    }
  };

  return (
    <>
      <Wrap
        style={{
          justifyContent: "normal",
          height: "unset",
          margin: "0 0 30px 0",
        }}
      >
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
                      setDateRange(values);
                    }}
                    value={dateRange}
                    size={2}
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
