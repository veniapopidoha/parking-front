import { Button, Container, Error, Form, Title, Wrap } from "./style";
import {
  Icon,
  IconContainer,
  InputWrap,
  StyledInput,
} from "../../Components/Input/style";
import mail from "../../images/mail.svg";
import passwordIcon from "../../images/password.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { backLink } from "../../App";

export const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [passwordEmpty, setPasswordEmpty] = useState(false);
  const [errors, setErrors] = useState({
    emailError: "Please fill your email",
    passwordError: "Please fill your password",
  });
  const [error, setError] = useState("");
  const [formValid, setFormValid] = useState(false);
  const data = useSelector((state) => state);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "password":
        setPasswordEmpty(true);
        break;
      case "email":
        setEmailEmpty(true);
        break;
    }
  };

  useEffect(() => {
    if (errors.passwordError || errors.emailError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [errors]);

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

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post(`${backLink}/signin`, {
        email,
        password,
      })
      .then((res) => {
        setErrors(res.data.errors);
        dispatch({
          type: "ADD_USER_DATA",
          payload: { ...res.data.data },
        });
        dispatch({ type: "AUTH", payload: res.data.isAuth });
      })
      .catch((error) => console.log(error));
  };

  const handleForgorPassword = () => {
    if (email.length > 1 && !errors.emailError) {
      axios.post(`${backLink}/forgot-pass`, {
        email,
      });
    } else {
      setErrors({
        ...errors,
        emailError: emailEmpty ? "Please fill your email" : "",
      });
    }
  };

  return (
    <Wrap>
      <Title>Sign In</Title>
      <Form onSubmit={Submit}>
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
        <p onClick={handleForgorPassword} style={{ cursor: "pointer" }}>
          Forgot password
        </p>
        <Button disabled={!formValid} type="submit">
          Sign In
        </Button>
        <Error>{error}</Error>
      </Form>
    </Wrap>
  );
};
