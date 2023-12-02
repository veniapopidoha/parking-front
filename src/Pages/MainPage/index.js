import { useLocation } from "react-router-dom";
import { AddUser } from "../AddUser";
import { SignIn } from "../SignIn";
import { Registration } from "../Registration";
import { useSelector } from "react-redux";
import { Auth } from "../Auth";
import { ManagerPage } from "../ManagerPage";
import { EmployeePage } from '../EmployeePage';
import { ClientPage } from "../ClientPage";

export const MainPage = () => {
  const locationPage = useLocation();
  const userId = new URLSearchParams(locationPage.search).get("id");

  const isAuth = useSelector((state) => state.isAuth);

  return (
    <>
      {isAuth ? (
        <Auth />
      ) : userId ? (
        <Registration userId={userId} />
      ) : (
        <>
          <SignIn />
          <AddUser />
        </>
      )}

      {/* <EmployeePage /> */}
    </>
  );
};
