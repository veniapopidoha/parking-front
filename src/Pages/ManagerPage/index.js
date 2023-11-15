import { Button } from "../../Components/Tab/style";
import {
  ErrorText,
  Form,
  FormButton,
  Input,
  Label,
  Textarea,
  Wrap,
} from "./style";
import Bars from "../../images/bars.svg";
import Pencil from "../../images/pencil.svg";
import axios from "axios";
import { useState } from "react";
import { backLink } from "../../App";

export const ManagerPage = () => {
  return (
    <>
      <div>
        <Wrap>
          <Button>
            Add User
            <img
              src={Bars}
              alt="icon"
              style={{ width: "27px", height: "23px" }}
            />
          </Button>
          <Button>
            Select object
            <img
              src={Pencil}
              alt="icon"
              style={{ width: "34px", height: "34px" }}
            />
          </Button>
          <Button>Car list</Button>
          <Button>Resident list</Button>
          <Button>Patrols completed</Button>
          <Button>Reports</Button>
        </Wrap>
        <ManagerObject />
      </div>
    </>
  );
};

const ManagerObject = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [visitorsPerMonth, setVisitorsPerMonth] = useState("");
  const [duration, setDuration] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name && address && visitorsPerMonth && duration) {
      await axios.post(`${backLink}/add-building`, {
        name,
        address,
        notes,
        visitorsPerMonth,
        duration,
      });
      setAddress("");
      setDuration("");
      setName("");
      setNotes("");
      setVisitorsPerMonth("");
    } else {
      setError("Please fill all fields");
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
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
      <Label htmlFor="visitors">Limits:</Label>
      <Input
        placeholder="Number of Visitors per month"
        name="visitors"
        value={visitorsPerMonth}
        onChange={(e) => setVisitorsPerMonth(e.target.value)}
      />
      <Input
        placeholder="How long? ( 3 - if once in three day)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      <FormButton type="submit">Complate</FormButton>
      <ErrorText>{error}</ErrorText>
    </Form>
  );
};
