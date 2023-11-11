import {
  Icon,
  IconContainer,
  InputWrap,
  StyledInput,
} from "../../Components/Input/style";
import { Checkbox, CheckboxWrap, Wrap } from "./style";
import mail from "../../images/mail.svg";
import home from "../../images/home.png";
import { Button, Container, Error } from "../Registration/style";
import { useEffect, useState } from "react";
import axios from "axios";

export const AddUser = () => {
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const [object, setObject] = useState("");
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [errors, setErrors] = useState({
    emailError: "Please fill your email",
    checkError: "Please fill your checkbox",
    objectError: "Please fill your object",
  });
  const [formValid, setFormValid] = useState(false);

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

  const addUser = async () => {
    try {
      await axios
        .post(`http://localhost:5000/add-object-user`, {
          body: {
            objectName: object,
            email,
          },
        })
        .then(() => {
          setEmail("");
          setStatus("");
        });
      await axios.post("http://localhost:5000/add-user", {
        email,
        status,
      });
    } catch (err) {
      console.log(err);
    }
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
        {object.length < 1 && errors.objectError && (
          <Error>{errors.objectError}</Error>
        )}
      </Container>
      <Button disabled={!formValid} type="submit">
        Add User
      </Button>
    </Wrap>
  );
};
