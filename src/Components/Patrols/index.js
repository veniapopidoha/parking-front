import { Image, TableBody, TableData, TableDataS, Title } from "../Cars/style";
import bgImg from "../../images/bg4.png";
import { TableHeader, TableHead } from "../Cars/style";
import { TableRow, Wrap } from "./style";

export const Patrols = ({ building }) => {
  return (
    <>
      <Wrap>
        <Title>Patrols completed</Title>
        <table width="100%">
          <thead>
            <TableHeader>
              <TableHead width="33%">Name</TableHead>
              <TableHead width="33%">Start</TableHead>
              <TableHead width="33%">End</TableHead>
            </TableHeader>
          </thead>
          <TableBody>
            {building.patrols.map((patrol) => {
              return (
                <TableRow key={`${patrol.name} ${Math.random() * 9999}`}>
                  <TableDataS width="33%">{patrol.name}</TableDataS>
                  <TableData width="33%">{patrol.startTime}</TableData>
                  <TableData width="33%">{patrol.endTime}</TableData>
                </TableRow>
              );
            })}
          </TableBody>
        </table>
      </Wrap>
      <Image src={bgImg} alt="bg" />
    </>
  );
};
