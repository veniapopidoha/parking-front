import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { ConfigProvider, DatePicker, Space } from "antd";
import { backLink } from "../../App";
import { InputWrap } from "../../Components/Input/style";
import { Container } from "../Registration/style";
import { Form, Wrap, StyledInput, Title, TopWrap, BottomWrap } from "./style";
import { Button } from "../SignIn/style";
import { Visitors } from "./Components/Visitors";
import { FavoriteComboBox } from "./Components/FavoriteComboBox";

export const Resident = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [plate, setPlate] = useState("");
  const [colour, setColour] = useState("");
  const [make, setMake] = useState("");
  const [startDate, setStartDate] = useState("");
  const [favoriteValue, setFavoriteValue] = useState("");
  const [favorite, setFavorite] = useState({});
  console.log(favorite);

  const id = useSelector((state) => state.id);
  const data = useSelector((state) => state);

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post(`${backLink}/add-building-visitor`, {
        plate,
        colour,
        make,
        startDate,
        residentId: data.id,
        buildingName: data.building.name,
        email: data.email,
      })
      .then(() => {
        dispatch({
          type: "ADD_VISITOR_DATA",
          payload: {
            plate,
            colour,
            make,
            startDate,
            favorite: false,
            residentId: id,
          },
        });
        setShow(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Wrap>
      <TopWrap>
        {/* <Button>Visitors</Button> */}
        <FavoriteComboBox
          favoriteValue={favoriteValue}
          setFavoriteValue={setFavoriteValue}
          setFavorite={setFavorite}
        />
      </TopWrap>
      <BottomWrap>
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          Add Visitor
        </button>
        {show && (
          <Form onSubmit={Submit}>
            <Title>Visitor car</Title>
            <Container>
              <InputWrap>
                <StyledInput
                  placeholder="Licence plate"
                  name="plate"
                  value={favorite.plate || plate}
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
                  placeholder="Make"
                  name="make"
                  value={favorite.make || make}
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
                  value={favorite.colour || colour}
                  onChange={(e) => {
                    setColour(e.target.value);
                  }}
                  required
                />
              </InputWrap>
            </Container>
            <Title>Select date</Title>
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
                <DatePicker
                  showTime={{
                    format: "HH:mm",
                  }}
                  value={startDate ? new Date(startDate) : null}
                  format="YYYY-MM-DD HH:mm"
                  onOk={(value) => {
                    setStartDate(value);
                  }}
                />
              </Space>
            </ConfigProvider>
            <Button type="submit">Add Visitor</Button>
          </Form>
        )}
        <Visitors visitors={data.visitors} />
      </BottomWrap>
    </Wrap>
  );
};
