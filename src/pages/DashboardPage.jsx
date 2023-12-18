
import React, { useState, useEffect } from 'react';
import ContentTop from '../components/ContentTop/ContentTop';
import { toast } from 'react-toastify';
import Card from '../components/Card/Card';
import MemberDetails from '../components/MemberDetails/MemberDetails'; // Adjust the path accordingly
import { members, userInfoData, holidays } from '../data/data';
import './DashboardPage.css';
import Sidebar from '../layout/Sidebar/Sidebar';
import { useOktaAuth } from '@okta/okta-react';
import bellGif from '../assets/images/bellanimation.gif';
import cake from '../assets/images/cakeanimation.gif';


const DashboardPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const { authState, oktaAuth } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (!authState || !authState.isAuthenticated) {
      // When the user isn't authenticated, forget any user info
      setUserInfo(userInfoData);
    } else {
      setUserInfo(authState.idToken.claims);
      // Update userInfoData in data.js
      Object.assign(userInfoData, authState.idToken.claims);
    }
  }, [authState, oktaAuth]);

  useEffect(() => {
    const hasToastShown = localStorage.getItem('hasToastShown');

    if (!hasToastShown) {
      const today = new Date();
      const formattedToday = today.toISOString().split('T')[0].substring(5);
       // Format: 'YYYY-MM-DD'

      const todayHolidays = holidays.filter(
        (holiday) => holiday.date.substring(5) === formattedToday
      );

      const todayBirthdays = members.filter(
        (member) => member.birthday.substring(5) === formattedToday
      );

      if (todayHolidays.length > 0 || todayBirthdays.length > 0) {
        let hasHolidayToastShown = false;
        let hasBirthdayToastShown = false;

        if (todayHolidays.length > 0 && !hasHolidayToastShown) {
          toast(
            <div className="toast-content">
              <div className='toast-icon'>
                <img src={bellGif} alt="Notification Bell" className="icon" />
              </div>
              <div>
                {!hasBirthdayToastShown && (
                  <p className='toast-username'>Welcome, {userInfoData?.name}!</p>
                )}
                {/* <p>Holidays:</p> */}
                <ul>
                  {todayHolidays.map((holiday, index) => (
                    <li key={index}>{`Merry ${holiday.holidayDescription}`}</li>
                  ))}
                </ul>
              </div>
            </div>,
            {
              position: toast.POSITION.TOP_CENTER,
              className: 'toast-message',
              autoClose: 10000,
              closeButton: true,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
            }
          );
          hasHolidayToastShown = true;
        }

        if (todayBirthdays.length > 0 && !hasBirthdayToastShown) {
          toast(
            <div className="toast-content">
              <div className='toast-icon'>
                <img src={cake} alt="Birthday Cake" className="icon" />
              </div>
              <div>
                {!hasHolidayToastShown && (
                  <p className='toast-username'>Welcome, {userInfoData?.name}!</p>
                )}
                {/* <p>Birthdays:</p> */}
                <ul>
                  {todayBirthdays.map((birthday, index) => (
                    <li key={index}>{`Happy Birthday, ${(birthday.title.split(',')[1] || '').trim().split(' ')[0] || ''}!`}</li>
                  ))}
                </ul>
              </div>
            </div>,
            {
              position: toast.POSITION.TOP_CENTER,
              className: 'toast-message',
              autoClose: 10000,
              closeButton: true,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
            }
          );
          hasBirthdayToastShown = true;
        }

        localStorage.setItem('hasToastShown', 'true');
      }
    }
  }, [userInfoData]);




  const handleCardClick = (member) => {
    setSelectedMember(member);
  };

  const handleCloseDetails = () => {
    setSelectedMember(null);
  };

  return (
    <>
      <Sidebar />
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
