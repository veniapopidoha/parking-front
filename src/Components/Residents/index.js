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
} from "../Cars/style";
import bgImg from "../../images/bg4.png";
import Bin from "../../images/bin.png";
import Pencil from "../../images/pencil.svg";
import { Icon, IconWrap, TableRowContainer } from "./style";
import axios from "axios";
import { backLink } from "../../App";
import { useEffect, useState } from "react";

export const Residents = ({
  building,
  isDeleted,
  setIsDeleted,
  isChangesMade,
  setIsChangesMade,
}) => {
  return (
    <>
      <Wrap>
        <Title>Resident list</Title>
        <table width="100%">
          <thead>
            <TableHeader>
              <TableHead width="45%">Name</TableHead>
              <TableHead width="10%">Unit</TableHead>
              <TableHead width="45%">Number of registration</TableHead>
            </TableHeader>
          </thead>
          <TableBody>
            {building.users.map((resident) => {
              return (
                <TableRowComponent
                  resident={resident}
                  isDeleted={isDeleted}
                  setIsDeleted={setIsDeleted}
                  isChangesMade={isChangesMade}
                  setIsChangesMade={setIsChangesMade}
                  building={building}
                  key={resident.email}
                />
              );
            })}
          </TableBody>
        </table>
      </Wrap>
      <Image src={bgImg} alt="bg" />
    </>
  );
};

export const Input = ({ resident, editedData, setEditedData, field }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(editedData.value || "");
  }, [editedData.value]);

  const handleEdit = (field, email, value) => {
    setEditedData({ field, email, value });
    setValue(value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => handleEdit(field, resident.email, e.target.value)}
    />
  );
};

const TableRowComponent = ({
  resident,
  building,
  isDeleted,
  setIsDeleted,
  isChangesMade,
  setIsChangesMade,
}) => {
  const [editedData, setEditedData] = useState({});

  const saveEditedData = async ({ field, email, value }) => {
    try {
      await axios.put(`${backLink}/update-resident`, {
        buildingName: building.name,
        email,
        [field]: value,
      });
    } catch (error) {
      console.error("Error updating resident data:", error);
    }
  };

  const handleSubmit = async () => {
    if (editedData.email) {
      await saveEditedData(editedData);
      setIsChangesMade(!isChangesMade);
      setEditedData({});
    }
  };
  const deleteResident = (email) => {
    axios
      .delete(
        `${backLink}/delete-resident?buildingName=${building.name}&email=${email}`
      )
      .then(() => setIsDeleted(!isDeleted));
  };

  const handleEdit = (field, email, value) => {
    setEditedData({ field, email, value });
  };

  return (
    <TableRowContainer>
      <TableRow>
        <TableDataS width="45%">
          {editedData.field === "name" ? (
            <>
              <Input
                resident={resident}
                editedData={editedData}
                setEditedData={setEditedData}
                field="name"
              />
              <button
                onClick={() => {
                  handleSubmit();
                }}
              >
                Submit
              </button>
            </>
          ) : (
            <>
              {resident.name}
              <Icon
                src={Pencil}
                alt="icon"
                onClick={() =>
                  handleEdit("name", resident.email, resident.name)
                }
              />
            </>
          )}
        </TableDataS>
        <TableData width="10%">
          {editedData.field === "unit" ? (
            <>
              <Input
                resident={resident}
                editedData={editedData}
                setEditedData={setEditedData}
                field="unit"
              />
              <button
                onClick={() => {
                  handleSubmit();
                }}
              >
                Submit
              </button>
            </>
          ) : (
            <>
              {resident.unit}
              <Icon
                src={Pencil}
                alt="icon"
                onClick={() =>
                  handleEdit("unit", resident.email, resident.unit)
                }
              />
            </>
          )}
        </TableData>
        <TableDataS width="45%">
          {editedData.field === "numberOfRegistration" ? (
            <>
              <Input
                resident={resident}
                editedData={editedData}
                setEditedData={setEditedData}
                field="numberOfRegistration"
              />
              <button
                onClick={() => {
                  handleSubmit();
                }}
              >
                Submit
              </button>
            </>
          ) : (
            <>
              {resident.numberOfRegistration}
              <Icon
                src={Pencil}
                alt="icon"
                onClick={() =>
                  handleEdit(
                    "numberOfRegistration",
                    resident.email,
                    resident.numberOfRegistration
                  )
                }
              />
            </>
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
