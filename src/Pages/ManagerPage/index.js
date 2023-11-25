import { Button } from "../../Components/Tab/style";
import { ManagerWrap, Wrap } from "./style";
import Bars from "../../images/bars.svg";
import Pencil from "../../images/pencil.svg";
import { useState } from "react";
import { ManagerMain } from "./Components/Manager/index";
import { AddUserM } from "./Components/AddUser";
import { Cars } from "./Components/Cars";
import { Residents } from "./Components/Residents";
import { Reports } from "./Components/Reports";
import { Patrols } from "./Components/Patrols";
import { EditUser } from "./Components/EditUser";

export const ManagerPage = () => {
  const [managerPage, setManagerPage] = useState("main");
  const [isBuildings, setIsBuildings] = useState(false);

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
      {managerPage === "cars" && <Cars />}
      {managerPage === "residents" && <Residents />}
      {managerPage === "patrols" && <Patrols />}
      {managerPage === "reports" && <Reports />}
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
