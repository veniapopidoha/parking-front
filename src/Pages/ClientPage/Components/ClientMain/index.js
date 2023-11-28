import { ClientInfo } from "../ClientInfo";
import bgImg from "../../../../images/bg1.png";
import { Image, Wrap } from "./style";

export const ClientMain = () => {
  return (
    <Wrap>
      <ClientInfo />
      <Image src={bgImg} alt="img" />
    </Wrap>
  );
};
