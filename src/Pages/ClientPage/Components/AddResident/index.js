import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Container, Button, Error,FileButton } from "../../../Registration/style";
import {
  InputWrap,
  Icon,
  IconContainer,
  StyledInput,
} from "../../../../Components/Input/style";
import { Checkbox, CheckboxWrap, Image, Wrap,Row,Result,Loading,FileError } from "./style";
import bgImg from "../../../../images/bg2.png";
import mail from "../../../../images/mail.svg";
import home from "../../../../images/home.png";
import fileIcon from "../../../../images/file.png";
import user from "../../../../images/user.svg";
import { backLink } from "../../../../App";

export const AddResident = () => {
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [name, setName] = useState("");
  const [unit, setUnit] = useState("");
  const [file, setFile] = useState();
  const [fileMessage, setFileMessage] = useState({
    message:'',
    isError:0
  });  
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

  const saveFile = (e) => {
    setFile(e.target.files[0]);
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailEmpty(true);
        break;
      default:
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
        name,
        unit,
      })
      .then(() => {
        dispatch({
          type: "ADD_USER_DATA",
          payload: { ...data },
        });
        setEmail("");
        setName("");
        setUnit("");
        setError("");
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  };

  const sendFile = (e) => {
   if(!file){
    setFileMessage({message:'Please select file.',isError:-1});
    return;
   }
    const formData = new FormData();
    formData.append("file", file);
    formData.append("buildingName", data.buildingName);
    setFileMessage({message:'loading...',isError:0});
    axios
      .post(`${backLink}/add-building-users-from-file`, formData,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setFileMessage({message:res.data.message,isError:1});
        dispatch({
          type: "ADD_USER_DATA",
          payload: { ...data },
        });
        setEmail("");
        setName("");
        setUnit("");
        setError("");
        setFile(null);
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
              onBlur={blurHandler}
              onChange={handleEmail}
              placeholder="Email"
              name="email"
              value={email}
              required
            />
          </InputWrap>
          {emailEmpty && errors.emailError && (
            <Error>{errors.emailError}</Error>
          )}
          {status === "resident" && (
            <>
              <InputWrap>
                <IconContainer>
                  <Icon src={home} />
                </IconContainer>
                <StyledInput
                  onChange={(e) => setUnit(e.target.value)}
                  placeholder="Unit"
                  name="unit"
                  value={unit}
                  required
                />
              </InputWrap>
              <InputWrap style={{ minWidth: "66px" }}>
                <IconContainer>
                  <Icon src={user} />
                </IconContainer>
                <StyledInput
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  name="name"
                  value={name}
                  required
                />
              </InputWrap>
            </>
          )}
          <Error>{error}</Error>
        </Container>
        <Button type="submit">Add User</Button>
        {status === "resident" &&<div>
          
           <Row>
        <InputWrap>
            <IconContainer>
              <Icon src={fileIcon} />
            </IconContainer>
            <StyledInput
              onBlur={blurHandler}
              onChange={saveFile}
              placeholder="File"
              type="file"
              name="uploadfile"
            />
          </InputWrap>
          <FileButton onClick={sendFile}  >Send</FileButton>
        </Row>{fileMessage.isError===-1?<FileError>{fileMessage.message}</FileError>:<></>}
        {fileMessage.isError===0?<Loading>{fileMessage.message}</Loading>:<></>}
        {fileMessage.isError===1?<Result>{fileMessage.message}</Result>:<></>}
        </div> }
      </Wrap>
      <Image src={bgImg} alt="bg" />
    </>
  );
};
