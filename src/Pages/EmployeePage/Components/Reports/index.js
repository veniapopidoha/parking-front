import axios from 'axios';
import { backLink } from '../../../../App';
import { useEffect, useState } from 'react';
import { Table } from './style';

export const ReportsPage = () => {
  const building = 'Building';
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  const getReports = async () => {
    setLoading(true);
    await axios.get(`${backLink}/reports/${building}`).then((response) => {
      setReports(response.data);
    });
    setLoading(false);
  };

  useEffect(() => {
    getReports();
  }, []);

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th width="10%">Plate</th>
            <th width="25px">Reason</th>
            <th width="45%">Notes</th>
            <th width="20%">Attachment</th>
          </tr>
        </thead>
        {!loading ? (
          <tbody>
            {Array.from(reports).map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.plate}</td>
                  <td>{item.reason}</td>
                  <td>{item.notes}</td>
                  <td>
                    {Array.from(item.imageUrls).map((link, index) => {
                      return (
                        <a key={index} href={link} target='_blank'>
                          photo {index + 1} &nbsp;
                        </a>
                      );
                    })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td>Loading...</td>
            </tr>
          </tbody>
        )}
      </Table>
    </>
  );
};
