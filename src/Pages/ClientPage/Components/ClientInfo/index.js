import { useSelector } from "react-redux";
import {
  DescriptionD,
  DescriptionT,
  DescriptionWrap,
  Status,
  Title,
  Wrap,
} from "./style";
import { EditUser } from "../../../ManagerPage/Components/EditUser";
import { TopWrap } from "../../../Resident/style";

export const ClientInfo = ({ building }) => {
  const user = useSelector((state) => state);
  return (
    <>
      <Wrap>
        <div style={{ marginBottom: "20px" }}>
          <Title>{user.name}</Title>
          <Status>{user.status}</Status>
          <EditUser building={building} />
        </div>
        {/* <dl>
          <DescriptionWrap>
            <DescriptionT>Licence plate</DescriptionT>
            <DescriptionD>СE7248VB</DescriptionD>
          </DescriptionWrap>
          <DescriptionWrap>
            <DescriptionT>Model</DescriptionT>
            <DescriptionD>Reno</DescriptionD>
          </DescriptionWrap>
          <DescriptionWrap>
            <DescriptionT>Colour</DescriptionT>
            <DescriptionD>Wite</DescriptionD>
          </DescriptionWrap>
        </dl> */}
      </Wrap>
    </>
  );
};
