import { useSelector } from 'react-redux';
import { Close } from '../../Components/Close';
import { Resident } from '../Resident';

export const Auth = () => {
  const data = useSelector((state) => state.data);
  const status = data.status;

  return (
    <>
      <Close />
      {status === 'manager' ? (
        <>Manager</>
      ) : status === 'employee' ? (
        <>Employee</>
      ) : status === 'client' ? (
        <Resident />
      ) : (
        <Resident />
      )}
    </>
  );
};
