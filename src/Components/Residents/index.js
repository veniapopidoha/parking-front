import { Image, Title } from "../Cars/style";
import bgImg from "../../images/bg4.png";
import Bell from "../../images/bell.svg";
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
import React from "react";

export const Residents = ({ building }) => {
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
                      <Icon src={Bell} alt="bell" />
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
