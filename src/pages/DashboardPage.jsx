
import React, { useState, useEffect } from 'react';
import ContentTop from '../components/ContentTop/ContentTop';
import { toast } from 'react-toastify';
import Card from '../components/Card/Card';
import MemberDetails from '../components/MemberDetails/MemberDetails'; // Adjust the path accordingly
import { members } from '../data/data';
import './DashboardPage.css';
import Sidebar from '../layout/Sidebar/Sidebar';
import { userInfoData } from '../data/data';

const DashboardPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    const hasToastShown = localStorage.getItem('hasToastShown');

    if (!hasToastShown) {
      toast.success(`Welcome, ${userInfoData?.name}!`);
      localStorage.setItem('hasToastShown', 'true');
    }
  }, []);

  const handleCardClick = (member) => {
    setSelectedMember(member);
  };

  const handleCloseDetails = () => {
    setSelectedMember(null);
  };

  return (
    <>
    <Sidebar/>
    <div className='main-content'>
      <ContentTop />
      <div className='card-container'>
        {members.map((member) => (
          <div
            className='card-wrapper'
            key={member.id}
            onClick={() => handleCardClick(member)}
          >
            <Card member={member} />
          </div>
        ))}
      </div>
      

      {/* {selectedMember && (
        <MemberDetails member={selectedMember} onClose={handleCloseDetails} />
      )} */}
    </div>
    </>
  );
};

export default DashboardPage;
