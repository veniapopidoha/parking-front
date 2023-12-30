import {
  Image,
  Title,
  TableHeader,
  Wrap,
  TableHead,
  TableRow,
  TableData,
  TableDataS,
  TableBody,
  TopWrap,
} from "../Cars/style";
import bgImg from "../../images/bg4.png";
import Bin from "../../images/bin.png";
import Pencil from "../../images/pencil.svg";
import { Icon, IconWrap, TableRowContainer } from "./style";
import axios from "axios";
import { backLink } from "../../App";
import { useEffect, useState } from "react";
import { Button } from "../../Pages/SignIn/style";
import { useSelector } from 'react-redux';

export const Residents = ({
  building,
  isDeleted,
  setIsDeleted,
  isChangesMade,
  setIsChangesMade,
}) => {
  const [editing, setEditing] = useState(false);
  const handleSubmit = async () => {
    setIsChangesMade(!isChangesMade);
    setEditing(false);
  };
  const status = useSelector((state) => state.status);

  return (
    <>
      <Wrap>
        <TopWrap>
          <Title>Resident list</Title>
          {status === "client" && <Icon onClick={() => setEditing(!editing)} src={Pencil} alt="icon" />}
        </TopWrap>
        <table width="100%">
          <thead>
            <TableHeader>
              <TableHead width="45%">Name</TableHead>
              <TableHead width="10%">Unit</TableHead>
              <TableHead width="45%">Number of registration</TableHead>
            </TableHeader>
          </thead>
          <TableBody>
            {building.users.map((resident) => (
              <TableRowComponent
                resident={resident}
                isDeleted={isDeleted}
                setIsDeleted={setIsDeleted}
                isChangesMade={isChangesMade}
                building={building}
                editing={editing}
                key={resident.email}
              />
            ))}
          </TableBody>
        </table>
        {editing && <Button onClick={handleSubmit}>Submit</Button>}
      </Wrap>
      <Image src={bgImg} alt="bg" />
    </>
  );
};

const TableRowComponent = ({
  resident,
  building,
  isDeleted,
  setIsDeleted,
  isChangesMade,
  editing,
}) => {
  const deleteResident = (email) => {
    axios
      .delete(
        `${backLink}/delete-resident?buildingName=${building.name}&email=${email}`
      )
      .then(() => setIsDeleted(!isDeleted));
  };

  return (
    <TableRowContainer>
      <TableRow>
        <TableDataS width="45%">
          {editing ? (
            <Input
              resident={resident}
              field="name"
              isChangesMade={isChangesMade}
            />
          ) : (
            <>{resident.name}</>
          )}
        </TableDataS>
        <TableData width="10%">
          {editing ? (
            <Input
              resident={resident}
              field="unit"
              isChangesMade={isChangesMade}
            />
          ) : (
            <>{resident.unit}</>
          )}
        </TableData>
        <TableDataS width="45%">
          {editing ? (
            <Input
              resident={resident}
              field="numberOfRegistration"
              isChangesMade={isChangesMade}
            />
          ) : (
            <>{resident.numberOfRegistration}</>
          )}
        </TableDataS>
      </TableRow>
      <IconWrap>
        <Icon
          src={Bin}
          alt="bucket"
          onClick={() => deleteResident(resident.email)}
        />
      </IconWrap>
    </TableRowContainer>
  );
};

export const Input = ({ resident, field, isChangesMade }) => {
  const [value, setValue] = useState("");
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    try {
      axios.put(`${backLink}/update-resident`, {
        buildingName: resident.buildingName,
        email: editedData.email,
        name: editedData.field === "name" ? editedData.value : resident.name,
        numberOfRegistration:
          editedData.field === "numberOfRegistration"
            ? editedData.value
            : resident.numberOfRegistration,
        unit: editedData.field === "unit" ? editedData.value : resident.unit,
      });
    } catch (error) {
      console.error("Error updating resident data:", error);
    }
  }, [isChangesMade, value]);

  useEffect(() => {
    setValue(editedData.value);
  }, [editedData.value]);

  const handleEdit = async (field, email, value) => {
    setEditedData({ field, email, value });
    setValue(value);
  };

  return (
    <input
      type={field === "numberOfRegistration" ? "number" : "text"}
      value={value || resident[field]}
      style={{ width: "100%" }}
      onChange={(e) => handleEdit(field, resident.email, e.target.value)}
    />
  );
};
