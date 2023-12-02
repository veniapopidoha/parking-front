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
  const filteredCars = building.visitors.filter((car) => {
    const now = new Date();

    const startDate = new Date(car.startDate);
    const isAddedLessThanDayAgo = now - startDate < 24 * 60 * 60 * 1000;

    const nextDayStartDate = new Date(startDate);
    nextDayStartDate.setDate(startDate.getDate() + 1);
    const isStartDateAt8AMNextDay =
      nextDayStartDate.getHours() === 8 && nextDayStartDate.getMinutes() === 0;

    return isAddedLessThanDayAgo || isStartDateAt8AMNextDay;
  });

  return (
    <>
      <Wrap>
        <Title>Car List</Title>
        <Table>
          <thead>
            <TableHeader>
              <TableHead width="25%">License plate</TableHead>
              <TableHead width="25%">Model</TableHead>
              <TableHead width="25%">Start Date</TableHead>
              <TableHead width="25%">End Date</TableHead>
            </TableHeader>
          </thead>
          <TableBody>
            {filteredCars.map((car) => (
              <TableRow key={car.plate}>
                <TableData width="25%">{car.plate}</TableData>
                <TableDataS width="25%">{car.make}</TableDataS>
                <TableDataS width="25%">{car.startDate}</TableDataS>
                <TableData width="25%">{car.endDate}</TableData>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Wrap>
      <Image src={bgImg} alt="bg" />
    </>
  );
};
