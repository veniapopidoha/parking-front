import React, { useState } from "react";
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
import bgImg from "../../../../images/bg4.png";
import { useDispatch } from "react-redux";

export const Visitors = ({ visitors }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Wrap>
        <Title>Visitors List</Title>
        <Table>
          <thead>
            <TableHeader>
              <TableHead width="33%">License plate</TableHead>
              <TableHead width="33%">Model</TableHead>
              <TableHead width="33%">Start Date</TableHead>
            </TableHeader>
          </thead>
          <TableBody>
            {visitors.map((visitor) => (
              <TableRow key={visitor.plate}>
                <TableData width="33%">{visitor.plate}</TableData>
                <TableDataS width="33%">{visitor.make}</TableDataS>
                <TableDataS width="33%">{visitor.startDate}</TableDataS>
                <button
                  onClick={() => {
                    dispatch({
                      type: "TOGGLE_FAVORITE",
                      payload: {
                        plate: visitor.plate,
                      },
                    });
                  }}
                  style={{ position: "absolute", right: "-45px" }}
                >
                  Toggle Favorite
                </button>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Wrap>
      <Image src={bgImg} alt="bg" />
    </>
  );
};
