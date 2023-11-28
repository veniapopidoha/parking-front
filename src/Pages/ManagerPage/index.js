import { Button } from "../../Components/Tab/style";
import { ManagerWrap, Wrap } from "./style";
import Bars from "../../images/bars.svg";
import Pencil from "../../images/pencil.svg";
import { useEffect, useState } from "react";
import { ManagerMain } from "./Components/Manager/index";
import { AddUserM } from "./Components/AddUser";
import { EditUser } from "./Components/EditUser";
import { Cars } from "../../Components/Cars";
import { Residents } from "../../Components/Residents";
import { Patrols } from "../../Components/Patrols";
import { Reports } from "../../Components/Reports";
import axios from "axios";
import { backLink } from "../../App";

export const ManagerPage = () => {
  const [managerPage, setManagerPage] = useState("main");
  const [isBuildings, setIsBuildings] = useState(false);
  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    axios
      .get(`${backLink}/buildings`)
      .then((res) => setIsBuildings(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ManagerWrap>
      <ManagerTabs
        setManagerPage={setManagerPage}
        setIsBuildings={setIsBuildings}
        isBuildings={isBuildings}
      />
      {managerPage === "main" || managerPage === "user" ? (
        <ManagerMain
          isUser={managerPage === "user"}
          isBuildings={isBuildings}
        />
      ) : (
        <></>
      )}
      {managerPage === "user" && <AddUserM />}
      {managerPage === "cars" && <Cars buildings={buildings} />}
      {managerPage === "residents" && <Residents buildings={buildings} />}
      {managerPage === "patrols" && <Patrols buildings={buildings} />}
      {managerPage === "reports" && <Reports buildings={buildings} />}
    </ManagerWrap>
  );
};

const ManagerTabs = ({ setManagerPage, setIsBuildings, isBuildings }) => {
  return (
    <Wrap>
      <Button
        onClick={() => {
          setManagerPage("main");
          setIsBuildings(!isBuildings);
        }}
      >
        Select object
        <img src={Bars} alt="icon" style={{ width: "27px", height: "23px" }} />
      </Button>
      <Button
        onClick={() => {
          setManagerPage("user");
          setIsBuildings(false);
        }}
      >
        Add User
        <img
          src={Pencil}
          alt="icon"
          style={{ width: "34px", height: "34px" }}
        />
      </Button>
      <Button onClick={() => setManagerPage("cars")}>Car list</Button>
      <Button onClick={() => setManagerPage("residents")}>Resident list</Button>
      <Button onClick={() => setManagerPage("patrols")}>
        Patrols completed
      </Button>
      <Button onClick={() => setManagerPage("reports")}>Reports</Button>
    </Wrap>
  );
};
