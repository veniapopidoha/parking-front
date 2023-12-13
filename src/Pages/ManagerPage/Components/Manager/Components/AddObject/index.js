import axios from "axios";
import { useState } from "react";
import { backLink } from "../../../../../../App";
import {
  ErrorText,
  Form,
  FormButton,
  Input,
  Label,
  LimitWrap,
  RadioButton,
  Textarea,
  Wrap,
} from "./style";

export const AddObject = ({ setIsAddBuild }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [residentInstructions, setResidentInstructions] = useState("");
  const [visitorsPerMonth, setVisitorsPerMonth] = useState("");
  const [numberOfDays, setNumberOfDays] = useState("");
  const [duration, setDuration] = useState("");
  const [limitType, setLimitType] = useState("");
  const [limitPerUse, setLimitPerUse] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name && address && visitorsPerMonth && duration) {
      try {
        await axios.post(`${backLink}/add-building`, {
          name,
          address,
          instructions: notes,
          limitType,
          limitPerUse,
          numberOfDays,
          visitorsPerMonth,
          duration,
        });
        setAddress("");
        setDuration("");
        setName("");
        setNotes("");
        setVisitorsPerMonth("");
        setResidentInstructions("");
        setNumberOfDays("");
      } catch (error) {
        setError(error.response.data.message);
        console.log(error);
      }
    } else {
      setError("Please fill all fields");
    }
  };
  return (
    <Wrap onClick={() => setIsAddBuild(false)}>
      <Form onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}>
        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Textarea
          placeholder="Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <Input
          placeholder="Resident instructions"
          value={residentInstructions}
          onChange={(e) => setResidentInstructions(e.target.value)}
        />
        <Input
          placeholder="Number of days"
          value={numberOfDays}
          onChange={(e) => setNumberOfDays(e.target.value)}
        />
        <LimitWrap>
          <Label htmlFor="calendar" style={{ margin: 0 }}>
            Calendar
          </Label>
          <RadioButton
            type="radio"
            name="calendar"
            value="Calendar"
            checked={limitType === "calendar"}
            onChange={() => setLimitType("calendar")}
          />
          <Label htmlFor="rolling" style={{ margin: 0 }}>
            Rolling
          </Label>
          <RadioButton
            type="radio"
            name="rolling"
            value="Rolling"
            checked={limitType === "rolling"}
            onChange={() => setLimitType("rolling")}
          />
        </LimitWrap>
        <LimitWrap>
          <Label htmlFor="calendar" style={{ margin: 0 }}>
            Per Use
          </Label>
          <RadioButton
            type="radio"
            name="use"
            value="Use"
            checked={limitPerUse === true}
            onChange={() => setLimitPerUse(true)}
          />
          <Label htmlFor="rolling" style={{ margin: 0 }}>
            Per Day
          </Label>
          <RadioButton
            type="radio"
            name="day"
            value="Day"
            checked={limitPerUse === false}
            onChange={() => setLimitPerUse(false)}
          />
        </LimitWrap>
        <Label htmlFor="visitors">Limits:</Label>
        <Input
          placeholder="Number of Visitors per month"
          name="visitors"
          value={visitorsPerMonth}
          onChange={(e) => setVisitorsPerMonth(e.target.value)}
        />
        <Input
          placeholder="How often? ( 3 - if once in three day)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <FormButton type="submit">Complate</FormButton>
        <ErrorText>{error}</ErrorText>
      </Form>
    </Wrap>
  );
};
