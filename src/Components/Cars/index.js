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
import { formatDate } from "../../utils/formatDate";

export const Cars = ({ building }) => {
  const filteredCars = building.visitors.filter((car) => {
    const now = new Date();
    const startDate = new Date(car.startDate);

    const isAddedLessThanDayAgo = now - startDate < 24 * 60 * 60 * 1000;

    const nextDayStartDate = new Date(startDate);
    nextDayStartDate.setDate(startDate.getDate() + 1);
    nextDayStartDate.setHours(8, 0, 0, 0);

    const isStartDateAt8AMNextDay = now.getTime() < nextDayStartDate.getTime();

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
              <TableHead width="25%">Make</TableHead>
              <TableHead width="25%">Start Date</TableHead>
              <TableHead width="25%">End Date</TableHead>
            </TableHeader>
          </thead>
          <TableBody>
            {filteredCars.map((car) => (
              <TableRow key={`car.plate ${Math.random() * 999}`}>
                <TableData width="25%">{car.plate}</TableData>
                <TableDataS width="25%">{car.make}</TableDataS>
                <TableDataS width="25%">{formatDate(car.startDate)}</TableDataS>
                <TableDataS width="25%">{formatDate(car.endDate)}</TableDataS>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Wrap>
      <Image src={bgImg} alt="bg" />
    </>
  );
};
