import { Button } from "../../Components/Tab/style";
import { ClientWrap, Wrap } from "./style";
import Pencil from "../../images/pencil.svg";
import { useEffect, useState } from "react";
import { ClientMain } from "./Components/ClientMain";
import { useSelector } from "react-redux";
import axios from "axios";
import { backLink } from "../../App";

export const ClientPage = () => {
  const [clientPage, setClientPage] = useState("main");
  const [building, setBuilding] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isChangesMade, setIsChangesMade] = useState(false);
  const data = useSelector((state) => state);

  useEffect(() => {
    axios
      .get(`${backLink}/building/${data.buildingName}`)
      .then((res) => {
        setBuilding(res.data);
      })
      .catch((err) => console.log(err));
  }, [isDeleted, , isChangesMade, data]);

  return (
    <ClientWrap>
      <ClientTabs setClientPage={setClientPage} building={building} />
      <ClientMain
        building={building}
        clientPage={clientPage}
        isDeleted={isDeleted}
        setIsDeleted={setIsDeleted}
        isChangesMade={isChangesMade}
        setIsChangesMade={setIsChangesMade}
      />
    </ClientWrap>
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
      <Button onClick={() => setClientPage("cars")}>Visitor list</Button>
      <Button onClick={() => setClientPage("offenders")}>Offenders</Button>
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
