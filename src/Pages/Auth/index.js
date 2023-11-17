import { useSelector } from "react-redux";
import { Close } from "../../Components/Close";
import { Resident } from "../Resident";
import { ManagerPage } from "../ManagerPage";
import { EmployeePage } from '../EmployeePage';

export const Auth = () => {
  const data = useSelector((state) => state.data);
  const status = data.status;

  return (
    <>
      <Close />
      {status === "manager" ? (
        <ManagerPage />
      ) : status === "employee" ? (
         <EmployeePage/>
      ) : status === "client" ? (
        <>Client</>
      ) : (
        <Resident />
      )}
    </>
  );
};
