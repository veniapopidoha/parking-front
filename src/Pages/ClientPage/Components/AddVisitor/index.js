import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { backLink } from "../../../../App";
import axios from "axios";
import { Form, Title, StyledInput, DateTitle, Wrap, Image } from "./style";
import { ConfigProvider, DatePicker, Space } from "antd";
import { Button } from "../../../SignIn/style";
import { Container, Error } from "../../../Registration/style";
import { InputWrap } from "../../../../Components/Input/style";
import bgImg from "../../../../images/bg2.png";

export const AddVisitor = () => {
  const [plate, setPlate] = useState("");
  const [colour, setColour] = useState("");
  const [make, setMake] = useState("");
  const [unit, setUnit] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [error, setErorr] = useState("");
  const { RangePicker } = DatePicker;

  const dispatch = useDispatch();
  const id = useSelector((state) => state.id);
  const data = useSelector((state) => state);

  const Submit = (e) => {
    e.preventDefault();
    if (startDate && endDate) {
      axios
        .post(`${backLink}/add-building-visitor`, {
          plate,
          colour,
          make,
          startDate: startDate.$d,
          endDate: endDate.$d,
          residentId: id,
          buildingName: data.buildingName,
          email: data.email,
          unit,
        })
        .then(() => {
          setColour("");
          setPlate("");
          setMake("");
          setUnit("");
          setErorr("");
          dispatch({
            type: "ADD_VISITOR_DATA",
            payload: {
              plate,
              colour,
              make,
              startDate,
              isFavorite: false,
              residentId: id,
            },
          });
        })
        .catch((error) => {
          setErorr(error.response.data.message);
        });
    } else {
      setErorr("Select a date");
    }
  };

  return (
    <>
      <Wrap>
        <Form onSubmit={Submit}>
          <Title>Visitor car:</Title>
          <div>
            <Container>
              <InputWrap>
                <StyledInput
                  placeholder="Licence plate"
                  name="plate"
                  value={plate}
                  onChange={(e) => {
                    setPlate(e.target.value);
                  }}
                  required
                />
              </InputWrap>
            </Container>
            <Container>
              <InputWrap>
                <StyledInput
                  value={make}
                  placeholder="Make"
                  name="make"
                  onChange={(e) => {
                    setMake(e.target.value);
                  }}
                  required
                />
              </InputWrap>
            </Container>
            <Container>
              <InputWrap>
                <StyledInput
                  placeholder="Colour"
                  name="colour"
                  value={colour}
                  onChange={(e) => {
                    setColour(e.target.value);
                  }}
                  required
                />
              </InputWrap>
            </Container>
            <Container>
              <InputWrap>
                <StyledInput
                  placeholder="Unit"
                  name="unit"
                  value={unit}
                  onChange={(e) => {
                    setUnit(e.target.value);
                  }}
                  required
                />
              </InputWrap>
            </Container>
            <DateTitle>Select date</DateTitle>
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
              <Space direction="vertical" size={12}>
                <RangePicker
                  showTime={{
                    format: "HH",
                  }}
                  format="YYYY-MM-DD HH"
                  onOk={(value) => {
                    setStartDate(value[0]);
                    setEndDate(value[1]);
                  }}
                />
              </Space>
            </ConfigProvider>
            <Button style={{ display: "block" }} type="submit">
              Add Visitor
            </Button>
            <Error style={{ marginTop: "10px" }}>{error}</Error>
          </div>
        </Form>
      </Wrap>
      <Image src={bgImg} alt="bg" />
    </>
  );
};
