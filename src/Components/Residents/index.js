import { Image, Title } from "../Cars/style";
import bgImg from "../../images/bg4.png";
import Bin from "../../images/bin.png";
import {
  Icon,
  IconWrap,
  TableHeader,
  Wrap,
  TableHead,
  TableRow,
  TableData,
  TableDataS,
  TableBody,
} from "./style";
import React, { useState } from "react";
import axios from "axios";
import { backLink } from "../../App";

export const Residents = ({ building, isDeleted, setIsDeleted }) => {
  const deleteResident = (email) => {
    axios
      .delete(
        `${backLink}/delete-resident?buildingName=${building.name}&email=${email}`
      )
      .then(() => setIsDeleted(!isDeleted));
  };
  return (
    <>
      <Wrap>
        <Title>Resident list</Title>
        <table>
          <thead>
            <TableHeader>
              <TableHead>Name</TableHead>
              <TableHead>Unit</TableHead>
              <TableHead>Number of visitors</TableHead>
            </TableHeader>
          </thead>
          <TableBody>
            {building.users
              .filter((user) => user.status === "resident")
              .map((resident) => {
                return (
                  <tr
                    key={resident.email}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "36px",
                      width: "100%",
                    }}
                  >
                    <TableRow>
                      <TableDataS>{resident.name}</TableDataS>
                      <TableData>{resident.unit}</TableData>
                      <TableDataS style={{ paddingLeft: "30px" }}>
                        {resident.numberOfVisitors}
                      </TableDataS>
                    </TableRow>
                    <IconWrap>
                      <Icon
                        src={Bin}
                        alt="bucket"
                        onClick={() => deleteResident(resident.email)}
                      />
                    </IconWrap>
                  </tr>
                );
              })}
          </TableBody>
        </table>
      </Wrap>
      <Image src={bgImg} alt="bg" />
    </>
  );
};
