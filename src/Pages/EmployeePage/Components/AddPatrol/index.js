import React, { useState } from 'react';
import { backLink } from '../../../../App';
import { InputWrap } from '../../../../Components/Input/style';
import { Button, Container, Title, Wrap } from '../../../Registration/style';
import { StyledInput, Form } from './style';
import axios from 'axios';

export const AddPatrol = () => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  // const data = useSelector((state) => state);
  const name = "userName"

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const buildingName = 'Building';
    console.log(buildingName, startTime, endTime, name)

    try {
      const response = await axios.post(`${backLink}/add-patrol`, {});
    } catch (error) {
      console.error('Error loading files', error);
    }

    setStartTime('');
    setEndTime('');
  };

  return (
    <>
      <Wrap>
        <Title>Patrol report</Title>
        <Form onSubmit={handleFormSubmit}>
          <Container>
            <InputWrap>
              <StyledInput
                // onBlur={(e) => blurHandler(e)}
                onChange={(e) => setStartTime(e.target.value)}
                placeholder='Start time'
                name='startTime'
                value={startTime}
                required
              />
            </InputWrap>
            {/* {nameEmpty && errors.nameError && <Error>{errors.nameError}</Error>} */}
          </Container>
          <Container>
            <InputWrap>
              <StyledInput
                // onBlur={(e) => blurHandler(e)}
                onChange={(e) => setEndTime(e.target.value)}
                placeholder='End time'
                name='endTime'
                value={endTime}
                required
              />
            </InputWrap>
            {/* {nameEmpty && errors.nameError && <Error>{errors.nameError}</Error>} */}
          </Container>
          <Button type='submit'>Add Report</Button>
        </Form>
      </Wrap>
    </>
  );
};
