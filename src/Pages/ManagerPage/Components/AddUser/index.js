import { AddUser } from "../../../AddUser";
import bgImg from "../../../../images/bg3.png";
import { Image, Wrap } from "./style";

export const AddUserM = () => {
  return (
    <>
      <Wrap>
        <AddUser />
        <Image src={bgImg} />
      </Wrap>
    </>
  );
};
