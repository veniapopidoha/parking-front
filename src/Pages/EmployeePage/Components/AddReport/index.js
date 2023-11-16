import { InputWrap } from '../../../../Components/Input/style';
import {
  Button,
  Container,
  Title,
  Wrap,
} from '../../../Registration/style';
import { StyledInput, Form, TextArea } from './style';

export const AddReport = () => {
  return (
    <>
      <Wrap>
        <Title>Report</Title>
        <Form onSubmit={() => {}}>
          <Container>
            <InputWrap>
              <StyledInput
                // onBlur={(e) => blurHandler(e)}
                // onChange={handleName}
                placeholder='Licence plate'
                name='plate'
                // value={name}
              />
            </InputWrap>
            {/* {nameEmpty && errors.nameError && <Error>{errors.nameError}</Error>} */}
          </Container>
          <Container>
            <InputWrap>
              <StyledInput
                // onBlur={(e) => blurHandler(e)}
                // onChange={handleName}
                placeholder='Reason'
                name='reason'
                // value={name}
              />
            </InputWrap>
            {/* {nameEmpty && errors.nameError && <Error>{errors.nameError}</Error>} */}
          </Container>
          <Container>
            <InputWrap>
              <TextArea
                // onBlur={(e) => blurHandler(e)}
                // onChange={handleName}
                placeholder='Notes'
                name='notes'
                // value={name}
              />
            </InputWrap>
            {/* {nameEmpty && errors.nameError && <Error>{errors.nameError}</Error>} */}
          </Container>
          <Container>
            <InputWrap>
              <StyledInput
                // onBlur={(e) => blurHandler(e)}
                // onChange={handleName}
                type='file'
                placeholder='Attachment'
                name='attachment'
                accept=".jpg,.jpeg,.png,.heic"
                multiple
                // value={name}
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
