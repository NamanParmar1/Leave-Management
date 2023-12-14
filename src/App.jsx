// App.jsx
import React, { useState } from 'react';
import { useParams, BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Sidebar from './layout/Sidebar/Sidebar';
import DashboardPage from './pages/DashboardPage';
import MembersPage from './pages/MemberPage';
import CalenderPage from './pages/CalenderPage';
// import ApplyLeave from './pages/ApplyLeave';
import LeaveHistory from './pages/LeaveHistory';
import Alerts from './pages/Alerts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginCallback, Security, useOktaAuth } from '@okta/okta-react';
import oktaAuth from './components/OktaConfig/oktaAuth';
import PrivateRoute from './components/PrivateRoute/privateroute';
import LoginPage from './components/Login/LoginPage';
// import LeaveApplication from './components/Leave/LeaveApplication';
import ApplyLeave from './components/Leave/ApplyLeave';
import LeaveCalendar from './components/Calendar/LeaveCalendar';
import leaveData from './data/LeaveData';
import { userInfoData } from './data/data';
import { useLeaveContext } from './context/LeaveContext';
import { useEffect } from 'react';
import BirthdayCalendar from './components/Calendar/BirthdayCalendar/BithdayCalendar';

function App() {
  console.log(userInfoData.name);
  const navigate = useNavigate();
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    navigate(originalUri || '/home', { replace: true });
  };
  const { setLeaveData } = useLeaveContext();

  

  useEffect(() => {
    const storedLeaveData = JSON.parse(localStorage.getItem('leaveData')) || [];
    setLeaveData(storedLeaveData);
  }, [setLeaveData]);

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>

      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login/callback" element={<LoginCallback />} />
        </Routes>
      </div>
      
      <div className="app">
        <Routes>
          <Route path="/home" element={<PrivateRoute element={DashboardPage} />} />
          {/* <Route path="/page/2" element={<MembersPage/>} /> */}
          <Route path="/calendar/leave" element={<PrivateRoute element={LeaveCalendar} />} />
          <Route path="/calendar/holiday" element={<PrivateRoute element={CalenderPage} />} />
          <Route path="/calendar/birthday" element={<PrivateRoute element={BirthdayCalendar} />} />
          <Route path="/applyleave" element={<PrivateRoute element={ApplyLeave} />} />
          <Route path="/leavehistory" element={<PrivateRoute element={LeaveHistory} />} />
          <Route path="/notifications" element={<PrivateRoute element={Alerts} />} />
          {/* <Route path="/page/7" element={<Alerts/>} />
          <Route path="/page/8" element={<Alerts/>} /> */}
        </Routes>
        <ToastContainer />
      </div>
    </Security >

  );
}


export default App;
