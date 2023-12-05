import React, { useRef, useState } from "react";
import { backLink } from "../../../../App";
import { InputWrap } from "../../../../Components/Input/style";
import { Button, Container, Title, Wrap } from "../../../Registration/style";
import { StyledInput, Form, TextArea } from "./style";
import axios from "axios";
import { Image } from "../../../../Components/Cars/style";
import bgImg from "../../../../images/bg4.png";

export const AddReport = () => {
  const [plate, setPlate] = useState("");
  const [reason, setReason] = useState("");
  const [notes, setNotes] = useState("");
  const [attachment, setAttachment] = useState(null);
  const inputFile = useRef(null);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    for (let i = 0; i < attachment.length; i++) {
      formData.append("files", attachment[i]);
    }

    formData.append("reason", reason);
    formData.append("plate", plate);
    formData.append("notes", notes);
    formData.append("buildingName", "Building");

    try {
      const response = await axios.post(`${backLink}/add-report`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.error("Error loading files", error);
    }

    inputFile.current.value = "";
    setNotes("");
    setPlate("");
    setReason("");
  };

  return (
    <>
      <Wrap>
        <Title>Report</Title>
        <Form onSubmit={handleFormSubmit}>
          <Container>
            <InputWrap>
              <StyledInput
                // onBlur={(e) => blurHandler(e)}
                onChange={(e) => setPlate(e.target.value)}
                placeholder="Licence plate"
                name="plate"
                value={plate}
                required
              />
            </InputWrap>
            {/* {nameEmpty && errors.nameError && <Error>{errors.nameError}</Error>} */}
          </Container>
          <Container>
            <InputWrap>
              <StyledInput
                // onBlur={(e) => blurHandler(e)}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Reason"
                name="reason"
                value={reason}
                required
              />
            </InputWrap>
            {/* {nameEmpty && errors.nameError && <Error>{errors.nameError}</Error>} */}
          </Container>
          <Container>
            <InputWrap>
              <TextArea
                // onBlur={(e) => blurHandler(e)}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Notes"
                name="notes"
                value={notes}
                required
              />
            </InputWrap>
            {/* {nameEmpty && errors.nameError && <Error>{errors.nameError}</Error>} */}
          </Container>
          <Container>
            <InputWrap>
              <StyledInput
                // onBlur={(e) => blurHandler(e)}
                // onChange={handleName}
                type="file"
                placeholder="Attachment"
                name="attachment"
                accept=".jpg,.jpeg,.png,.heic"
                multiple
                required
                onChange={(e) => setAttachment(e.target.files)}
                ref={inputFile}
              />
            </InputWrap>
            {/* {nameEmpty && errors.nameError && <Error>{errors.nameError}</Error>} */}
          </Container>

          <Button type="submit">Add Report</Button>
        </Form>
      </Wrap>
      <Image src={bgImg} alt="bg" />
    </>
  );
};
