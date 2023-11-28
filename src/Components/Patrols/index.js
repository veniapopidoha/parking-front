import { Image, TableBody, TableData, TableDataS, Title } from "../Cars/style";
import bgImg from "../../images/bg4.png";
import { TableHeader, TableHead } from "../Cars/style";
import { TableRow, Wrap } from "./style";

export const Patrols = () => {
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
            <TableRow>
              <TableDataS style={{ marginRight: "132px" }}>
                Andrii Smaluniuk
              </TableDataS>
              <TableData style={{ marginRight: "44px" }}>
                12.10.2023 11:30
              </TableData>
              <TableData>12.10.2023 11:30</TableData>
            </TableRow>
          </TableBody>
        </table>
      </Wrap>
      <Image src={bgImg} alt="bg" />
    </>
  );
};
