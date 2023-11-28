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
} from "./style";
import { Container } from "../../style";
import Pencil from "../../../../images/pencil.svg";
import bgImg from "../../../../images/bg4.png";
import { Checkbox } from "./Components/Checkbox";

export const EditUser = () => {
  const user = useSelector((state) => state);

  return (
    <>
      <Container>
        <DropDown>
          <Checkbox text={"See reports"} />
          <Checkbox text={"See patrol reports"} />
        </DropDown>
        <TextWrap>
          <Title>{user?.status}Veniamin Vitaliovich</Title>
          <Status>{user?.name}Manager</Status>
        </TextWrap>
        <Instructions>
          <InstructionsWrap>
            <InstructionsText>Special instructions </InstructionsText>
            <PencilIcon src={Pencil} />
          </InstructionsWrap>
          <InstructionsText style={{ lineHeight: "24px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </InstructionsText>
        </Instructions>
      </Container>
      <Image src={bgImg} alt="bg" />
    </>
  );
};
