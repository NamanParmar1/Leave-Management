import React, {useEffect}from 'react';
// import "../layout/Content/Content.css";
import ContentTop from '../components/ContentTop/ContentTop';
import Sidebar from '../layout/Sidebar/Sidebar';

import { toast } from 'react-toastify';
import TrialCalendar from '../components/TrialCalendar/TrialCalendar';


const Calender = () => {
  // useEffect(() => {
  //   toast.success("Calender");
  // }, []);

  return (
    <>
    <Sidebar/>
    <div className='main-content'>
      <ContentTop/>
      <TrialCalendar/>
      
    </div>
    </>
  );
};

export default Calender;