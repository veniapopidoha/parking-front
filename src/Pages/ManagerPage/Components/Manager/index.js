import { useSelector } from "react-redux";
import bgImg from "../../../../images/bg1.png";
import { Image, ImageWrap, Status, TextWrap, Title, Wrap } from "./styles";
import { Container } from "../../style";
import { AddObject } from "./Components/AddObject";

export const ManagerMain = ({ isUser, setIsAddBuild, isAddBuild }) => {
  const user = useSelector((state) => state);

  return (
    <Wrap>
      <Container>
        <TextWrap>
          <Title>{user?.name}</Title>
          <Status>{user?.status}</Status>
        </TextWrap>
      </Container>
      <ImageWrap style={isUser ? { display: "none" } : { display: "block" }}>
        <Image src={bgImg} alt="img" />
      </ImageWrap>
      {isAddBuild && <AddObject setIsAddBuild={setIsAddBuild} />}
    </Wrap>
  );
};
