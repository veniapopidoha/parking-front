import React from "react";
import {
  Image,
  Table,
  TableBody,
  TableData,
  TableDataS,
  TableHead,
  TableHeader,
  TableRow,
  Title,
  Wrap,
} from "./style";
import bgImg from "../../images/bg4.png";

export const Cars = ({ building }) => {
  return (
    <>
      <Wrap>
        <Title>Car List</Title>
        <Table>
          <thead>
            <TableHeader>
              <TableHead width="20%">License plate</TableHead>
              <TableHead width="20%">Model</TableHead>
              <TableHead width="30%">Start Date</TableHead>
              <TableHead width="30%">End Date</TableHead>
            </TableHeader>
          </thead>
          <TableBody>
            {building.visitors.map((car) => (
              <TableRow key={car.plate}>
                <TableData width="20%">{car.plate}</TableData>
                <TableDataS width="20%">{car.make}</TableDataS>
                <TableDataS width="30%">{car.startDate}</TableDataS>
                <TableData width="30%">{car.endDate}</TableData>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Wrap>
      <Image src={bgImg} alt="bg" />
    </>
  );
};
