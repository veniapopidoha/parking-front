import { useSelector } from "react-redux";
import { Leftside, Status, TextWrap, Title, Wrap, WrapContent } from "./styles";
import { Cars } from "../../../../Components/Cars";
import { ReportsPage } from "../Reports";
import { AddPatrol } from "../AddPatrol";
import { AddReport } from "../AddReport";
import { EditUser } from "../../../ManagerPage/Components/EditUser";
import { Container } from "../../../ManagerPage/style";
import { AddVisitor } from "../../../ClientPage/Components/AddVisitor";
import { EditName } from "../../../../Components/EditName";

export const EmployeeMain = ({ employeePage, selectedBuilding }) => {
  const user = useSelector((state) => state);

  return (
    <Wrap>
      <Container>
        <WrapContent>
          <Leftside>
            <TextWrap>
              <EditName />
              <Status>{user?.status}</Status>
            </TextWrap>
            <EditUser building={selectedBuilding} />
          </Leftside>
          {selectedBuilding.name && (
            <>
              {employeePage === "visitor" && <AddVisitor />}
              {employeePage === "cars" && <Cars building={selectedBuilding} />}
              {employeePage === "report" && <AddReport />}
              {employeePage === "reports" && <ReportsPage />}
              {employeePage === "patrol" && <AddPatrol />}
            </>
          )}
        </WrapContent>
      </Container>
    </Wrap>
  );
};
