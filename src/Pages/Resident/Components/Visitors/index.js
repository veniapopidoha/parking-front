import React, { useEffect, useState } from "react";
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
  const [filteredVisitors, setFilteredVisitors] = useState([]);

  useEffect(() => {
    const lessThanADayAgo = (date) => {
      const currentTime = new Date();
      const startDate = new Date(date);
      const timeDifference = currentTime - startDate;
      const hoursDifference = timeDifference / (1000 * 3600);

      return hoursDifference < 24;
    };

    const filteredVisitors = visitors.filter((visitor) =>
      lessThanADayAgo(visitor.startDate)
    );

    setFilteredVisitors(filteredVisitors);
  }, [visitors]);
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
            {filteredVisitors.map((visitor) => (
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
