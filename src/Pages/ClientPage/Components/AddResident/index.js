import { ClientInfo } from "../ClientInfo";
import { Checkbox, CheckboxWrap, Image, Wrap } from "./style";
import bgImg from "../../../../images/bg2.png";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { backLink } from "../../../../App";
import {
  InputWrap,
  Icon,
  IconContainer,
  StyledInput,
} from "../../../../Components/Input/style";
import { Container, Button, Error } from "../../../Registration/style";
import mail from "../../../../images/mail.svg";

export const AddResident = () => {
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [errors, setErrors] = useState({
    emailError: "Please fill your email",
    checkError: "Please fill your checkbox",
  });
  const [error, setError] = useState("");
  const [formValid, setFormValid] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  useEffect(() => {
    if (errors.checkError || errors.emailError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [errors]);

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
      .post(`${backLink}/add-building-user`, {
        email,
        status,
        buildingName: data.buildingName,
      })
      .then(() => {
        dispatch({
          type: "ADD_USER_DATA",
          payload: { ...data },
        });
        setEmail("");
        setError("");
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  };

  return (
    <>
      <Wrap onSubmit={addUser}>
        <CheckboxWrap>
          <label>
            <Checkbox
              type="radio"
              name="status"
              onChange={setChecked}
              value="resident"
            />
            Resident
          </label>
          <label>
            <Checkbox
              type="radio"
              name="status"
              onChange={setChecked}
              value="admin"
            />
            Admin
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
          {emailEmpty && errors.emailError && (
            <Error>{errors.emailError}</Error>
          )}
          <Error>{error}</Error>
        </Container>
        <Button type="submit">Add User</Button>
      </Wrap>
      <Image src={bgImg} alt="bg" />
    </>
  );
};
