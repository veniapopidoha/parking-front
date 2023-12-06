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
} from '../Cars/style';
import bgImg from '../../images/bg4.png';
import { formatDate } from '../../utils/formatDate';

export const Patrols = ({ building }) => {
  return (
    <>
      <Wrap>
        <Title>Patrols completed</Title>
        <table width='100%'>
          <thead>
            <TableHeader>
              <TableHead width='33%'>Name</TableHead>
              <TableHead width='33%'>Start</TableHead>
              <TableHead width='33%'>End</TableHead>
            </TableHeader>
          </thead>
          <TableBody>
            {building.patrols.map((patrol) => {
              return (
                <TableRow key={`${patrol.name} ${Math.random() * 9999}`}>
                  <TableDataS width='33%'>{patrol.name}</TableDataS>
                  <TableData width='33%'>
                    {/* {formatDate(patrol.startTime)} */}
                    {patrol.startTime}
                  </TableData>
                  <TableData width='33%'>
                    {/* {formatDate(patrol.endTime)} */}
                    {patrol.endTime}
                  </TableData>
                </TableRow>
              );
            })}
          </TableBody>
        </table>
      </Wrap>
      <Image src={bgImg} alt='bg' />
    </>
  );
};
