import { useState } from "react";
import { Input, Label, StyledCheckbox } from "../style";

export const Checkbox = ({ text }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  return (
    <Label>
      <Input
        type="checkbox"
        name="reports"
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
