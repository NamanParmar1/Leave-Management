// App.jsx
import React from 'react';
import { useParams, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './layout/Sidebar/Sidebar';
import DashboardPage from './pages/DashboardPage';
import MembersPage from './pages/MemberPage';
// import Content from './layout/Content/Content'
import Calender from './pages/Calender';
import ApplyLeave from './pages/ApplyLeave';
import LeaveHistory from './pages/LeaveHistory';
import Alerts from './pages/Alerts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Routes>
          <Route path="" element={<DashboardPage/>} />
          <Route path="/page/1" element={<DashboardPage/>} />
          {/* <Route path="/page/2" element={<MembersPage/>} /> */}
          <Route path="/page/3" element={<Calender/>} />
          {/* <Route path="/page/4" element={<ApplyLeave/>} /> */}
          <Route path="/page/5" element={<LeaveHistory/>} />
          {/* <Route path="/page/6" element={<Alerts/>} /> */}
          {/* <Route path="/page/7" element={<Alerts/>} />
          <Route path="/page/8" element={<Alerts/>} /> */}
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}


export default App;
