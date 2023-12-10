import React from 'react';
// import "../layout/Content/Content.css";
import ContentTop from '../components/ContentTop/ContentTop';
import Sidebar from '../layout/Sidebar/Sidebar';


const LeaveHistory = () => {
  return (
    <>
    <Sidebar/>
    <div className='main-content'>
      <ContentTop/>
      {/* Add content specific to the Dashboard page */}
    </div>
    </>
  );
};

export default LeaveHistory;