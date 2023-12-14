// // // // import React, { useState, useEffect } from 'react';
// // // // import FullCalendar from '@fullcalendar/react';
// // // // import dayGridPlugin from '@fullcalendar/daygrid';
// // // // import timeGridPlugin from '@fullcalendar/timegrid';
// // // // import Sidebar from '../../layout/Sidebar/Sidebar';
// // // // import { toast } from 'react-toastify';
// // // // import ContentTop from '../ContentTop/ContentTop';
// // // // import './HighlightedLeaves.css';
// // // // import { useLeaveContext } from '../../context/LeaveContext';

// // // // const LeaveCalendar = () => {
// // // //   const { leaveData: contextLeaveData, setLeaveData } = useLeaveContext();
// // // //   const [leaveData, setLocalLeaveData] = useState(contextLeaveData || []);
// // // //   const [selectedDate, setSelectedDate] = useState(null);

// // // //   useEffect(() => {
// // // //     //toast.success('Leave Calendar');
// // // //     // If leaveData is empty, fetch it from localStorage
// // // //     if (!leaveData || leaveData.length === 0) {
// // // //       const storedLeaveData = JSON.parse(localStorage.getItem('leaveData')) || [];
// // // //       setLeaveData(storedLeaveData);
// // // //     }
// // // //   }, [leaveData, setLeaveData]);

// // // //   const getHighlightedDates = () => {
// // // //     return Array.isArray(leaveData)
// // // //       ? leaveData.map((leave, index) => ({
// // // //         title: `${leave.Name}'s Leave`,
// // // //         start: new Date(leave.startDate),
// // // //         end: new Date(leave.endDate),
// // // //         description: (leave.reason),
// // // //         color: getRandomColor(index),
// // // //       }))
// // // //       : [];
// // // //   };

// // // //   const getRandomColor = (index) => {
// // // //     const colors = ['red', 'green', 'blue', 'purple', 'orange' ,'violet'];
// // // //     return colors[index % colors.length];
// // // //   };

// // // //   const handleDateClick = (info) => {
// // // //     setSelectedDate(info.date);
// // // //   };

// // // //   const eventContent = ({ event }) => (
// // // //     <>
// // // //       <p>{event.title}{event.description}</p>
// // // //       <p>{event.description}</p>
// // // //     </>
// // // //   );

// // // //   return (
// // // //     <>
// // // //       <Sidebar />
// // // //       <div className='main-content'>
// // // //         <ContentTop />
// // // //         <div className='main-leave'>
// // // //           <FullCalendar
// // // //             plugins={[dayGridPlugin, timeGridPlugin]}
// // // //             initialView="dayGridMonth"
// // // //             header={{
// // // //               left: "prev,next",
// // // //               center: "title",
// // // //               right: "dayGridMonth,timeGridWeek,timeGridDay"
// // // //             }}
// // // //             themeSystem="Simplex"
// // // //             events={getHighlightedDates()}
// // // //             dateClick={handleDateClick}
// // // //             eventContent={eventContent}
// // // //             height="600px"
// // // //           />
// // // //         </div>
// // // //       </div>
// // // //     </>
// // // //   );
// // // // };

// // // // export default LeaveCalendar;

// // // import React, { useState, useEffect } from 'react';
// // // import Calendar from 'react-calendar';
// // // import 'react-calendar/dist/Calendar.css';
// // // import Sidebar from '../../layout/Sidebar/Sidebar';
// // // import { toast } from 'react-toastify';
// // // import ContentTop from '../ContentTop/ContentTop';
// // // import Modal from 'react-modal'; // Import the modal library
// // // import { useLeaveContext } from '../../context/LeaveContext';
// // // import './HighlightedLeaves.css';

// // // Modal.setAppElement('#root'); // Set the root element for accessibility

// // // const LeaveCalendar = () => {
// // //   const { leaveData } = useLeaveContext();
// // //   const [selectedDate, setSelectedDate] = useState(null);

// // //   const getHighlightedDates = () => {
// // //     const highlightedDates = [];

// // //     if (Array.isArray(leaveData)) {
// // //       leaveData.forEach((leave) => {
// // //         const startDate = new Date(leave.startDate);
// // //         const endDate = new Date(leave.endDate);

// // //         let currentDate = new Date(startDate);
// // //         while (currentDate <= endDate) {
// // //           highlightedDates.push(new Date(currentDate));
// // //           currentDate.setDate(currentDate.getDate() + 1);
// // //         }
// // //       });
// // //     }

// // //     return highlightedDates;
// // //   };

// // //   const getLeaveDetailsForDate = () => {
// // //     if (!selectedDate) {
// // //       return null;
// // //     }

// // //     const selectedDateWithoutTime = new Date(
// // //       selectedDate.getFullYear(),
// // //       selectedDate.getMonth(),
// // //       selectedDate.getDate()
// // //     );

// // //     const leaveDetailsForDate = leaveData.filter(
// // //       (leave) =>
// // //         new Date(leave.startDate).setHours(0, 0, 0, 0) <= selectedDateWithoutTime &&
// // //         new Date(leave.endDate).setHours(0, 0, 0, 0) >= selectedDateWithoutTime
// // //     );

// // //     if (leaveDetailsForDate.length === 0) {
// // //       return <p>No leave details available for the selected date.</p>;
// // //     }

// // //     return (
// // //       <div className="modal-content">
// // //         <h3>Leave Details</h3>
// // //         {leaveDetailsForDate.map((leave) => (
// // //           <div key={leave.id} className="leave-box">
// // //             <p className="employee-name">{leave.Name} </p>
// // //             <p>{leave.leaveType} Leave </p>
// // //             <p>Start Date: {leave.startDate} </p>
// // //             <p>End Date: {leave.endDate}</p>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     );
// // //   };

// // //   return (
// // //     <>
// // //       <Sidebar />
// // //       <div className='main-content'>
// // //         <ContentTop />
// // //         <div className="cal-main">
// // //           <Calendar
// // //             tileContent={({ date }) =>
// // //               getHighlightedDates().some((d) => d.toDateString() === date.toDateString()) ? (
// // //                 <div style={{ backgroundColor: 'red', borderRadius: '50%', height: '10px', width: '10px' }}></div>
// // //               ) : null
// // //             }
// // //             onClickDay={(date) => setSelectedDate(date)}
// // //           />

// // //           <Modal
// // //             isOpen={selectedDate !== null}
// // //             onRequestClose={() => setSelectedDate(null)}
// // //             style={{
// // //               overlay: {
// // //                 backgroundColor: 'rgba(0, 0, 0, 0.5)',
// // //               },
// // //               content: {
// // //                 top: '50%',
// // //                 left: '50%',
// // //                 right: 'auto',
// // //                 bottom: 'auto',
// // //                 marginRight: '-50%',
// // //                 transform: 'translate(-50%, -50%)',
// // //                 maxHeight: '80vh', // Set the maximum height to make it scrollable
// // //                 overflow: 'auto', // Enable scrolling
// // //               },
// // //             }}
// // //           >
// // //             {getLeaveDetailsForDate()}
// // //           </Modal>
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default LeaveCalendar;
// // import React, { useState, useEffect } from 'react';
// // import Calendar from 'react-calendar';
// // import 'react-calendar/dist/Calendar.css';
// // import Sidebar from '../../layout/Sidebar/Sidebar';
// // import Modal from 'react-modal'; // Import the modal library
// // import './HighlightedLeaves.css';
// // import { useLeaveContext } from '../../context/LeaveContext';
// // import ContentTop from '../ContentTop/ContentTop';

// // Modal.setAppElement('#root'); // Set the root element for accessibility

// // const LeaveCalendar = () => {
// //   const { leaveData } = useLeaveContext();
// //   const [selectedDate, setSelectedDate] = useState(null);

// //   const getHighlightedDates = () => {
// //     const highlightedDates = [];

// //     if (Array.isArray(leaveData)) {
// //       leaveData.forEach((leave) => {
// //         const startDate = new Date(leave.startDate);
// //         const endDate = new Date(leave.endDate);

// //         let currentDate = new Date(startDate);
// //         while (currentDate <= endDate) {
// //           highlightedDates.push({
// //             date: new Date(currentDate),
// //             employeeName: leave.Name,
// //           });
// //           currentDate.setDate(currentDate.getDate() + 1);
// //         }
// //       });
// //     }

// //     return highlightedDates;
// //   };

// //   const getLeaveDetailsForDate = () => {
// //     if (!selectedDate) {
// //       return null;
// //     }

// //     const selectedDateWithoutTime = new Date(
// //       selectedDate.getFullYear(),
// //       selectedDate.getMonth(),
// //       selectedDate.getDate()
// //     );

// //     const leaveDetailsForDate = leaveData.filter(
// //       (leave) =>
// //         new Date(leave.startDate).setHours(0, 0, 0, 0) <= selectedDateWithoutTime &&
// //         new Date(leave.endDate).setHours(0, 0, 0, 0) >= selectedDateWithoutTime
// //     );

// //     if (leaveDetailsForDate.length === 0) {
// //       return <p>No leave details available for the selected date.</p>;
// //     }

// //     return (
// //       <div className="modal-content">
// //         <h3>Leave Details</h3>
// //         {leaveDetailsForDate.map((leave) => (
// //           <div key={leave.id} className="leave-box">
// //             <p className="employee-name" style={{ color: getEmployeeColor(leave.Name) }}>
// //               {leave.Name}{' '}
// //             </p>
// //             <p>{leave.leaveType} Leave </p>
// //             <p>Start Date: {leave.startDate} </p>
// //             <p>End Date: {leave.endDate}</p>
// //           </div>
// //         ))}
// //       </div>
// //     );
// //   };

// //   const getEmployeeColor = (employeeName) => {

// //     const colorMap = {
// //       'Sunny Chakraborty': 'blue',
// //       'Naman Parmar': 'red',

// //     };

// //     return colorMap[employeeName] || 'black'; // Default color is black
// //   };

// //   return (
// //     <>
// //       <Sidebar />
// //       <div className='main-content'>
// //         <ContentTop/>
// //         <div className="cal-main">
// //           <Calendar
// //             tileContent={({ date }) => {
// //               const highlightedDates = getHighlightedDates();
// //               const dots = highlightedDates
// //                 .filter((highlightedDate) => highlightedDate.date.toDateString() === date.toDateString())
// //                 .map((highlightedDate, index) => (
// //                   <div
// //                     key={index}
// //                     style={{
// //                       backgroundColor: getEmployeeColor(highlightedDate.employeeName),
// //                       borderRadius: '50%',
// //                       height: '5px',
// //                       width: '5px',
// //                       margin: '2px',
// //                     }}
// //                   ></div>
// //                 ));

// //               return dots.length > 0 ? dots : null;
// //             }}
// //             onClickDay={(date) => setSelectedDate(date)}
// //           />

// //           <Modal
// //             isOpen={selectedDate !== null}
// //             onRequestClose={() => setSelectedDate(null)}
// //             style={{
// //               overlay: {
// //                 backgroundColor: 'rgba(0, 0, 0, 0.5)',
// //               },
// //               content: {
// //                 top: '50%',
// //                 left: '50%',
// //                 right: 'auto',
// //                 bottom: 'auto',
// //                 marginRight: '-50%',
// //                 transform: 'translate(-50%, -50%)',
// //                 maxHeight: '80vh', // Set the maximum height to make it scrollable
// //                 overflow: 'auto', // Enable scrolling
// //               },
// //             }}
// //           >
// //             {getLeaveDetailsForDate()}
// //           </Modal>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Sidebar from '../../../layout/Sidebar/Sidebar';
import Modal from 'react-modal';
import './HighlightedLeaves.css';
import { useLeaveContext } from '../../../context/LeaveContext';
import ContentTop from '../../ContentTop/ContentTop';
import { employeeDetails } from '../../../data/data';

Modal.setAppElement('#root'); 

const LeaveCalendar = () => {
  const { leaveData } = useLeaveContext();
  const [selectedDate, setSelectedDate] = useState(null);

  const employeeDetailsMap = new Map(employeeDetails.map(({ name, color }) => [name, color]));

  const getHighlightedDates = () => {
    const highlightedDates = [];

    if (Array.isArray(leaveData)) {
      leaveData.forEach((leave) => {
        const startDate = new Date(leave.startDate);
        const endDate = new Date(leave.endDate);

        let currentDate = new Date(startDate);
        while (currentDate <= endDate) {
          highlightedDates.push({
            date: new Date(currentDate),
            employeeName: leave.Name,
          });
          currentDate.setDate(currentDate.getDate() + 1);
        }
      });
    }

    return highlightedDates;
  };


  const getLeaveDetailsForDate = () => {
    if (!selectedDate) {
      return null;
    }

    const selectedDateWithoutTime = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate()
    );

    const leaveDetailsForDate = leaveData.filter(
      (leave) =>
        new Date(leave.startDate).setHours(0, 0, 0, 0) <= selectedDateWithoutTime &&
        new Date(leave.endDate).setHours(0, 0, 0, 0) >= selectedDateWithoutTime
    );

    if (leaveDetailsForDate.length === 0) {
      return <p>No leave details available for the selected date.</p>;
    }

    return (
      <div className="modal-content">
        <h3 style={{marginBottom:'10px'}}>Leave Details</h3>
        {leaveDetailsForDate.map((leave) => (
          <div key={leave.id} className="leave-box">
            <p className="employee-name" style={{ color: employeeDetailsMap.get(leave.Name) }}>
              {leave.Name}{' '}
            </p>
            <p>{leave.leaveType} Leave </p>
            <p>Start Date: {leave.startDate} </p>
            <p>End Date: {leave.endDate}</p>
          </div>
        ))}
      </div>
    );
  };

  const getEmployeeColor = (employeeName) => {
    return employeeDetailsMap.get(employeeName) || 'black';
  };

  return (
    <>
      <Sidebar />
      <div className="main-content">
        <ContentTop />
        <div className='main-cal'>
       
          <Calendar
            tileContent={({ date }) => {
              const highlightedDates = getHighlightedDates();
              const dots = highlightedDates
                .filter((highlightedDate) => highlightedDate.date.toDateString() === date.toDateString())
                .map((highlightedDate, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: getEmployeeColor(highlightedDate.employeeName),
                      borderRadius: '50%',
                      height: '5px',
                      width: '5px',
                      margin: '2px',
                    }}
                  ></div>
                ));

              return dots.length > 0 ? dots : null;
            }}
            onClickDay={(date) => setSelectedDate(date)}
          />
       
          <div className='emp-color'>
            <h2 style={{ margin: '20px' }}>Employee Details</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                {employeeDetails.map(({ name }) => (
                  <tr key={name}>
                    <td>{name}</td>
                    <td>
                      <div
                        style={{
                          backgroundColor: getEmployeeColor(name),
                          borderRadius: '50%',
                          height: '20px',
                          width: '20px',
                          margin: '0 auto',
                        }}
                      ></div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
         
          <Modal
            isOpen={selectedDate !== null}
            onRequestClose={() => setSelectedDate(null)}
            style={{
              overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              },
              content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                maxHeight: '80vh',
                overflow: 'auto',
              },
            }}
          >
            {getLeaveDetailsForDate()}
          </Modal>
        </div>
      </div>
    </>
  );
};

export default LeaveCalendar;
