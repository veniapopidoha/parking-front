import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BuildComboBox } from "../../Components/BuildComboBox";
import { Button } from "../../Components/Tab/style";
import { Wrap } from "./style";
import Pencil from "../../images/pencil.svg";
import axios from "axios";
import { backLink } from "../../App";
import { EmployeeMain } from "./Components/Employee";

export const EmployeePage = () => {
  const [isAddBuild, setIsAddBuild] = useState(false);
  const user = useSelector((state) => state);
  const dispatch = useDispatch();
  const [employeePage, setEmployeePage] = useState("main");
  const [buildingValue, setBuildingValue] = useState(user.buildingName || "");
  const [selectedBuilding, setSelectedBuilding] = useState(user.building || []);

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
  }, [buildingValue]);

  return (
    <>
      <EmployeeTabs
        setEmployeePage={setEmployeePage}
        buildingValue={buildingValue}
        setBuildingValue={setBuildingValue}
        setIsAddBuild={setIsAddBuild}
        isAddBuild={isAddBuild}
      />
      <EmployeeMain
        employeePage={employeePage}
        selectedBuilding={selectedBuilding}
      />
    </>
  );
};

const EmployeeTabs = ({
  setEmployeePage,
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
        setEmployeePage={setEmployeePage}
        isAddBuild={isAddBuild}
        setIsAddBuild={setIsAddBuild}
      />
      <Button
        onClick={() => {
          setEmployeePage("visitor");
        }}
      >
        Add Visitor
        <img
          src={Pencil}
          alt="icon"
          style={{ width: "34px", height: "34px" }}
        />
      </Button>
      <Button onClick={() => setEmployeePage("cars")}>Visitor list</Button>
      <Button onClick={() => setEmployeePage("reports")}>Reports</Button>
      <Button onClick={() => setEmployeePage("report")}>Add Report</Button>
      <Button onClick={() => setEmployeePage("patrol")}>Add Patrol</Button>
    </Wrap>
  );
};
