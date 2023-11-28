import {
  Icon,
  IconContainer,
  InputWrap,
  StyledInput,
} from "../../Components/Input/style";
import { Checkbox, CheckboxWrap, ComboBox, ComboBoxText, Wrap } from "./style";
import mail from "../../images/mail.svg";
import home from "../../images/home.png";
import { Button, Container, Error } from "../Registration/style";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { backLink } from "../../App";
import { useDispatch, useSelector } from "react-redux";

export const AddUser = () => {
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const [building, setBuilding] = useState("");
  const [isBuildingsOpen, setIsBuildingsOpen] = useState(false);
  const [buildings, setBuildings] = useState([]);
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [buildingEmpty, setBuildingEmpty] = useState(false);
  const [errors, setErrors] = useState({
    emailError: "Please fill your email",
    buildingError: "Please fill user's building",
    checkError: "Please fill your checkbox",
  });
  const [formValid, setFormValid] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  useEffect(() => {
    if (errors.checkError || errors.emailError || errors.buildingError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [errors]);

  useEffect(() => {
    axios
      .get(`${backLink}/buildings`)
      .then((res) => {
        setBuildings(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleBuildingModal = (buildingName) => {
    setBuilding(buildingName);
    setIsBuildingsOpen(false);
  };

  const filteredBuildings = useMemo(() => {
    const filteredBuildings = buildings
      .filter((b) => {
        if (b.name) {
          b.name.toLowerCase().includes(building.toLowerCase());
        }
      })
      .map((filteredBuilding) => (
        <ComboBoxText
          key={filteredBuilding.name}
          onClick={() => handleBuildingModal(filteredBuilding.name)}
        >
          {filteredBuilding.name}
        </ComboBoxText>
      ));

    return filteredBuildings;
  }, [building]);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailEmpty(true);
        break;
    }
  };

  const setChecked = (e) => {
    setStatus(e.target.value);
    setErrors({ ...errors, checkError: "" });
  };

  const handleEmail = (e) => {
    let temp = e.target.value;

    if (temp === "") {
      setErrors({ ...errors, emailError: "Please fill your email" });
    } else if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(temp) === false) {
      setErrors({ ...errors, emailError: "Enter valid email" });
    } else {
      setErrors({ ...errors, emailError: "" });
    }
    setEmail(temp);
  };

  const addUser = (e) => {
    e.preventDefault();

    axios
      .post(`${backLink}/add-user`, {
        email,
        userEmail: data.email,
        status,
        buildingName: building,
      })
      .then(() => {
        dispatch({
          type: "ADD_USER_DATA",
          payload: { ...data, building },
        });
        setEmail("");
        setBuilding("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Wrap onSubmit={addUser}>
      <CheckboxWrap>
        <label>
          <Checkbox
            type="radio"
            name="status"
            onChange={setChecked}
            value="manager"
          />
          Manager
        </label>
        <label>
          <Checkbox
            type="radio"
            name="status"
            onChange={setChecked}
            value="client"
          />
          Client
        </label>
        <label>
          <Checkbox
            type="radio"
            name="status"
            onChange={setChecked}
            value="employee"
          />
          Employee
        </label>
        <label>
          <Checkbox
            type="radio"
            name="status"
            onChange={setChecked}
            value="resident"
          />
          Resident
        </label>
      </CheckboxWrap>
      <Container>
        <InputWrap>
          <IconContainer>
            <Icon src={mail} />
          </IconContainer>
          <StyledInput
            onBlur={(e) => blurHandler(e)}
            onChange={handleEmail}
            placeholder="Email"
            name="email"
            value={email}
          />
        </InputWrap>
        {emailEmpty && errors.emailError && <Error>{errors.emailError}</Error>}
        {status === "resident" || status === "client" ? (
          <>
            <InputWrap>
              <IconContainer>
                <Icon src={home} />
              </IconContainer>
              <StyledInput
                onChange={(e) => {
                  setBuilding(e.target.value);
                  setIsBuildingsOpen(true);
                }}
                placeholder="Building"
                name="building"
                value={building}
              />
              {isBuildingsOpen && filteredBuildings.length > 0 && (
                <ComboBox>{filteredBuildings}</ComboBox>
              )}
            </InputWrap>
            {buildingEmpty && errors.buildingError && (
              <Error>{errors.emailError}</Error>
            )}
          </>
        ) : (
          <></>
        )}
      </Container>
      <Container>
        <InputWrap>
          <IconContainer>
            <Icon src={home} />
          </IconContainer>
          <StyledInput
            onBlur={(e) => blurHandler(e)}
            onChange={(e) => setObject(e.target.value)}
            placeholder="Object"
            name="object"
            value={object}
          />
        </InputWrap>
        {nameEmpty && errors.nameError && <Error>{errors.nameError}</Error>}
      </Container>
      <Button type="submit">Add User</Button>
    </Wrap>
  );
};
