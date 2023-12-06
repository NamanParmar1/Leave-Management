import React, { useEffect } from 'react';
//  import "../layout/Content/Content.css";
import ContentTop from '../components/ContentTop/ContentTop';
import { toast } from 'react-toastify';
import Card from '../components/Card/Card';
import { members } from '../data/data';

import './DashboardPage.css';


const DashboardPage = () => {
  useEffect(() => {
    toast.success("Welcome");
  }, []);
  return (
    <div className='main-content'>
      <ContentTop />
      <div className='card-container'>
        {members.map((member) => (
          <div className='card-wrapper' key={member.id}>
            <Card member={member} />
          </div>

        ))}
      </div>


      {/* Add content specific to the Dashboard page */}
    </div>
  )
}

export default DashboardPage