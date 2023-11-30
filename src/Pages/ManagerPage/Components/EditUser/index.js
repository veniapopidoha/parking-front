import { useSelector } from "react-redux";
import {
  Status,
  TextWrap,
  Title,
  DropDown,
  Instructions,
  InstructionsWrap,
  PencilIcon,
  Image,
  InstructionsText,
  TextArea,
  Button,
} from "./style";
import { Container } from "../../style";
import Pencil from "../../../../images/pencil.svg";
import bgImg from "../../../../images/bg4.png";
import { Checkbox } from "./Components/Checkbox";
import { useEffect, useState } from "react";
import axios from "axios";
import { backLink } from "../../../../App";

export const EditUser = ({ building }) => {
  const user = useSelector((state) => state);
  const [isToEdit, setIsToEdit] = useState(false);
  const [value, setValue] = useState("");
  const [isSubmited, setIsSubmited] = useState(false);

  useEffect(() => {
    axios
      .patch(`${backLink}/building-instructions`, {
        buildingName: building.name,
        instructions: value,
      })
      .then((res) => setValue(res.data.instructions));
  }, [isSubmited]);

  return (
    <>
      <Container>
        <DropDown>
          <Checkbox
            text={"See reports"}
            value={"reports"}
            building={building}
          />
          <Checkbox
            text={"See patrol reports"}
            value={"patrols"}
            building={building}
          />
        </DropDown>
        <TextWrap>
          <Title>{user?.name}</Title>
          <Status>{user?.status}</Status>
        </TextWrap>
        <Instructions>
          <InstructionsWrap>
            <InstructionsText>Special instructions </InstructionsText>
            <PencilIcon src={Pencil} onClick={() => setIsToEdit(!isToEdit)} />
          </InstructionsWrap>
          {isToEdit ? (
            <>
              <TextAreaComponent value={value} setValue={setValue} />
              <Button
                onClick={() => {
                  setIsSubmited(!isSubmited);
                  setIsToEdit(false);
                }}
              >
                Edit
              </Button>
            </>
          ) : (
            <InstructionsText style={{ lineHeight: "24px" }}>
              {value || building.instructions}
            </InstructionsText>
          )}
        </Instructions>
      </Container>
      <Image src={bgImg} alt="bg" />
    </>
  );
};

export const TextAreaComponent = ({ value, setValue }) => {
  return (
    <TextArea
      value={value}
      onChange={(e) => setValue(e.target.value)}
    ></TextArea>
  );
};
