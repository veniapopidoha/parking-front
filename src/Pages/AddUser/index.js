import {
  Icon,
  IconContainer,
  InputWrap,
  StyledInput,
} from "../../Components/Input/style";
import { Checkbox, CheckboxWrap, ComboBox, ComboBoxText, Wrap } from "./style";
import mail from "../../images/mail.svg";
import home from "../../images/home.png";
import user from "../../images/user.svg";
import { Button, Container, Error } from "../Registration/style";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { backLink } from "../../App";
import { useDispatch, useSelector } from "react-redux";

export const AddUser = () => {
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const [building, setBuilding] = useState("");
  const [name, setName] = useState("");
  const [unit, setUnit] = useState("");
  const [isBuildingsOpen, setIsBuildingsOpen] = useState(false);
  const [buildings, setBuildings] = useState([]);
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [buildingEmpty, setBuildingEmpty] = useState(false);
  const [errors, setErrors] = useState({
    emailError: "Please fill your email",
    buildingError: "Please fill user's building",
    checkError: "Please fill your checkbox",
  });
  const [error, setError] = useState("");
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
        return b.name && b.name.toLowerCase().includes(building.toLowerCase());
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
    setError("");
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
      .post(`${backLink}/add-building-user`, {
        email,
        status,
        buildingName: building,
        name,
        unit,
      })
      .then(() => {
        dispatch({
          type: "ADD_USER_DATA",
          payload: { ...data, building },
        });
        setEmail("");
        setBuilding("");
        setUnit("");
        setName("");
        setError("");
      })
      .catch((error) => {
        setError(error.response.data.message);
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
        {status === "resident" && (
          <>
            <InputWrap>
              <IconContainer>
                <Icon src={home} />
              </IconContainer>
              <StyledInput
                onChange={(e) => {
                  setUnit(e.target.value);
                  setIsBuildingsOpen(false);
                }}
                placeholder="Unit"
                name="unit"
                value={unit}
              />
            </InputWrap>
            <InputWrap style={{ minWidth: "66px" }}>
              <IconContainer>
                <Icon src={user} />
              </IconContainer>
              <StyledInput
                onChange={(e) => {
                  setName(e.target.value);
                  setIsBuildingsOpen(false);
                }}
                placeholder="Name"
                name="name"
                value={name}
              />
            </InputWrap>
          </>
        )}
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
          </>
        ) : (
          <></>
        )}
        <Error>{error}</Error>
      </Container>
      <Button type="submit">Add User</Button>
    </Wrap>
  );
};
