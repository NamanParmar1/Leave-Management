import React, {useEffect}from 'react';
// import "../layout/Content/Content.css";
import ContentTop from '../components/ContentTop/ContentTop';
import Sidebar from '../layout/Sidebar/Sidebar';

import { toast } from 'react-toastify';
import TrialBdayCalendar from '../components/TrialCalendar/TrialBdayCalendar';


const Calender = () => {
  // useEffect(() => {
  //   toast.success("Calender");
  // }, []);

  return (
    <>
    <Sidebar/>
    <div className='main-content'>
      <ContentTop/>
      <TrialBdayCalendar/>
      
    </div>
    </>
  );
};

export default Calender;