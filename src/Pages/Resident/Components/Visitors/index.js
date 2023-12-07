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
  ToggleButton,
  ToggleImage,
  TopWrap,
  Wrap,
} from "./style";
import bgImg from "../../../../images/bg4.png";
import heart from "../../../../images/heart.png";
import { useDispatch, useSelector } from "react-redux";
import { formatDate } from "../../../../utils/formatDate";
import { Button } from "../../../../Components/Tab/style";
import axios from "axios";
import { backLink } from "../../../../App";

export const Visitors = ({ visitors, isAllVisitors, setIsAllVisitors }) => {
  const user = useSelector((state) => state);
  const [filteredVisitors, setFilteredVisitors] = useState([]);

  useEffect(() => {
    const within24Hours = (date) => {
      const startDate = new Date(date);
      const currentTime = new Date();

      const timeDifference = currentTime - startDate;
      const hoursDifference = Math.abs(timeDifference) / (1000 * 3600);

      return hoursDifference < 24;
    };

    const filteredVisitors = visitors.filter((visitor) => {
      const isWithin24Hours = within24Hours(visitor.startDate);

      if (!isWithin24Hours) {
        return Date.now() - new Date(visitor.startDate) < 24 * 60 * 60 * 1000;
      }

      return true;
    });

    setFilteredVisitors(filteredVisitors);
  }, [visitors]);

  const dataToDisplay = isAllVisitors ? visitors : filteredVisitors;

  return (
    <>
      <Wrap>
        <TopWrap>
          <Title>Visitors List</Title>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              marginBottom: "10px",
            }}
          >
            <Button
              style={{ minWidth: "unset" }}
              onClick={() => setIsAllVisitors(false)}
            >
              Active
            </Button>
            <Button
              style={{ minWidth: "unset" }}
              onClick={() => setIsAllVisitors(true)}
            >
              All
            </Button>
          </div>
        </TopWrap>
        <Table>
          <thead>
            <TableHeader>
              <TableHead width="33%">License plate</TableHead>
              <TableHead width="33%">Model</TableHead>
              <TableHead width="33%">Start Date</TableHead>
            </TableHeader>
          </thead>
          <TableBody>
            {dataToDisplay.map((visitor) => (
              <TableRow key={visitor.plate}>
                <TableData width="33%">{visitor.plate}</TableData>
                <TableDataS width="33%">{visitor.make}</TableDataS>
                <TableDataS width="33%">
                  {formatDate(visitor.startDate)}
                </TableDataS>
                <Icon visitor={visitor} user={user} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Wrap>
      <Image src={bgImg} alt="bg" />
    </>
  );
};

const Icon = ({ visitor, user }) => {
  const [isClicked, setIsClicked] = useState(visitor.isFavorite);
  const dispatch = useDispatch();
  const handleFavorite = (visitor) => {
    axios
      .patch(`${backLink}/visitor-favorite`, {
        userId: user.id,
        buildingName: user.buildingName,
        plate: visitor.plate,
      })
      .then(() => {
        dispatch({
          type: "TOGGLE_FAVORITE",
          payload: {
            plate: visitor.plate,
          },
        });
      });
    setIsClicked(!isClicked);
  };
  return (
    <ToggleButton
      onClick={() => {
        handleFavorite(visitor);
      }}
      style={isClicked ? { opacity: "1" } : { opacity: "0.5" }}
    >
      <ToggleImage src={heart} alt="icon" />
    </ToggleButton>
  );
};
