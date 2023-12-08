import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { ConfigProvider, DatePicker, Space } from "antd";
import { backLink } from "../../App";
import { InputWrap } from "../../Components/Input/style";
import { Container, Error } from "../Registration/style";
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
  const [startDate, setStartDate] = useState(null);
  const [favorite, setFavorite] = useState({});
  const [isAllVisitors, setIsAllVisitors] = useState(false);
  const [visitors, setVisitors] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFavoriteAdded, setIsFavoriteAdded] = useState(false);

  const [error, setError] = useState("");
  const id = useSelector((state) => state.id);
  const data = useSelector((state) => state);

  const Submit = (e) => {
    e.preventDefault();
    if (startDate) {
      axios
        .post(`${backLink}/add-building-visitor`, {
          plate,
          colour,
          make,
          startDate: startDate.$d,
          residentId: data.id,
          buildingName: data.buildingName,
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
              isFavorite: false,
              residentId: id,
            },
          });
          setColour("");
          setMake("");
          setPlate("");
          setError("");
          setIsSubmitted(!isSubmitted);
          setShow(false);
        })
        .catch((error) => {
          setError(error.response.data.message);
        });
    } else {
      setError("Select a date");
    }
  };

  useEffect(() => {
    setPlate(favorite.plate);
    setMake(favorite.make);
    setColour(favorite.colour);
  }, [favorite]);

  useEffect(() => {
    axios
      .get(`${backLink}/${data.id}`)
      .then((res) => {
        setVisitors(res.data.visitors);
        dispatch({
          type: "ADD_VISITOR_DATA",
          payload: {
            ...res.data.visitors,
          },
        });
      })
      .catch((err) => console.log(err));
  }, [isSubmitted]);

  return (
    <Wrap>
      <TopWrap>
        <Button
          style={{ marginTop: "0", padding: "14px 50px", minWidth: "200px" }}
          onClick={() => {
            setShow(!show);
          }}
        >
          Add Visitor
        </Button>
        <FavoriteComboBox setFavorite={setFavorite} visitors={visitors} />
      </TopWrap>
      <BottomWrap>
        {show && (
          <Form onSubmit={Submit}>
            <Title>Visitor car</Title>
            <Container>
              <InputWrap>
                <StyledInput
                  placeholder="Licence plate"
                  value={plate}
                  name="plate"
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
                  value={colour}
                  name="colour"
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
                  format="YYYY-MM-DD HH:mm"
                  onOk={(value) => {
                    setStartDate(value);
                  }}
                  value={startDate}
                />
              </Space>
            </ConfigProvider>
            <Button type="submit">Add Visitor</Button>
            <Error style={{ marginTop: "10px" }}>{error}</Error>
          </Form>
        )}
        <Visitors
          visitors={visitors}
          isAllVisitors={isAllVisitors}
          setIsAllVisitors={setIsAllVisitors}
          isFavoriteAdded={isFavoriteAdded}
          setIsFavoriteAdded={setIsFavoriteAdded}
        />
      </BottomWrap>
    </Wrap>
  );
};
