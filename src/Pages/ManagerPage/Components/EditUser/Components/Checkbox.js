import { useState, useEffect } from 'react';
import { Input, Label, StyledCheckbox } from '../style';
import axios from 'axios';
import { backLink } from '../../../../../App';

export const Checkbox = ({ text, value, building }) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (value === 'reports') {
      setChecked(building.reportsAllowed);
    } else if (value === 'patrols') {
      setChecked(building.patrolsAllowed);
    } else if (value === 'patrol-notif') {
      setChecked(building.patrolsAllowed);
    } else if (value === 'instruct-for-manage') {
      setChecked(building.patrolsAllowed);
    } else if (value === 'pinstruct-for-client') {
      setChecked(building.patrolsAllowed);
    } else if (value === 'limit-notif') {
      setChecked(building.patrolsAllowed);
    } else if (value === 'visitor-notif') {
      setChecked(building.patrolsAllowed);
    } else {
      setChecked(building.instructionsAllowed);
    }
  }, [
    building.reportsAllowed,
    building.patrolsAllowed,
    building.instructionsAllowed,
    building.patrolsNotificationAllowed,
    building.instructionForManageNotificationAllowed,
    building.instructionForClientNotificationAllowed,
    building.limitNotificationAllowed,
    building.visitorsNotificationAllowed,
    value,
  ]);

  const handleCheckboxChange = () => {
    setChecked(!checked);
    if (value === 'patrols') {
      axios
        .patch(`${backLink}/building-patrols`, {
          buildingName: building.name,
        })
        .then((res) => setChecked(res.data.patrolsAllowed));
    } else if (value === 'reports') {
      axios
        .patch(`${backLink}/building-reports`, {
          buildingName: building.name,
        })
        .then((res) => setChecked(res.data.reportsAllowed));
    } else if (value === 'patrol-notif') {
      axios
        .patch(`${backLink}/building-notifications-patrols`, {
          buildingName: building.name,
        })
        .then((res) => setChecked(res.data.patrolsNotificationAllowed));
    } else if (value === 'instruct-for-manage') {
      axios
        .patch(`${backLink}/building-notifications-instr-manager`, {
          buildingName: building.name,
        })
        .then((res) =>
          setChecked(res.data.instructionForManageNotificationAllowed)
        );
    } else if (value === 'instruct-for-client') {
      axios
        .patch(`${backLink}/building-notifications-instr-client`, {
          buildingName: building.name,
        })
        .then((res) =>
          setChecked(res.data.instructionForClientNotificationAllowed)
        );
    } else if (value === 'limit-notif') {
      axios
        .patch(`${backLink}/building-notifications-limit`, {
          buildingName: building.name,
        })
        .then((res) => setChecked(res.data.limitNotificationAllowed));
    } else if (value === 'visitor-notif') {
      axios
        .patch(`${backLink}/building-notifications-visitors`, {
          buildingName: building.name,
        })
        .then((res) => setChecked(res.data.visitorsNotificationAllowed));
    } else {
      axios
        .patch(`${backLink}/building-edit-instructions`, {
          buildingName: building.name,
        })
        .then((res) => setChecked(res.data.instructionsAllowed));
    }
  };

  return (
    <Label>
      <Input
        type='checkbox'
        name={value}
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <span
        style={{ maxWidth: '192px', width: '100%', display: 'inline-block' }}
      >
        {text}
      </span>
      <StyledCheckbox checked={checked}></StyledCheckbox>
    </Label>
  );
};
