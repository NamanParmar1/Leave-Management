import React, { useState, useEffect } from 'react';
import ContentTop from '../ContentTop/ContentTop';
import Sidebar from '../../layout/Sidebar/Sidebar';
import './ApplyLeave.css';
import { useLeaveContext } from '../../context/LeaveContext';
import { useNavigate } from 'react-router-dom';

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
    const newLeave = { ...leaveDetails, id: new Date().getTime().toString() };
    const updatedLeaveData = [...leaveData, newLeave];
    setLeaveData(updatedLeaveData);
    setLeaveDetails({
      startDate: '',
      endDate: '',
      leaveType: '',
      reason: '',
    });

    // Save data to the same JSON file
    const jsonData = JSON.stringify(updatedLeaveData, null, 2);
    localStorage.setItem('leaveData', jsonData);
    console.log('Updated leaveData:', updatedLeaveData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLeaveDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
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
              <option value='sick'>Sick Leave</option>
              <option value='casual'>Casual Leave</option>
              <option value='earned'>Earned Leave</option>
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
    </>
  );
};

export default ApplyLeave;
