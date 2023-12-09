import { useEffect, useState } from "react";
import { Close, Limits, Title, Wrap } from "./style";
import axios from "axios";
import { backLink } from "../../App";

export const Welcome = ({ buildingName, setIsWelcome }) => {
  const [building, setBuilding] = useState([]);

  useEffect(() => {
    axios.get(`${backLink}/building/${buildingName}`).then((res) => {
      setBuilding(res.data);
    });
  }, []);
  return (
    <Wrap>
      <div>
        <Close
          onClick={() => {
            setIsWelcome(false);
          }}
        >
          X
        </Close>
        <Title>You have successfully registered!</Title>
        <Limits>
          You have the following limits: You can register{" "}
          {building.visitorsPerMonth} users.
        </Limits>
        <Limits>Once every {building.duration} days</Limits>
      </div>
    </Wrap>
  );
};
