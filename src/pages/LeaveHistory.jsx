import React from 'react';
import ContentTop from '../components/ContentTop/ContentTop';
import Sidebar from '../layout/Sidebar/Sidebar';
import History from '../components/History/History';

const LeaveHistory = () => {
  return (
    <>
    <Sidebar/>
    <div className='main-content'>
      <ContentTop/>
      <History/>
    </div>
    </>
  );
};

export default LeaveHistory;