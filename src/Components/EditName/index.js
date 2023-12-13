import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pencil from "../../images/pencil.svg";
import { backLink } from "../../App";
import { Button } from "../../Pages/ManagerPage/Components/EditUser/style";
import { TextArea, Title } from "./style";
import { Error } from "../../Pages/Registration/style";

export const EditName = () => {
  const data = useSelector((state) => state);
  const [value, setValue] = useState(data.name);
  const [isEditName, setIsEditName] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleName = () => {
    axios
      .patch(`${backLink}/user-name`, {
        userName: data.name,
        newUsername: value,
        buildingName: data.buildingName,
        status: data.status,
      })
      .then(() => {
        dispatch({
          type: "ADD_USER_DATA",
          payload: { name: value },
        });
        setIsEditName(false);
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };

  return (
    <>
      {isEditName ? (
        <div>
          <TextAreaComponent value={value} setValue={setValue} />
          <Button onClick={handleName}>Edit</Button>
          <Error style={{ marginTop: "10px" }}>{error}</Error>
        </div>
      ) : (
        <>
          <Title>
            {data.name}
            <img
              src={Pencil}
              alt="icon"
              style={{
                width: "34px",
                height: "34px",
                cursor: "pointer",
              }}
              onClick={() => setIsEditName(true)}
            />
          </Title>
        </>
      )}
    </>
  );
};

export const TextAreaComponent = ({ value, setValue }) => {
  return (
    <TextArea
      value={value}
      onChange={(e) => setValue(e.target.value)}
    ></TextArea>
  );
};
