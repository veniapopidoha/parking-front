import React from "react";
import {
  Image,
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

export const Cars = ({ building, buildings }) => {
  console.log(buildings, building);
  return (
    <>
      <Wrap>
        <Title>Car List</Title>
        <table>
          <thead>
            <TableHeader>
              <TableHead>License plate</TableHead>
              <TableHead>Model</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>End Date</TableHead>
            </TableHeader>
          </thead>
          <TableBody>
            {buildings
              ? buildings.map((building) =>
                  building.visitors.map((car) => (
                    <TableRow key={car.plate}>
                      <TableData>{car.plate}</TableData>
                      <TableDataS>{car.model}</TableDataS>
                      <TableDataS>{car.startDate}</TableDataS>
                      <TableData>{car.endDate}</TableData>
                    </TableRow>
                  ))
                )
              : building.visitors.map((car) => (
                  <TableRow key={car.plate}>
                    <TableData>{car.plate}</TableData>
                    <TableDataS>{car.model}</TableDataS>
                    <TableDataS>{car.startDate}</TableDataS>
                    <TableData>{car.endDate}</TableData>
                  </TableRow>
                ))}
          </TableBody>
        </table>
      </Wrap>
      <Image src={bgImg} alt="bg" />
    </>
  );
};
