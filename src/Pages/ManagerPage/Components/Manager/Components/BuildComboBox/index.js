import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { backLink } from "../../../../../../App";
import home from "../../../../../../images/home.png";
import {
  ComboBox,
  Icon,
  IconContainer,
  InputWrap,
  StyledInput,
  ComboBoxText,
  Button,
} from "./style";

export const BuildComboBox = ({ setIsAddBuild, isAddBuild }) => {
  const [building, setBuilding] = useState("");
  const [isBuildingsOpen, setIsBuildingsOpen] = useState(false);
  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    axios
      .get(`${backLink}/buildings`)
      .then((res) => {
        setBuildings(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleBuildingModal = (buildingName) => {
    setBuilding(buildingName);
    setIsBuildingsOpen(false);
  };

  const filteredBuildings = useMemo(() => {
    const filteredBuildings = buildings
      .filter((b) => {
        return b.name && b.name.toLowerCase().includes(building.toLowerCase());
      })
      .map((filteredBuilding) => (
        <ComboBoxText
          key={filteredBuilding.name}
          onClick={() => handleBuildingModal(filteredBuilding.name)}
        >
          {filteredBuilding.name}
        </ComboBoxText>
      ));

    return filteredBuildings;
  }, [building, buildings]);

  return (
    <>
      <InputWrap>
        <IconContainer>
          <Icon src={home} />
        </IconContainer>
        <StyledInput
          onChange={(e) => {
            setBuilding(e.target.value);
            setIsBuildingsOpen(true);
          }}
          placeholder="Building"
          name="building"
          value={building}
        />
        {building && isBuildingsOpen && filteredBuildings.length > 0 && (
          <ComboBox>
            {filteredBuildings}
            <Button onClick={() => setIsAddBuild(!isAddBuild)}>
              Add object
            </Button>
          </ComboBox>
        )}
      </InputWrap>
    </>
  );
};
