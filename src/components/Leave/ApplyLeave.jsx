import React, { useState, useEffect } from 'react';
import ContentTop from '../ContentTop/ContentTop';
import Sidebar from '../../layout/Sidebar/Sidebar';
import './ApplyLeave.css';
import { useLeaveContext } from '../../context/LeaveContext';
import { userInfoData } from '../../data/data';
import { toast } from 'react-toastify';
import { getDatabase, ref, push , onValue} from 'firebase/database';
import firebaseApp from '../../Firebase/Firebase';

const ApplyLeave = () => {
  const { leaveData, setLeaveData } = useLeaveContext();
  const [leaveDetails, setLeaveDetails] = useState({
    startDate: '',
    endDate: '',
    leaveType: '',
    reason: '',
  });
  const [leaveDuration, setLeaveDuration] = useState('');

  useEffect(() => {
    const database = getDatabase(firebaseApp);
    const leaveRef = ref(database, 'leave');

    // Listen for changes in the "leave" node
    const unsubscribe = onValue(leaveRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const leaveArray = Object.values(data);
        setLeaveData(leaveArray);
      }
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, [setLeaveData]);

  const calculateLeaveDuration = (start, end) => {
    const diffInMilliseconds = new Date(end) - new Date(start);
    const days = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24)+1);
    return days;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLeaveDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
      Name: userInfoData.name,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const startDate = new Date(leaveDetails.startDate);
    const endDate = new Date(leaveDetails.endDate);
    const currentDate = new Date();
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);
  
    if (startDate > endDate) {
      toast.error('Opps!! End date must be after the start date');
      return;
    }
  
    if (startDate < currentDate) {
      toast.error('Opps!! Start date cannot be in the past');
      return;
    }
  
    // Check for overlapping leave
    const overlappingLeave = leaveData.find((leave) => {
      const leaveStartDate = new Date(leave.startDate);
      const leaveEndDate = new Date(leave.endDate);
      leaveStartDate.setHours(0, 0, 0, 0);
      leaveEndDate.setHours(0, 0, 0, 0);
  
      return (
        leave.Name === userInfoData.name &&
        ((startDate >= leaveStartDate && startDate <= leaveEndDate) ||
          (endDate >= leaveStartDate && endDate <= leaveEndDate) ||
          (startDate <= leaveStartDate && endDate >= leaveEndDate))
      );
    });
  
    if (overlappingLeave) {
      toast.error('You have already applied leave for the range of selected dates');
      return;
    }
  
    // If no overlapping leave, proceed with leave application
    const newLeave = { ...leaveDetails, id: new Date().getTime().toString() };

    // Use Firebase to push data
    const database = getDatabase(firebaseApp);
    const leaveRef = ref(database, 'leave');
    await push(leaveRef, newLeave);

    // Update local state
    const updatedLeaveData = [...leaveData, newLeave];
    setLeaveData(updatedLeaveData);

    // Clear form data after submission
    setLeaveDetails({
      startDate: '',
      endDate: '',
      leaveType: '',
      reason: '',
      Name: userInfoData.name,
    });

    toast.success('Leave application submitted successfully');
  };

  useEffect(() => {
    if (leaveDetails.startDate && leaveDetails.endDate) {
      const duration = calculateLeaveDuration(
        leaveDetails.startDate,
        leaveDetails.endDate
      );
      setLeaveDuration(duration > 0 ? `${duration} days` : '');
    } else {
      setLeaveDuration('');
    }
  }, [leaveDetails.startDate, leaveDetails.endDate]);


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
              Duration:
              <input className='leaveduration' value={leaveDuration} disabled></input>
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
