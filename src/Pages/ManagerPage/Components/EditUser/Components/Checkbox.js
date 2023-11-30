import { useState, useEffect } from "react";
import { Input, Label, StyledCheckbox } from "../style";
import axios from "axios";
import { backLink } from "../../../../../App";

export const Checkbox = ({ text, value, building }) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (value === "reports") {
      setChecked(building.reportsAllowed);
    } else if (value === "patrols") {
      setChecked(building.patrolsAllowed);
    }
  }, [building.reportsAllowed, building.patrolsAllowed, value]);

  const handleCheckboxChange = () => {
    setChecked(!checked);
    if (value === "patrols") {
      axios
        .patch(`${backLink}/building-patrols`, {
          buildingName: building.name,
        })
        .then((res) => setChecked(res.data.patrolsAllowed));
    } else {
      axios
        .patch(`${backLink}/building-reports`, {
          buildingName: building.name,
        })
        .then((res) => setChecked(res.data.reportsAllowed));
    }
  };

  return (
    <Label>
      <Input
        type="checkbox"
        name={value}
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <span
        style={{ maxWidth: "192px", width: "100%", display: "inline-block" }}
      >
        {text}
      </span>
      <StyledCheckbox checked={checked}></StyledCheckbox>
    </Label>
  );
};
