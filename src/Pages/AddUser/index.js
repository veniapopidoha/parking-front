import {
  Icon,
  IconContainer,
  InputWrap,
  StyledInput,
} from '../../Components/Input/style';
import { Checkbox, CheckboxWrap, Wrap } from './style';
import mail from '../../images/mail.svg';
import home from '../../images/home.png';
import { Button, Container, Error } from '../Registration/style';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const AddUser = () => {
  const [status, setStatus] = useState('');
  const [email, setEmail] = useState('');
  const [building, setBuilding] = useState('');
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [buildingEmpty, setBuildingEmpty] = useState(false);
  const [errors, setErrors] = useState({
    emailError: 'Please fill your email',
    buildingError: 'Please fill user\'s building',
    checkError: 'Please fill your checkbox',
  });
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (errors.checkError || errors.emailError || errors.buildingError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [errors]);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailEmpty(true);
        break;
    }
  };

  const setChecked = (e) => {
    setStatus(e.target.value);
    setErrors({ ...errors, checkError: '' });
  };

  const handleEmail = (e) => {
    let temp = e.target.value;

    if (temp === '') {
      setErrors({ ...errors, emailError: 'Please fill your email' });
    } else if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(temp) === false) {
      setErrors({ ...errors, emailError: 'Enter valid email' });
    } else {
      setErrors({ ...errors, emailError: '' });
    }
    setEmail(temp);
  };

  const addUser = () => {
    axios
      .post('http://localhost:5000/add-user', {
        email,
        status,
      })
      .then(() => {
        setEmail('');
        setStatus('');
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
            type='radio'
            name='status'
            onChange={setChecked}
            value='manager'
          />
          Manager
        </label>
        <label>
          <Checkbox
            type='radio'
            name='status'
            onChange={setChecked}
            value='client'
          />
          Client
        </label>
        <label>
          <Checkbox
            type='radio'
            name='status'
            onChange={setChecked}
            value='employee'
          />
          Employee
        </label>
        <label>
          <Checkbox
            type='radio'
            name='status'
            onChange={setChecked}
            value='resident'
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
            placeholder='Email'
            name='email'
            value={email}
          />
        </InputWrap>
        {emailEmpty && errors.emailError && <Error>{errors.emailError}</Error>}
        {status === 'resident' || status === 'client' ? (
          <>
            <InputWrap>
              <IconContainer>
                <Icon src={home} />
              </IconContainer>
              <StyledInput
                onBlur={(e) => blurHandler(e)}
                // onChange={}
                placeholder='Building'
                name='building'
                // value={}
              />
            </InputWrap>
            {buildingEmpty && errors.buildingError && (
              <Error>{errors.emailError}</Error>
            )}
          </>
        ) : (
          <></>
        )}
      </Container>
      {/* <Container>
        <InputWrap>
          <IconContainer>
            <Icon src={home} />
          </IconContainer>
          <StyledInput
          onBlur={(e) => blurHandler(e)}
          onChange={handleName}
          placeholder='Name'
          name='name'
          value={name}
          />
        </InputWrap>
        {nameEmpty && errors.nameError && <Error>{errors.nameError}</Error>}
      </Container> */}
      <Button disabled={!formValid} type='submit'>
        Add User
      </Button>
    </Wrap>
  );
};
