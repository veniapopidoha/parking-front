import {
  Image,
  TableBody,
  TableData,
  TableDataS,
  Title,
  TableRow,
  Wrap,
  TableHeader,
  TableHead,
} from "../Cars/style";
import bgImg from "../../images/bg4.png";
import { formatDate } from "../../utils/formatDate";

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
<<<<<<< HEAD
                  <TableData width="33%">
                    {formatDate(patrol.startDate)}
                  </TableData>
                  <TableData width="33%">
                    {formatDate(patrol.endDate)}
                  </TableData>
=======
                  <TableData width="33%">{patrol.startTime}</TableData>
                  <TableData width="33%">{patrol.endTime}</TableData>
>>>>>>> c5e83079178813e936955c9140e3b5a865f23da6
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
