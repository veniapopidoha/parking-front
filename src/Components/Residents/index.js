import {
  Image,
  Title,
  TableHeader,
  Wrap,
  TableHead,
  TableRow,
  TableData,
  TableDataS,
  TableBody,
} from "../Cars/style";
import bgImg from "../../images/bg4.png";
import Bin from "../../images/bin.png";
import { Icon, IconWrap, TableRowContainer } from "./style";
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
        <table width="100%">
          <thead>
            <TableHeader>
              <TableHead width="45%">Name</TableHead>
              <TableHead width="10%">Unit</TableHead>
              <TableHead width="45%">Number of visitors</TableHead>
            </TableHeader>
          </thead>
          <TableBody>
            {building.users.map((resident) => {
              return (
                <TableRowContainer key={resident.email}>
                  <TableRow>
                    <TableDataS width="45%">{resident.name}</TableDataS>
                    <TableData width="10%">{resident.unit}</TableData>
                    <TableDataS width="45%">
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
                </TableRowContainer>
              );
            })}
          </TableBody>
        </table>
      </Wrap>
      <Image src={bgImg} alt="bg" />
    </>
  );
};
