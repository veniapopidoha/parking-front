import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { backLink } from "../../App";
import home from "../../images/home.png";
import {
  ComboBox,
  Icon,
  IconContainer,
  InputWrap,
  StyledInput,
  ComboBoxText,
  Button,
} from "./style";
import { useSelector } from "react-redux";

export const BuildComboBox = ({
  setBuilding,
  buildingValue,
  setManagerPage,
  setIsAddBuild,
  isAddBuild,
}) => {
  const [isBuildingsOpen, setIsBuildingsOpen] = useState(false);
  const [buildings, setBuildings] = useState([]);
  const user = useSelector((state) => state);

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
        return (
          b.name && b.name.toLowerCase().includes(buildingValue.toLowerCase())
        );
      })
      .map((filteredBuilding) => (
        <ComboBoxText
          key={filteredBuilding.name}
          onClick={() => {
            handleBuildingModal(filteredBuilding.name);
          }}
        >
          {filteredBuilding.name}
        </ComboBoxText>
      ));

    return filteredBuildings;
  }, [buildingValue, buildings]);

  return (
    <>
      <InputWrap>
        <IconContainer onClick={() => setManagerPage("main")}>
          <Icon src={home} />
        </IconContainer>
        <StyledInput
          onChange={(e) => {
            setBuilding(e.target.value);
            setIsBuildingsOpen(true);
          }}
          placeholder="Building"
          name="building"
          value={buildingValue}
        />
        {buildingValue && isBuildingsOpen && filteredBuildings.length > 0 && (
          <ComboBox>
            {filteredBuildings}
            {user.status === "manager" && (
              <Button
                onClick={() => {
                  setIsAddBuild(!isAddBuild);
                  setManagerPage("building");
                }}
              >
                Add object
              </Button>
            )}
          </ComboBox>
        )}
      </InputWrap>
    </>
  );
};
