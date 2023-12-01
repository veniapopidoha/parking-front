import { Cars } from "../../../../Components/Cars";
import { Patrols } from "../../../../Components/Patrols";
import { Residents } from "../../../../Components/Residents";
import { ReportsPage } from "../../../EmployeePage/Components/Reports";
import { AddResident } from "../AddResident";
import { AddVisitor } from "../AddVisitor";
import { ClientInfo } from "../ClientInfo";
import { Wrap, Container, WrapContent } from "./style";

export const ClientMain = ({ building, clientPage }) => {
  return (
    <Wrap>
      <Container>
        <WrapContent>
          <ClientInfo />
          {clientPage === "visitor" && <AddVisitor />}
          {clientPage === "resident" && <AddResident />}
          {clientPage === "cars" && <Cars building={building} />}
          {clientPage === "residents" && <Residents building={building} />}
          {clientPage === "patrols" && <Patrols building={building} />}
          {clientPage === "reports" && <ReportsPage />}
        </WrapContent>
      </Container>
    </Wrap>
  );
};
