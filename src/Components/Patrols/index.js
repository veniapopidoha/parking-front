import { Image, TableBody, TableData, TableDataS, Title } from "../Cars/style";
import bgImg from "../../images/bg4.png";
import { TableHeader, TableHead } from "../Cars/style";
import { TableRow, Wrap } from "./style";

export const Patrols = ({ building, buildings }) => {
  return (
    <>
      <Wrap>
        <Title>Patrols completed</Title>
        <table>
          <thead>
            <TableHeader>
              <TableHead style={{ padding: "18px 121px" }}>Name</TableHead>
              <TableHead style={{ padding: "20px 53px" }}>Start</TableHead>
              <TableHead style={{ padding: "20px 53px" }}>End</TableHead>
            </TableHeader>
          </thead>
          <TableBody>
            {buildings
              ? buildings.map((building) =>
                  building.visitors.map((car) => (
                    <TableRow key={car.plate}>
                      <TableData>{car.plate}</TableData>
                      <TableDataS>{car.model}</TableDataS>
                      <TableDataS>{car.startDate}</TableDataS>
                      <TableData>{car.endDate}</TableData>
                    </TableRow>
                  ))
                )
              : building.patrols.map((patrol) => {
                  return (
                    <TableRow key={`${patrol.name} ${Math.random() * 9999}`}>
                      <TableDataS style={{ marginRight: "132px" }}>
                        {patrol.name}
                      </TableDataS>
                      <TableData style={{ marginRight: "44px" }}>
                        {patrol.startDate}
                      </TableData>
                      <TableData>{patrol.endDate}</TableData>
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
