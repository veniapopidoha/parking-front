import { useSelector } from "react-redux";
import {
  DescriptionD,
  DescriptionT,
  DescriptionWrap,
  Input,
  Label,
  Status,
  StyledCheckbox,
  Title,
  Wrap,
} from "./style";
import { EditUser } from "../../../ManagerPage/Components/EditUser";
import { EditName } from "../../../../Components/EditName";
import { useEffect, useState } from "react";
import axios from "axios";
import { backLink } from "../../../../App";

export const ClientInfo = ({ building }) => {
  const user = useSelector((state) => state);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(building.notificationAllowed);
  }, [building.notificationAllowed]);

  const handleCheckboxChange = () => {
    setChecked(!checked);
    axios
      .patch(`${backLink}/building-notifications`, {
        buildingName: building.name,
      })
      .then((res) => setChecked(res.data.notificationAllowed));
  };

  return (
    <>
      <Wrap>
        <div style={{ marginBottom: "20px" }}>
          <EditName />
          <Status>{user.status}</Status>
          {/* <Label>
            <Input
              type="checkbox"
              name="notification"
              checked={checked}
              onChange={handleCheckboxChange}
            />
            <span>Notification Allowed</span>
            <StyledCheckbox checked={checked}></StyledCheckbox>
          </Label> */}
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
