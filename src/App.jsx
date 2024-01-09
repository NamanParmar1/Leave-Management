import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import CalenderPage from './pages/CalenderPage';
import LeaveHistory from './pages/LeaveHistory';
import Alerts from './pages/Alerts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { LoginCallback, Security, useOktaAuth } from '@okta/okta-react';
import oktaAuth from './components/OktaConfig/oktaAuth';
import PrivateRoute from './components/PrivateRoute/privateroute';
import LoginPage from './components/Login/LoginPage';
import ApplyLeave from './components/Leave/ApplyLeave';
import LeaveCalendar from './components/Calendar/LeaveCalendar/LeaveCalendar';
import { userInfoData } from './data/data';
import { useLeaveContext } from './context/LeaveContext';
import { useEffect } from 'react';
import BdayCalendarPage from './pages/BdayCalendarPage'

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


      <div className="app">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login/callback" element={<LoginCallback />} />
          <Route path="/home" element={<PrivateRoute element={DashboardPage} />} />
          <Route path="/calendar/leave" element={<PrivateRoute element={LeaveCalendar} />} />
          <Route path="/calendar/holiday" element={<PrivateRoute element={CalenderPage} />} />
          <Route path="/calendar/birthday" element={<PrivateRoute element={BdayCalendarPage} />} />
          <Route path="/applyleave" element={<PrivateRoute element={ApplyLeave} />} />
          <Route path="/leavehistory" element={<PrivateRoute element={LeaveHistory} />} />
          <Route path="/notifications" element={<PrivateRoute element={Alerts} />} />

        </Routes>
        <ToastContainer />
      </div>
    </Security >

  );
}


export default App;
