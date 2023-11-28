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

export const Cars = () => {
  return (
    <>
      <Wrap>
        <Title>Car List</Title>
        <table>
          <thead>
            <TableHeader>
              <TableHead>License plate</TableHead>
              <TableHead>Model</TableHead>
              <TableHead>Colour</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>End Date</TableHead>
            </TableHeader>
          </thead>
          <TableBody>
            {building.visitors.map((car) => {
              return (
                <TableRow key={car.plate}>
                  <TableData>{car.plate}</TableData>
                  <TableDataS>{car.model}</TableDataS>
                  <TableDataS>{car.startDate}</TableDataS>
                  <TableData>{car.endDate}</TableData>
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
