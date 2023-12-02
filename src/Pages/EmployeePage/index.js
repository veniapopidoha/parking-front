import { useState } from 'react';
// import { BuildComboBox } from '../ManagerPage/Components/Manager/Components/BuildComboBox';
import { AddReport } from './Components/AddReport';
import { ReportsPage } from './Components/Reports';
import { AddPatrol } from './Components/AddPatrol';

export const EmployeePage = () => {
  const [isAddBuild, setIsAddBuild] = useState(false);

  return (
    <>
      <AddPatrol/>
      <AddReport />
      {/* <BuildComboBox setIsAddBuild={setIsAddBuild} isAddBuild={isAddBuild} /> */}
      <ReportsPage />
    </>
  );
};
