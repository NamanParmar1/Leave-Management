
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
import firebaseApp from '../Firebase/Firebase';
import { getDatabase, ref, onValue } from 'firebase/database';
import { useLeaveContext } from '../context/LeaveContext';
import leaveIcon from '../assets/images/leaveanimation.gif'

const DashboardPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const { authState, oktaAuth } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);
  const { leaveData, setLeaveData } = useLeaveContext();



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
    const database = getDatabase(firebaseApp);
    const leaveRef = ref(database, 'leave');

    // Listen for changes in the "leave" node
    const unsubscribe = onValue(leaveRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const leaveArray = Object.values(data);
        setLeaveData(leaveArray);
        //handleLeaveToast(leaveArray);
      }
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, [setLeaveData]);

  const handleLeaveToast = (leaveArray) => {
    const isAdmin = userInfoData?.email?.endsWith('@cigna.com');
    const hasLeaveToastShown = localStorage.getItem('hasLeaveToastShown');

    // console.log("isAdmin: ", {isAdmin});
    // console.log("leaveArray: ",leaveArray);

    if (!hasLeaveToastShown && isAdmin) {
      const today = new Date();
      const todayDate = today.toISOString().split('T')[0];

      const twoDaysFromNow = new Date(today);
      twoDaysFromNow.setDate(twoDaysFromNow.getDate() + 2);
      const formattedTwoDaysFromNow = twoDaysFromNow.toISOString().split('T')[0];

      const tommorrow = new Date(today);
      tommorrow.setDate(tommorrow.getDate() + 1);
      const formattedTommorrow = tommorrow.toISOString().split('T')[0];


      const upcomingLeaves = leaveArray.filter((leave) => {
        const startDate = leave.startDate;
        // const formattedStartDate = startDate.toISOString().split('T')[0];
        const endDate = leave.endDate;
        // const formattedEndDate = endDate.toISOString().split('T')[0];

        return (
          startDate === formattedTwoDaysFromNow || startDate === formattedTommorrow ||
          (todayDate >= startDate && todayDate <= endDate)
        );
      });
      // console.log("today: ", todayDate);
      // console.log("formattedTwoDaysFromNow: ", formattedTwoDaysFromNow);
      // console.log("formattedTommorrow: ", formattedTommorrow);

      // console.log("upcomming leaves: ",upcomingLeaves);

      if (upcomingLeaves.length > 0) {
        upcomingLeaves.forEach((leave) => {
          const startDate = new Date(leave.startDate);
          const endDate = new Date(leave.endDate);
          const leaveStartDateFormatted = startDate.toISOString().split('T')[0];
          const leaveEndDateFormatted = endDate.toISOString().split('T')[0];

          if (today < startDate) {
            // Show toast 2 days prior to leave start
            toast(
              <div className="toast-content">
                <div className='toast-icon'>
                  {/* Use a suitable leave-related icon here */}
                  <img src={leaveIcon} alt="Leave Icon" className="icon" />
                </div>
                <div>
                  <p className='toast-username'>{`${leave.Name} will be on leave!   From: ${leaveStartDateFormatted} To: ${leaveEndDateFormatted}  due to ${leave.reason}`}</p>
                  {/* <p>{`From: ${leaveStartDateFormatted} To: ${leaveEndDateFormatted}`}</p> */}
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
          } else {
            // Show toast during leave period
            toast(
              <div className="toast-content">
                <div className='toast-icon'>
                  {/* Use a suitable leave-related icon here */}
                  <img src={leaveIcon} alt="Leave Icon" className="icon" />
                </div>
                <div>
                  <p className='toast-username'>{leave.Name} is on leave!</p>
                  <p>{`From: ${leaveStartDateFormatted} To: ${leaveEndDateFormatted}`}</p>
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
          }
        });
      }
    }
    localStorage.setItem('hasLeaveToastShown', 'true');


  }

  // console.log(leaveData);

  useEffect(() => {
    const hasToastShown = localStorage.getItem('hasToastShown');

    if (!hasToastShown) {
      const today = new Date();
      const todayDate = today.toISOString().split('T')[0];
      const formattedToday = todayDate.substring(5);

      const todayHolidays = holidays.filter(
        (holiday) => holiday.date.substring(5) === formattedToday
      );

      const todayBirthdays = members.filter(
        (member) => member.birthday.substring(5) === formattedToday
      );
      let hasHolidayToastShown = false;
      let hasBirthdayToastShown = false;

      if (todayHolidays.length > 0 || todayBirthdays.length > 0) {
        // let hasHolidayToastShown = false;
        // let hasBirthdayToastShown = false;
        // let hasLeaveToastShown = false;

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
      }
      if (!hasBirthdayToastShown && !hasHolidayToastShown) {
        toast(
          <div className="toast-content">
            <div className='toast-icon'>
              <img src={bellGif} alt="Bell" className="icon" />
            </div>
            <div>
              <p className='toast-username'>Welcome, {userInfoData?.name}</p>
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
      }

      localStorage.setItem('hasToastShown', 'true');
    }
  }, [userInfoData, leaveData]);





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
