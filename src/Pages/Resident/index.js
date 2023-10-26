import { ConfigProvider, DatePicker, Space } from 'antd';
import { InputWrap } from '../../Components/Input/style';
import { Container } from '../Registration/style';
import { Form, Wrap, StyledInput, Title } from './style';
import { Button } from '../SignIn/style';
import { useState } from 'react';

export const Resident = () => {
  const { RangePicker } = DatePicker;
  const [show, setShow] = useState(false);

  return (
    <Wrap>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Add Visitor
      </button>
      {show && (
        <Form>
          <Title>Visitor car</Title>
          <Container>
            <InputWrap>
              <StyledInput placeholder='Licence plate' name='plate' />
            </InputWrap>
          </Container>
          <Container>
            <InputWrap>
              <StyledInput placeholder='Model' name='model' />
            </InputWrap>
          </Container>
          <Container>
            <InputWrap>
              <StyledInput placeholder='Colour' name='colour' />
            </InputWrap>
          </Container>
          <Title>Select date</Title>
          <ConfigProvider
            theme={{
              components: {
                DatePicker: {
                  colorLink: '#FECB21',
                  colorLinkActive: '#000',
                  colorPrimary: '#FECB21',
                  colorLinkHover: '#FECB21',
                  colorPrimary: '#FECB21',
                  colorPrimaryHover: '#FECB21',
                },
              },
            }}
          >
            <Space direction='vertical' size={12}>
              <RangePicker showTime />
            </Space>
          </ConfigProvider>
          <Button type='submit'>Add Visitor</Button>
        </Form>
      )}
    </Wrap>
  );
};
