import React, { useState, useEffect } from 'react';
import ContentTop from '../ContentTop/ContentTop';
import Sidebar from '../../layout/Sidebar/Sidebar';
import './ApplyLeave.css';
import { useLeaveContext } from '../../context/LeaveContext';
import { useNavigate } from 'react-router-dom';
import { userInfoData } from '../../data/data';
import { toast } from 'react-toastify';

const ApplyLeave = () => {
  const { leaveData, setLeaveData } = useLeaveContext(); // Destructure setLeaveData from context
  const navigate = useNavigate();
  const [leaveDetails, setLeaveDetails] = useState({
    startDate: '',
    endDate: '',
    leaveType: '',
    reason: '',
  });

  
const handleSubmit = (e) => {
  e.preventDefault();

  const startDate = new Date(leaveDetails.startDate);
  const endDate = new Date(leaveDetails.endDate);

  if (startDate >= endDate) {
    toast.error('Opps!! End date must be after the start date');
    return;
  }

  const currentDate = new Date();
  if (startDate < currentDate) {
    toast.error('Opps!! Start date cannot be in the past');
    return;
  }

  const newLeave = { ...leaveDetails, id: new Date().getTime().toString() };
  const updatedLeaveData = [...leaveData, newLeave];
  setLeaveData(updatedLeaveData);
  setLeaveDetails({
    startDate: '',
    endDate: '',
    leaveType: '',
    reason: '',
    Name: userInfoData.name,
  });

  const jsonData = JSON.stringify(updatedLeaveData, null, 2);
  localStorage.setItem('leaveData', jsonData);

  toast.success('Leave application submitted successfully');
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLeaveDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
      Name: userInfoData.name, 
    }));
  };
  

  useEffect(() => {
    const storedLeaveData = JSON.parse(localStorage.getItem('leaveData')) || [];
    setLeaveData(storedLeaveData);
  }, [setLeaveData]);

  return (
    <>
      <Sidebar />
      <div className='main-content'>
        <ContentTop />
        <div className='otherleave-content'>
        <form className='' onSubmit={handleSubmit}>
          <label>
            Start Date:
            <input
              type='date'
              name='startDate'
              value={leaveDetails.startDate}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            End Date:
            <input
              type='date'
              name='endDate'
              value={leaveDetails.endDate}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Leave Type:
            <select
              name='leaveType'
              value={leaveDetails.leaveType}
              onChange={handleChange}
              required
            >
              <option value=''>Select Leave Type</option>
              <option value='Sick'>Sick Leave</option>
              <option value='Casual'>Casual Leave</option>
              <option value='Earned'>Earned Leave</option>
            </select>
          </label>
          <br />
          <label>
            Reason:
            <textarea
              name='reason'
              value={leaveDetails.reason}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <button className='btn' type='submit'>
            Submit Leave Application
          </button>
        </form>
        </div>   
      </div>
    </>
  );
};

export default ApplyLeave;
