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
        <Title>Visitor List</Title>
        <Table>
          <thead>
            <TableHeader>
              <TableHead width="20%">License plate</TableHead>
              <TableHead width="20%">Make</TableHead>
              <TableHead width="20%">Unit</TableHead>
              <TableHead width="20%">Start Date</TableHead>
              <TableHead width="20%">End Date</TableHead>
            </TableHeader>
          </thead>
          <TableBody>
            {filteredCars.map((car) => (
              <TableRow key={`car.plate ${Math.random() * 999}`}>
                <TableData width="20%">{car.plate}</TableData>
                <TableDataS width="20%">{car.make}</TableDataS>
                <TableDataS width="20%">{car.residentUnit}</TableDataS>
                <TableDataS width="20%">{new Date(car.startDate).toDateString().slice(4) + " " + new Date(car.startDate).toLocaleTimeString()}</TableDataS>
                <TableDataS width="20%">{new Date(car.endDate).toDateString().slice(4) + " " + new Date(car.endDate).toLocaleTimeString()}</TableDataS>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Wrap>
      <Image src={bgImg} alt="bg" />
    </>
  );
};
