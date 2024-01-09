import React from 'react';
import ContentTop from '../components/ContentTop/ContentTop';
import Sidebar from '../layout/Sidebar/Sidebar';

const Alerts = () => {
  return (
    <>
    <Sidebar/>
    <div className='main-content'>
      <ContentTop/>
    </div>
    </>
  );
};

export default Alerts;