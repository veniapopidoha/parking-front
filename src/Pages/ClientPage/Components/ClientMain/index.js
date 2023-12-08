import { Cars } from "../../../../Components/Cars";
import { Patrols } from "../../../../Components/Patrols";
import { Residents } from "../../../../Components/Residents";
import { ReportsPage } from "../../../EmployeePage/Components/Reports";
import { AddResident } from "../AddResident";
import { AddVisitor } from "../AddVisitor";
import { ClientInfo } from "../ClientInfo";
import { Wrap, Container, WrapContent, Image } from "./style";
import bgImg from "../../../../images/bg4.png";

export const ClientMain = ({
  building,
  clientPage,
  isDeleted,
  setIsDeleted,
}) => {
  return (
    <Wrap>
      <Container>
        <WrapContent>
          <ClientInfo building={building} />
          {clientPage === "visitor" && <AddVisitor />}
          {clientPage === "resident" && <AddResident />}
          {clientPage === "cars" && <Cars building={building} />}
          {clientPage === "residents" && (
            <Residents
              building={building}
              isDeleted={isDeleted}
              setIsDeleted={setIsDeleted}
            />
          )}
          {clientPage === "patrols" && <Patrols building={building} />}
          {clientPage === "reports" && <ReportsPage />}
        </WrapContent>
      </Container>
      {clientPage === "main" && <Image src={bgImg} alt="bg" />}
    </Wrap>
  );
};
