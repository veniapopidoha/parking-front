import { Image, TableData, TableDataS, Title } from "../Cars/style";
import bgImg from "../../images/bg4.png";
import Bell from "../../images/bell.svg";
import {
  Icon,
  IconWrap,
  TableHeader,
  Wrap,
  TableHead,
  TableRow,
  TableBody,
} from "./style";

export const Residents = ({ building }) => {
  return (
    <>
      <Wrap>
        <Title>Resident list</Title>
        <table>
          <thead>
            <TableHeader>
              <TableHead>Name</TableHead>
              <TableHead>Unit</TableHead>
              <TableHead>Number of visitors</TableHead>
            </TableHeader>
          </thead>
          <TableBody>
            {building.users
              .filter((user) => user.status === "resident")
              .map((resident) => {
                return (
                  <>
                    <TableRow key={resident.email}>
                      <TableDataS>{resident.name}</TableDataS>
                      <TableData>{resident.unit}</TableData>
                      <TableDataS style={{ paddingLeft: "30px" }}>
                        {resident.numberOfVisitors}
                      </TableDataS>
                    </TableRow>
                    <tr style={{ display: "flex", alignItems: "center" }}>
                      <IconWrap>
                        <Icon src={Bell} alt="bell" />
                      </IconWrap>
                    </tr>
                  </>
                );
              })}
          </TableBody>
        </table>
      </Wrap>
      <Image src={bgImg} alt="bg" />
    </>
  );
};
