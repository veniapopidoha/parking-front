import { Button } from "../../Components/Tab/style";
import { Wrap } from "./style";
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
import Pencil from "../../images/pencil.svg";

export const ClientPage = () => {
  const [clientPage, setClientPage] = useState("main");
  const [building, setBuilding] = useState([]);
  const user = useSelector((state) => state.data);

  useEffect(() => {
    axios
      .get(`${backLink}/building/${user.building}`)
      .then((res) => {
        setBuilding(res.data);
      })
      .catch((err) => console.log(err));
  });

  return (
    <>
      <ClientTabs setClientPage={setClientPage} />
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

export const ClientTabs = ({ setClientPage }) => {
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
      <Button onClick={() => setClientPage("patrols")}>
        Patrols completed
      </Button>
      <Button onClick={() => setClientPage("reports")}>Reports</Button>
    </Wrap>
  );
};
