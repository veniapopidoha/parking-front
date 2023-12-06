import { Wrap } from "./style";
import logout from "../../images/logout.png";
import { useDispatch } from "react-redux";

export const Close = () => {
  const dispatch = useDispatch();

  const setLogout = () => {
    dispatch({ type: "LOGOUT", payload: false });
  };

  return (
    <Wrap onClick={setLogout}>
      <img src={logout} />
    </Wrap>
  );
};
