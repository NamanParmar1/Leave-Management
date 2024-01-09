import React, {useEffect}from 'react';
import ContentTop from '../components/ContentTop/ContentTop';
import Sidebar from '../layout/Sidebar/Sidebar';

import { toast } from 'react-toastify';


const Calender = () => {
  useEffect(() => {
    toast.success("Calender");
  }, []);

  return (
    <>
    <Sidebar/>
    <div className='main-content'>
      <ContentTop/>
    </div>
    </>
  );
};

export default Calender;