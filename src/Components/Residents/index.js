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
import { Icon, IconWrap, TableRowContainer } from "./style";
import axios from "axios";
import { backLink } from "../../App";
import { useState } from "react";

export const Residents = ({ building, isDeleted, setIsDeleted }) => {
  const [editedData, setEditedData] = useState({});

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

  const handleBlur = async () => {
    if (editedData.email) {
      await saveEditedData(editedData);
      setEditedData({});
    }
  };

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
                <TableRowContainer key={resident.email}>
                  <TableRow>
                    <TableDataS
                      width="45%"
                      contentEditable="true"
                      onBlur={() => handleBlur()}
                      onInput={(e) =>
                        handleEdit("name", resident.email, e.target.textContent)
                      }
                    >
                      {resident.name}
                    </TableDataS>
                    <TableData
                      width="10%"
                      contentEditable="true"
                      onBlur={() => handleBlur()}
                      onInput={(e) =>
                        handleEdit("unit", resident.email, e.target.textContent)
                      }
                    >
                      {resident.unit}
                    </TableData>
                    <TableDataS
                      width="45%"
                      contentEditable="true"
                      onBlur={() => handleBlur()}
                      onInput={(e) =>
                        handleEdit(
                          "numberOfRegistration",
                          resident.email,
                          e.target.textContent
                        )
                      }
                    >
                      {resident.numberOfRegistration}
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
            })}
          </TableBody>
        </table>
      </Wrap>
      <Image src={bgImg} alt="bg" />
    </>
  );
};
