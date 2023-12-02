import { Button, Container, Error, Form, Title, Wrap } from "./style";
import {
  Icon,
  IconContainer,
  InputWrap,
  StyledInput,
} from "../../Components/Input/style";
import user from "../../images/user.svg";
import home from "../../images/home.png";
import passwordIcon from "../../images/password.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { SignIn } from "../SignIn";
import { useDispatch } from "react-redux";
import { backLink } from '../../App';

export const Registration = (props) => {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const [userData, setUserData] = useState("");
  const [name, setName] = useState("");
  const [unit, setUnit] = useState("");
  const [password, setPassword] = useState("");
  const [nameEmpty, setNameEmpty] = useState(false);
  const [unitEmpty, setUnitEmpty] = useState(false);
  const [passwordEmpty, setPasswordEmpty] = useState(false);
  const [errors, setErrors] = useState({
    nameError: "Please fill your name",
    passwordError: "Please fill your password",
    unitError: "Please fill your unit",
  });
  const [formValid, setFormValid] = useState(false);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "password":
        setPasswordEmpty(true);
        break;
      case "name":
        setNameEmpty(true);
        break;
      case "unit":
        setUnitEmpty(true);
        break;
    }
  };

  useEffect(() => {
    if (errors.passwordError || errors.nameError || errors.unitError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [errors]);

  const handleName = (e) => {
    let temp = e.target.value.replace(/[0-9]/g, "");

    if (temp === "") {
      setErrors({ ...errors, nameError: "Please fill your name" });
    } else {
      setErrors({ ...errors, nameError: "" });
    }
    setName(temp);
  };

  const handleUnit = (e) => {
    let temp = e.target.value.replace(/[A-z]/g, "");

    if (temp === "") {
      setErrors({ ...errors, unitError: "Please fill your name" });
    } else {
      setErrors({ ...errors, unitError: "" });
    }
    setUnit(temp);
  };

  const handlePassword = (e) => {
    let temp = e.target.value;

    if (temp === "") {
      setErrors({ ...errors, passwordError: "Please fill your password" });
    } else if (temp.length < 8) {
      setErrors({ ...errors, passwordError: "Password is too short" });
    } else if (/[A-Z]/.test(temp) === false) {
      setErrors({
        ...errors,
        passwordError: "Password should have one containe letter",
      });
    } else if (/[a-z]/.test(temp) === false) {
      setErrors({
        ...errors,
        passwordError: "Password should have one small letter",
      });
    } else if (/[$&+,:;=?@#|'<>.^*()%!-]/.test(temp) === false) {
      setErrors({
        ...errors,
        passwordError: "Password should have one special character",
      });
    } else if (/[0-9]/.test(temp) === false) {
      setErrors({
        ...errors,
        passwordError: "Password should have one number",
      });
    } else {
      setErrors({ ...errors, passwordError: "" });
    }
    setPassword(temp);
  };

  const setUser = (e) => {
    e.preventDefault();

    axios
      .put(`${backLink}/add-user-info/${props.userId}`, {
        name: name,
        unit: unit,
        password: password,
        status: userData.status,
        buildingName: userData.building
      })
      .then(() => {
        window.location.replace("http://localhost:3000/");
        dispatch({ type: "AUTH", payload: true });
        dispatch({
          type: "ADD_USER_DATA",
          payload: {
            name,
            unit,
            email: userData.email,
            id: userData.id,
            status: userData.status,
            buildingName: userData.buildingName,
            numberOfRegistration: userData.numberOfRegistration,
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUserInfo = async () => {
    setloading(true);
    await axios
      .get(`${backLink}/${props.userId}`)
      .then((response) => {
        setUserData(response.data);
      });
    setloading(false);
  };


  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
      {loading ? (
        <>loading...</>
      ) : userData.name != undefined ? (
        <SignIn />
      ) : (
        <Wrap>
          <Title>Registration</Title>
          <Form onSubmit={setUser}>
            <Container>
              <InputWrap>
                <IconContainer>
                  <Icon src={user} />
                </IconContainer>
                <StyledInput
                  onBlur={(e) => blurHandler(e)}
                  onChange={handleName}
                  placeholder="Name"
                  name="name"
                  value={name}
                />
              </InputWrap>
              {nameEmpty && errors.nameError && (
                <Error>{errors.nameError}</Error>
              )}
            </Container>
            <Container>
              <InputWrap>
                <IconContainer>
                  <Icon src={home} />
                </IconContainer>
                <StyledInput
                  onBlur={(e) => blurHandler(e)}
                  onChange={handleUnit}
                  placeholder="Unit"
                  name="unit"
                  value={unit}
                />
              </InputWrap>
              {unitEmpty && errors.unitError && (
                <Error>{errors.unitError}</Error>
              )}
            </Container>
            <Container>
              <InputWrap>
                <IconContainer>
                  <Icon src={passwordIcon} />
                </IconContainer>
                <StyledInput
                  onBlur={(e) => blurHandler(e)}
                  onChange={handlePassword}
                  placeholder="Password"
                  name="password"
                  value={password}
                />
              </InputWrap>
              {passwordEmpty && errors.passwordError && (
                <Error>{errors.passwordError}</Error>
              )}
            </Container>

            <Button disabled={!formValid} type="submit">
              Sign In
            </Button>
          </Form>
        </Wrap>
      )}
    </>
  );
};
