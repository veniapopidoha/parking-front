import { useSelector } from "react-redux";
import bgImg from "../../../../images/bg1.png";
import { Image, ImageWrap, Status, TextWrap, Title, Wrap } from "./styles";
import { Container } from "../../style";
import { useState } from "react";
import { AddObject } from "./Components/AddObject";
import { BuildComboBox } from "./Components/BuildComboBox";

export const ManagerMain = ({ isUser, isBuildings }) => {
  const user = useSelector((state) => state);
  const [isAddBuild, setIsAddBuild] = useState(false);

  return (
    <Wrap>
      <Container>
        {isBuildings && (
          <BuildComboBox
            setIsAddBuild={setIsAddBuild}
            isAddBuild={isAddBuild}
          />
        )}
        <TextWrap>
          <Title>{user?.status}Veniamin Vitaliovich</Title>
          <Status>{user?.name}Manager</Status>
        </TextWrap>
      </Container>
      <ImageWrap style={isUser ? { display: "none" } : { display: "block" }}>
        <Image src={bgImg} alt="img" />
      </ImageWrap>
      {isAddBuild && <AddObject setIsAddBuild={setIsAddBuild} />}
    </Wrap>
  );
};
