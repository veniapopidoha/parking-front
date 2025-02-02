import { Button } from "../../Components/Tab/style";
import { ManagerWrap, Wrap } from "./style";
import Pencil from "../../images/pencil.svg";
import { useEffect, useState } from "react";
import { ManagerMain } from "./Components/Manager/index";
import axios from "axios";
import { backLink } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import { BuildComboBox } from "../../Components/BuildComboBox";

export const ManagerPage = () => {
  const [managerPage, setManagerPage] = useState("main");
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const [buildingValue, setBuildingValue] = useState(data?.buildingName || "");
  const [selectedBuilding, setSelectedBuilding] = useState(
    data?.building || []
  );
  const [isAddBuild, setIsAddBuild] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    if (buildingValue) {
      axios
        .get(`${backLink}/building/${buildingValue}`)
        .then((res) => {
          setSelectedBuilding(res.data);
          dispatch({
            type: "ADD_USER_DATA",
            payload: {
              building: res.data,
              buildingName: res.data.name,
            },
          });
        })
        .catch((err) => console.log(err));
    }
  }, [buildingValue, isDeleted]);

  return (
    <ManagerWrap>
      <ManagerTabs
        setManagerPage={setManagerPage}
        buildingValue={buildingValue}
        setBuildingValue={setBuildingValue}
        isAddBuild={isAddBuild}
        setIsAddBuild={setIsAddBuild}
      />
      <ManagerMain
        isAddBuild={isAddBuild}
        setIsAddBuild={setIsAddBuild}
        managerPage={managerPage}
        selectedBuilding={selectedBuilding}
        isDeleted={isDeleted}
        setIsDeleted={setIsDeleted}
      />
    </ManagerWrap>
  );
};

const ManagerTabs = ({
  setManagerPage,
  buildingValue,
  setBuildingValue,
  setIsAddBuild,
  isAddBuild,
}) => {
  return (
    <Wrap>
      <BuildComboBox
        buildingValue={buildingValue}
        setBuilding={setBuildingValue}
        setManagerPage={setManagerPage}
        isAddBuild={isAddBuild}
        setIsAddBuild={setIsAddBuild}
      />
      <Button
        onClick={() => {
          setManagerPage("user");
        }}
      >
        Add User
        <img
          src={Pencil}
          alt="icon"
          style={{ width: "34px", height: "34px" }}
        />
      </Button>
      <Button
        onClick={() => {
          setManagerPage("visitor");
        }}
      >
        Add Visitor
        <img
          src={Pencil}
          alt="icon"
          style={{ width: "34px", height: "34px" }}
        />
      </Button>
      <Button
        onClick={() => {
          setManagerPage("building");
        }}
      >
        Add Building
      </Button>
      <Button onClick={() => setManagerPage("cars")}>Visitor list</Button>
      <Button onClick={() => setManagerPage("residents")}>Resident list</Button>
      <Button onClick={() => setManagerPage("patrols")}>
        Patrols completed
      </Button>
      <Button onClick={() => setManagerPage("allPatrols")}>All Patrols</Button>
      <Button onClick={() => setManagerPage("reports")}>Reports</Button>
    </Wrap>
  );
};
