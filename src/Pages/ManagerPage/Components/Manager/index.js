import { useSelector } from "react-redux";
import { Leftside, Status, TextWrap, Title, Wrap, WrapContent } from "./styles";
import { Container } from "../../style";
import { Cars } from "../../../../Components/Cars";
import { Patrols } from "../../../../Components/Patrols";
import { EditUser } from "../EditUser/index";
import { AddObject } from "./Components/AddObject/index";
import { Residents } from "../../../../Components/Residents";
import { ReportsPage } from "../../../EmployeePage/Components/Reports";
import { AddUser } from "../../../AddUser";

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
          <Leftside>
            <TextWrap>
              <Title>{user?.name}</Title>
              <Status>{user?.status}</Status>
            </TextWrap>
            <EditUser building={selectedBuilding} />
          </Leftside>
          {selectedBuilding.name && (
            <>
              {managerPage === "user" && <AddUser />}
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
              {managerPage === "building" && isAddBuild && (
                <AddObject setIsAddBuild={setIsAddBuild} />
              )}
            </>
          )}
        </WrapContent>
      </Container>
    </Wrap>
  );
};
