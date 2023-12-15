import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { backLink } from "../../../../App";
import axios from "axios";
import { Form, Title, StyledInput, DateTitle, Wrap, Image } from "./style";
import { ConfigProvider, DatePicker, Space, TimePicker } from "antd";
import { Button } from "../../../SignIn/style";
import { Container, Error } from "../../../Registration/style";
import { InputWrap } from "../../../../Components/Input/style";
import bgImg from "../../../../images/bg2.png";
import { Checkbox, CheckboxWrap } from "../../../AddUser/style";

export const AddVisitor = ({ isSubmitted, setIsSubmitted }) => {
  const [plate, setPlate] = useState("");
  const [colour, setColour] = useState("");
  const [make, setMake] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [error, setError] = useState("");
  const [numberOfDaysOptions, setNumberOfDaysOptions] = useState([]);
  const [selectedNumberOfDays, setSelectedNumberOfDays] = useState("");
  const [checked, setChecked] = useState("");

  const dispatch = useDispatch();
  const id = useSelector((state) => state.id);
  const data = useSelector((state) => state);

  const Submit = (e) => {
    e.preventDefault();

    if (startDate) {
      const calculatedEndDate = calculateEndDate(
        startDate,
        Number(selectedNumberOfDays) || 1
      );

      axios
        .post(`${backLink}/add-building-visitor`, {
          plate,
          colour,
          make,
          startDate,
          endDate: calculatedEndDate,
          residentId: id,
          buildingName: data.buildingName,
          email: data.email,
        })
        .then(() => {
          setColour("");
          setPlate("");
          setMake("");
          setError("");
          setIsSubmitted(!isSubmitted);

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
          setError(error.response.data.message);
        });
    } else {
      setError("Select a date");
    }
  };

  useEffect(() => {
    axios.get(`${backLink}/building/${data.buildingName}`).then((response) => {
      const numberOfDays = response.data.numberOfDays;

      const options = Array.from(
        { length: numberOfDays },
        (_, index) => index + 1
      );
      setNumberOfDaysOptions(options);
    });
  }, []);

  const handleNumberOfDaysChange = (value) => {
    setSelectedNumberOfDays(value);
  };

  const handleCheckboxChange = (e) => {
    setChecked(!checked);

    if (checked === "Daily") {
      setSelectedNumberOfDays("1");
      setStartDate(new Date());
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
            <CheckboxWrap>
              <label>
                <Checkbox
                  type="checkbox"
                  name="status"
                  onChange={handleCheckboxChange}
                  value={checked}
                  checked={checked}
                />
                Custom
              </label>
            </CheckboxWrap>
            {checked && (
              <TimePicker
                format="HH:mm"
                onChange={(value) => {
                  setStartDate(value);
                }}
              />
            )}
            {checked && (
              <select
                value={selectedNumberOfDays}
                onChange={(e) => handleNumberOfDaysChange(e.target.value)}
              >
                <option value="" disabled>
                  Select number of days
                </option>
                {numberOfDaysOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
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

const calculateEndDate = (startDate, numberOfDays) => {
  const startDateObj = new Date(startDate);
  const endDate = new Date(startDateObj.getTime());
  endDate.setDate(startDateObj.getDate() + numberOfDays);
  return endDate;
};
