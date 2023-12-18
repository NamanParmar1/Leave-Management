// // import React, { useState, useEffect } from 'react';
// // import Calendar from 'react-calendar';
// // import 'react-calendar/dist/Calendar.css';
// // import Sidebar from '../../../layout/Sidebar/Sidebar';
// // import Modal from 'react-modal';
// // import './HighlightedLeaves.css';
// // import { useLeaveContext } from '../../../context/LeaveContext';
// // import ContentTop from '../../ContentTop/ContentTop';
// // import { employeeDetails } from '../../../data/data';
// // import firebaseApp from '../../../Firebase/Firebase';
// // import { getDatabase, ref, onValue } from 'firebase/database';

// // Modal.setAppElement('#root'); 

// // const LeaveCalendar = () => {
// //   const { leaveData, setLeaveData } = useLeaveContext();
// //   const [selectedDate, setSelectedDate] = useState(null);

// //   const employeeDetailsMap = new Map(employeeDetails.map(({ name, color }) => [name, color]));

// //   useEffect(() => {
// //     const database = getDatabase(firebaseApp);
// //     const leaveRef = ref(database, 'leave');

// //     // Listen for changes in the "leave" node
// //     const unsubscribe = onValue(leaveRef, (snapshot) => {
// //       const data = snapshot.val();
// //       if (data) {
// //         const leaveArray = Object.values(data);
// //         setLeaveData(leaveArray);
// //       }
// //     });

// //     // Cleanup the subscription when the component unmounts
// //     return () => unsubscribe();
// //   }, [setLeaveData]);

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
// //         <h3 style={{marginBottom:'10px'}}>Leave Details</h3>
// //         {leaveDetailsForDate.map((leave) => (
// //           <div key={leave.id} className="leave-box">
// //             <p className="employee-name" style={{ color: employeeDetailsMap.get(leave.Name) }}>
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
// //     return employeeDetailsMap.get(employeeName) || 'black';
// //   };

// //   return (
// //     <>
// //       <Sidebar />
// //       <div className="main-content">
// //         <ContentTop />
// //         <div className='main-cal'>

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

// //           <div className='emp-color'>
// //             <h2 style={{ margin: '20px' }}>Employee Details</h2>
// //             <table style={{ width: '100%', borderCollapse: 'collapse' }}>
// //               <tbody>
// //                 {employeeDetails.map(({ name }) => (
// //                   <tr key={name}>
// //                     <td>{name}</td>
// //                     <td>
// //                       <div
// //                         style={{
// //                           backgroundColor: getEmployeeColor(name),
// //                           borderRadius: '50%',
// //                           height: '20px',
// //                           width: '20px',
// //                           margin: '0 auto',
// //                         }}
// //                       ></div>
// //                     </td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>

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
// //                 maxHeight: '80vh',
// //                 overflow: 'auto',
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

// // export default LeaveCalendar;


// // import React, { useState, useEffect } from 'react';
// // import Calendar from 'react-calendar';
// // import 'react-calendar/dist/Calendar.css';
// // import Sidebar from '../../../layout/Sidebar/Sidebar';
// // import Modal from 'react-modal';
// // import './HighlightedLeaves.css';
// // import { useLeaveContext } from '../../../context/LeaveContext';
// // import ContentTop from '../../ContentTop/ContentTop';
// // import { employeeDetails, userInfoData } from '../../../data/data';
// // import firebaseApp from '../../../Firebase/Firebase';
// // import { getDatabase, ref, onValue } from 'firebase/database';

// // Modal.setAppElement('#root');

// // const LeaveCalendar = () => {
// //   const { leaveData, setLeaveData } = useLeaveContext();
// //   const [selectedDate, setSelectedDate] = useState(null);
// //   const oktaUserEmail = userInfoData.email; // Replace with your Okta user email or fetch it dynamically

// //   const employeeDetailsMap = new Map(employeeDetails.map(({ name, color }) => [name, color]));

// //   useEffect(() => {
// //     const database = getDatabase(firebaseApp);
// //     const leaveRef = ref(database, 'leave');

// //     // Listen for changes in the "leave" node
// //     const unsubscribe = onValue(leaveRef, (snapshot) => {
// //       const data = snapshot.val();
// //       if (data) {
// //         const leaveArray = Object.values(data);
// //         setLeaveData(leaveArray);
// //       }
// //     });

// //     // Cleanup the subscription when the component unmounts
// //     return () => unsubscribe();
// //   }, [setLeaveData]);

// //   const isAdminEmail = (email) => oktaUserEmail.endsWith('@cigna.com');

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
// //         <h3 style={{ marginBottom: '10px' }}>Leave Details</h3>
// //         {leaveDetailsForDate.map((leave) => (
// //           <div key={leave.id} className="leave-box">
// //             <p className="employee-name" style={{ color: employeeDetailsMap.get(leave.Name) }}>
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
// //     return employeeDetailsMap.get(employeeName) || 'black';
// //   };

// //   return (
// //     <>
// //       <Sidebar />
// //       <div className="main-content">
// //         <ContentTop />
// //         <div className='main-cal'>
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

// //           <div className='emp-color'>
// //             <h2 style={{ margin: '20px' }}>Employee Details</h2>
// //             <table style={{ width: '100%', borderCollapse: 'collapse' }}>
// //               <tbody>
// //                 {employeeDetails.map(({ name }) => (
// //                   <tr key={name}>
// //                     <td>{name}</td>
// //                     <td>
// //                       <div
// //                         style={{
// //                           backgroundColor: getEmployeeColor(name),
// //                           borderRadius: '50%',
// //                           height: '20px',
// //                           width: '20px',
// //                           margin: '0 auto',
// //                         }}
// //                       ></div>
// //                     </td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>

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
// //                 maxHeight: '80vh',
// //                 overflow: 'auto',
// //               },
// //             }}
// //           >
// //             {isAdminEmail(oktaUserEmail) ? (
// //               getLeaveDetailsForDate()
// //             ) : (
// //               <p>Leave details for the signed-in employee only.</p>
// //             )}
// //           </Modal>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default LeaveCalendar;
// import React, { useState, useEffect } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import Sidebar from '../../../layout/Sidebar/Sidebar';
// import Modal from 'react-modal';
// import './HighlightedLeaves.css';
// import { useLeaveContext } from '../../../context/LeaveContext';
// import ContentTop from '../../ContentTop/ContentTop';
// import { employeeDetails, userInfoData } from '../../../data/data';
// import firebaseApp from '../../../Firebase/Firebase';
// import { getDatabase, ref, onValue } from 'firebase/database';

// Modal.setAppElement('#root');

// const LeaveCalendar = () => {
//   const { leaveData, setLeaveData } = useLeaveContext();
//   const [selectedDate, setSelectedDate] = useState(null);
//   const oktaUserEmail = userInfoData.email; // Replace with your Okta user email or fetch it dynamically

//   const employeeDetailsMap = new Map(employeeDetails.map(({ name, color }) => [name, color]));

//   useEffect(() => {
//     const database = getDatabase(firebaseApp);
//     const leaveRef = ref(database, 'leave');

//     // Listen for changes in the "leave" node
//     const unsubscribe = onValue(leaveRef, (snapshot) => {
//       const data = snapshot.val();
//       if (data) {
//         const leaveArray = Object.values(data);
//         setLeaveData(leaveArray);
//       }
//     });

//     // Cleanup the subscription when the component unmounts
//     return () => unsubscribe();
//   }, [setLeaveData]);

//   const isAdmin = oktaUserEmail.endsWith('@cigna.com');

//   const getHighlightedDates = () => {
//     const highlightedDates = [];

//     if (Array.isArray(leaveData)) {
//       leaveData.forEach((leave) => {
//         const startDate = new Date(leave.startDate);
//         const endDate = new Date(leave.endDate);

//         let currentDate = new Date(startDate);
//         while (currentDate <= endDate) {
//           highlightedDates.push({
//             date: new Date(currentDate),
//             employeeName: leave.Name,
//           });
//           currentDate.setDate(currentDate.getDate() + 1);
//         }
//       });
//     }

//     return highlightedDates;
//   };

//   const getLeaveDetailsForDate = () => {
//     if (!selectedDate) {
//       return null;
//     }

//     const selectedDateWithoutTime = new Date(
//       selectedDate.getFullYear(),
//       selectedDate.getMonth(),
//       selectedDate.getDate()
//     );

//     const leaveDetailsForDate = isAdmin
//       ? leaveData.filter(
//           (leave) =>
//             new Date(leave.startDate).setHours(0, 0, 0, 0) <= selectedDateWithoutTime &&
//             new Date(leave.endDate).setHours(0, 0, 0, 0) >= selectedDateWithoutTime
//         )
//       : leaveData.filter(
//           (leave) =>
//             new Date(leave.startDate).setHours(0, 0, 0, 0) <= selectedDateWithoutTime &&
//             new Date(leave.endDate).setHours(0, 0, 0, 0) >= selectedDateWithoutTime &&
//             leave.Name === userInfoData.name
//         );

//     if (leaveDetailsForDate.length === 0) {
//       return <p>No leave details available for the selected date.</p>;
//     }

//     return (
//       <div className="modal-content">
//         <h3 style={{ marginBottom: '10px' }}>Leave Details</h3>
//         {leaveDetailsForDate.map((leave) => (
//           <div key={leave.id} className="leave-box">
//             <p className="employee-name" style={{ color: employeeDetailsMap.get(leave.Name) }}>
//               {leave.Name}{' '}
//             </p>
//             <p>{leave.leaveType} Leave </p>
//             <p>Start Date: {leave.startDate} </p>
//             <p>End Date: {leave.endDate}</p>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   const getEmployeeColor = (employeeName) => {
//     return employeeDetailsMap.get(employeeName) || 'black';
//   };

//   return (
//     <>
//       <Sidebar />
//       <div className="main-content">
//         <ContentTop />
//         <div className='main-cal'>
//         <Calendar
//   tileContent={({ date }) => {
//     const highlightedDates = getHighlightedDates();
//     const isAdminHighlighted = isAdmin && highlightedDates.some((d) => d.date.toDateString() === date.toDateString());
//     const userHighlightedDates = highlightedDates.filter(
//       (highlightedDate) =>
//         highlightedDate.date.toDateString() === date.toDateString() &&
//         highlightedDate.employeeName === userInfoData.name
//     );

//     const dots = isAdminHighlighted
//       ? highlightedDates
//           .filter((highlightedDate) => highlightedDate.date.toDateString() === date.toDateString())
//           .map((highlightedDate, index) => (
//             <div
//               key={index}
//               style={{
//                 backgroundColor: getEmployeeColor(highlightedDate.employeeName),
//                 borderRadius: '50%',
//                 height: '5px',
//                 width: '5px',
//                 margin: '2px',
//               }}
//             ></div>
//           ))
//       : userHighlightedDates.map((highlightedDate, index) => (
//           <div
//             key={index}
//             style={{
//               backgroundColor: getEmployeeColor(highlightedDate.employeeName),
//               borderRadius: '50%',
//               height: '5px',
//               width: '5px',
//               margin: '2px',
//             }}
//           ></div>
//         ));

//     return dots.length > 0 ? dots : null;
//   }}
//   onClickDay={(date) => setSelectedDate(date)}
// />
//           <div className='emp-color'>
//             <h2 style={{ margin: '20px' }}>Employee Details</h2>
//             <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//               <tbody>
//                 {employeeDetails.map(({ name }) => (
//                   <tr key={name}>
//                     <td>{name}</td>
//                     <td>
//                       <div
//                         style={{
//                           backgroundColor: getEmployeeColor(name),
//                           borderRadius: '50%',
//                           height: '20px',
//                           width: '20px',
//                           margin: '0 auto',
//                         }}
//                       ></div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           <Modal
//             isOpen={selectedDate !== null}
//             onRequestClose={() => setSelectedDate(null)}
//             style={{
//               overlay: {
//                 backgroundColor: 'rgba(0, 0, 0, 0.5)',
//               },
//               content: {
//                 top: '50%',
//                 left: '50%',
//                 right: 'auto',
//                 bottom: 'auto',
//                 marginRight: '-50%',
//                 transform: 'translate(-50%, -50%)',
//                 maxHeight: '80vh',
//                 overflow: 'auto',
//               },
//             }}
//           >
//             {isAdmin ? (
//               <div>
//                 {getLeaveDetailsForDate()}
//                 <div className="calendar-wrapper">
//                   <Calendar
//                     tileContent={({ date }) => {
//                       const highlightedDates = getHighlightedDates();
//                       const dots = highlightedDates
//                         .filter((highlightedDate) => highlightedDate.date.toDateString() === date.toDateString())
//                         .map((highlightedDate, index) => (
//                           <div
//                             key={index}
//                             style={{
//                               backgroundColor: getEmployeeColor(highlightedDate.employeeName),
//                               borderRadius: '50%',
//                               height: '5px',
//                               width: '5px',
//                               margin: '2px',
//                             }}
//                           ></div>
//                         ));

//                       return dots.length > 0 ? dots : null;
//                     }}
//                     onClickDay={(date) => setSelectedDate(date)}
//                   />
//                 </div>
//               </div>
//             ) : (
//               getLeaveDetailsForDate()
//             )}
//           </Modal>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LeaveCalendar;



import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Sidebar from '../../../layout/Sidebar/Sidebar';
import Modal from 'react-modal';
import './HighlightedLeaves.css';
import { useLeaveContext } from '../../../context/LeaveContext';
import ContentTop from '../../ContentTop/ContentTop';
import { employeeDetails, userInfoData } from '../../../data/data';
import firebaseApp from '../../../Firebase/Firebase';
import { getDatabase, ref, onValue } from 'firebase/database';

Modal.setAppElement('#root');

const LeaveCalendar = () => {
  const { leaveData, setLeaveData } = useLeaveContext();
  const [selectedDate, setSelectedDate] = useState(null);
  const oktaUserEmail = userInfoData.email; // Replace with your Okta user email or fetch it dynamically

  const employeeDetailsMap = new Map(employeeDetails.map(({ name, color }) => [name, color]));

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

  

  const isAdmin = oktaUserEmail.endsWith('@cigna.com');

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

    const leaveDetailsForDate = isAdmin
      ? leaveData.filter(
        (leave) =>
          new Date(leave.startDate).setHours(0, 0, 0, 0) <= selectedDateWithoutTime &&
          new Date(leave.endDate).setHours(0, 0, 0, 0) >= selectedDateWithoutTime
      )
      : leaveData.filter(
        (leave) =>
          new Date(leave.startDate).setHours(0, 0, 0, 0) <= selectedDateWithoutTime &&
          new Date(leave.endDate).setHours(0, 0, 0, 0) >= selectedDateWithoutTime &&
          leave.Name === userInfoData.name
      );

    if (leaveDetailsForDate.length === 0) {
      return <p>No leave details available for the selected date.</p>;
    }

    return (
      <div className="modal-content">
        <h3 style={{ marginBottom: '10px' }}>Leave Details</h3>
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

  const getEmployeeColorChart = () => {
    if (isAdmin) {
      return (
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
      );
    } else {
      // Non-admin user, show only their color chart
      const currentUser = employeeDetails.find((employee) => employee.name === userInfoData.name);
      if (currentUser) {
        return (
          <div className='emp-color'>
            <h2 style={{ margin: '20px' }}>Your Calendar Color</h2>
            <div
              style={{
                backgroundColor: getEmployeeColor(currentUser.name),
                borderRadius: '50%',
                height: '20px',
                width: '20px',
                margin: '0 auto',
              }}
            ></div>
          </div>
        );
      }
    }

    return null;
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
              const isAdminHighlighted = isAdmin && highlightedDates.some((d) => d.date.toDateString() === date.toDateString());
              const userHighlightedDates = highlightedDates.filter(
                (highlightedDate) =>
                  highlightedDate.date.toDateString() === date.toDateString() &&
                  highlightedDate.employeeName === userInfoData.name
              );

              const dots = isAdminHighlighted
                ? highlightedDates
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
                  ))
                : userHighlightedDates.map((highlightedDate, index) => (
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

          {getEmployeeColorChart()}

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
            {isAdmin ? (
              getLeaveDetailsForDate()
            ) : (
              <div>
                {getLeaveDetailsForDate()}
              </div>
            )}
          </Modal>
        </div>
      </div>
    </>
  );
};

export default LeaveCalendar;
