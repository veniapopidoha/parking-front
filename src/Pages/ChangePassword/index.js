import { useEffect, useState } from "react";
import passwordIcon from "../../images/password.svg";
import mail from "../../images/mail.svg";
import { Button, Container, Error, Form, Title, Wrap } from "../SignIn/style";
import {
  Icon,
  IconContainer,
  InputWrap,
  StyledInput,
} from "../../Components/Input/style";
import axios from "axios";
import { backLink } from "../../App";

export const ChangePassword = () => {
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [passwordEmpty, setPasswordEmpty] = useState(false);
  const [errors, setErrors] = useState({
    emailError: "Please fill your email",
    passwordError: "Please fill your password",
  });
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (errors.passwordError || errors.emailError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [errors]);

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

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "password":
        setPasswordEmpty(true);
        break;
    }
  };

  const Submit = (e) => {
    e.preventDefault();

    axios
      .patch(`${backLink}/change-pass`, {
        email,
        password,
      })
      .then(() => {
        window.location.replace("/");
      });
  };

  return (
    <>
      <Wrap>
        <Title>Reset Password</Title>
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
                placeholder="New Password"
                name="password"
                value={password}
              />
            </InputWrap>
            {passwordEmpty && errors.passwordError && (
              <Error>{errors.passwordError}</Error>
            )}
          </Container>
          <Button disabled={!formValid} type="submit">
            Reset Password
          </Button>
          <Error>{error}</Error>
        </Form>
      </Wrap>
    </>
  );
};
