import { useSelector } from "react-redux";
import { Status, TextWrap, Title, Wrap, WrapContent } from "./styles";
import { Container } from "../../style";
import { Cars } from "../../../../Components/Cars";
import { Patrols } from "../../../../Components/Patrols";
import { AddUserM } from "../AddUser/index";
import { EditUser } from "../EditUser/index";
import { AddObject } from "./Components/AddObject/index";
import { Residents } from "../../../../Components/Residents";
import { ReportsPage } from "../../../EmployeePage/Components/Reports";

export const ManagerMain = ({
  setIsAddBuild,
  isAddBuild,
  managerPage,
  selectedBuilding,
  isDeleted,
  setIsDeleted,
}) => {
  const user = useSelector((state) => state);

  return (
    <Wrap>
      <Container>
        <WrapContent>
          <div style={{ minWidth: "500px", marginRight: "40px" }}>
            <EditUser building={selectedBuilding} />
            <TextWrap>
              <Title>{user?.name}</Title>
              <Status>{user?.status}</Status>
            </TextWrap>
          </div>
          {selectedBuilding.name && (
            <>
              {managerPage === "user" && <AddUserM />}
              {managerPage === "cars" && <Cars building={selectedBuilding} />}
              {managerPage === "residents" && (
                <Residents
                  building={selectedBuilding}
                  isDeleted={isDeleted}
                  setIsDeleted={setIsDeleted}
                />
              )}
              {managerPage === "patrols" && (
                <Patrols building={selectedBuilding} />
              )}
              {managerPage === "reports" && <ReportsPage />}
            </>
          )}
        </WrapContent>
      </Container>
      {isAddBuild && <AddObject setIsAddBuild={setIsAddBuild} />}
    </Wrap>
  );
};
