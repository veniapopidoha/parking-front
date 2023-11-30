import { Button } from "../../Components/Tab/style";
import { Wrap } from "./style";
import Pencil from "../../images/pencil.svg";
import { Cars } from "../../Components/Cars";
import { Residents } from "../../Components/Residents";
import { Patrols } from "../../Components/Patrols";
import { Reports } from "../../Components/Reports";
import { useEffect, useState } from "react";
import { ClientMain } from "./Components/ClientMain";
import { AddVisitor } from "./Components/AddVisitor";
import { AddResident } from "./Components/AddResident";
import { useSelector } from "react-redux";
import axios from "axios";
import { backLink } from "../../App";

export const ClientPage = () => {
  const [clientPage, setClientPage] = useState("main");
  const [building, setBuilding] = useState([]);
  const data = useSelector((state) => state.building);

  useEffect(() => {
    axios
      .get(`${backLink}/building/${data.name}`)
      .then((res) => {
        setBuilding(res.data);
      })
      .catch((err) => console.log(err));
  });

  return (
    <>
      <ClientTabs setClientPage={setClientPage} building={building} />
      <div>
        {clientPage === "main" && <ClientMain />}
        {clientPage === "visitor" && <AddVisitor />}
        {clientPage === "resident" && <AddResident />}
        {clientPage === "cars" && <Cars building={building} />}
        {clientPage === "residents" && <Residents building={building} />}
        {clientPage === "patrols" && <Patrols building={building} />}
        {clientPage === "reports" && <Reports building={building} />}
      </div>
    </>
  );
};

export const ClientTabs = ({ setClientPage, building }) => {
  return (
    <Wrap>
      <Button onClick={() => setClientPage("visitor")}>
        Add Visitor
        <img
          src={Pencil}
          alt="icon"
          style={{ width: "34px", height: "34px" }}
        />
      </Button>
      <Button onClick={() => setClientPage("resident")}>
        Add Resident
        <img
          src={Pencil}
          alt="icon"
          style={{ width: "34px", height: "34px" }}
        />
      </Button>
      <Button onClick={() => setClientPage("cars")}>Car list</Button>
      <Button onClick={() => setClientPage("residents")}>Resident list</Button>
      <Button
        onClick={() => setClientPage("patrols")}
        style={
          building.patrolsAllowed ? { display: "block" } : { display: "none" }
        }
      >
        Patrols completed
      </Button>
      <Button
        onClick={() => setClientPage("reports")}
        style={
          building.reportsAllowed ? { display: "block" } : { display: "none" }
        }
      >
        Reports
      </Button>
    </Wrap>
  );
};
