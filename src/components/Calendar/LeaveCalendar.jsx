// import React, { useEffect } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import Sidebar from '../../layout/Sidebar/Sidebar';
// import { toast } from 'react-toastify';
// import ContentTop from '../ContentTop/ContentTop';
// import { useLeaveContext } from '../../context/LeaveContext';

// const LeaveCalendar = () => {
//   const { leaveData } = useLeaveContext();

//   useEffect(() => {
//     toast.success('Leave Calendar');
//   }, []);

//   const getHighlightedDates = () => {
//     return Array.isArray(leaveData) ? leaveData.map((leave) => new Date(leave.startDate)) : [];
//   };

//   return (
//     <>
//       <Sidebar />
//       <div className='main-content'>
//         <ContentTop />
//         <Calendar
//           tileContent={({ date, view }) =>
//             view === 'month' &&
//             getHighlightedDates().some((d) => d.toDateString() === date.toDateString()) ? (
//               <div style={{ backgroundColor: 'red', borderRadius: '50%', height: '10px', width: '10px' }}></div>
//             ) : null
//           }
//         />
//         <ul>
//           {Array.isArray(leaveData) &&
//             leaveData.map((leave) => (
//               <li key={leave.id}>
//                 {leave.leaveType} Leave: {leave.startDate} to {leave.endDate}
//               </li>
//             ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default LeaveCalendar;


import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Sidebar from '../../layout/Sidebar/Sidebar';
import { toast } from 'react-toastify';
import ContentTop from '../ContentTop/ContentTop';
import { useLeaveContext } from '../../context/LeaveContext';
import './HighlightedLeaves.css';

const LeaveCalendar = () => {
  const { leaveData } = useLeaveContext();
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    toast.success('Leave Calendar');
  }, []);

  const getHighlightedDates = () => {
    return Array.isArray(leaveData) ? leaveData.map((leave) => new Date(leave.startDate)) : [];
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const getLeaveDetailsForDate = () => {
    if (!selectedDate) {
      return null;
    }

    const selectedDateString = selectedDate.toDateString();
    const leaveDetailsForDate = leaveData.filter(
      (leave) => new Date(leave.startDate).toDateString() === selectedDateString
    );

    return (
      <ul>
        {leaveDetailsForDate.map((leave) => (
          <li key={leave.id}>
            {leave.leaveType} Leave: {leave.startDate} to {leave.endDate}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <Sidebar />
      <div className='main-content'>
        <ContentTop />
        <div className="calendar-container">
          <Calendar
            tileContent={({ date, view }) =>
              view === 'month' &&
              getHighlightedDates().some((d) => d.toDateString() === date.toDateString()) ? (
                <div style={{ backgroundColor: 'red', borderRadius: '50%', height: '10px', width: '10px' }}></div>
              ) : null
            }
            onClickDay={handleDateClick}
          />
          <div className="leave-details">
            <h3>Leave Details</h3>
            {getLeaveDetailsForDate()}
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaveCalendar;
