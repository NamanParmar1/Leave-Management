// import React, { useState } from 'react';
// import ContentTop from '../components/ContentTop/ContentTop';
// import Sidebar from '../layout/Sidebar/Sidebar';

// const ApplyLeave = () => {
//   // State to manage leave details
//   const [leaveDetails, setLeaveDetails] = useState({
//     startDate: '',
//     endDate: '',
//     reason: '',
//   });

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You can handle the form submission logic here
//     console.log('Leave Application Submitted:', leaveDetails);
//     // You may want to send the data to a server or perform further actions
//   };

//   // Function to handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLeaveDetails((prevDetails) => ({
//       ...prevDetails,
//       [name]: value,
//     }));
//   };

//   return (
//     <>
//       <Sidebar />
//       <div className='main-content'>
//         <ContentTop />
//         {/* Add content specific to the Apply Leave page */}
//         <h2>Apply Leave</h2>
//         <form onSubmit={handleSubmit}>
//           <label>
//             Start Date:
//             <input
//               type='date'
//               name='startDate'
//               value={leaveDetails.startDate}
//               onChange={handleChange}
//               required
//             />
//           </label>
//           <br />
//           <label>
//             End Date:
//             <input
//               type='date'
//               name='endDate'
//               value={leaveDetails.endDate}
//               onChange={handleChange}
//               required
//             />
//           </label>
//           <br />
//           <label>
//             Reason:
//             <textarea
//               name='reason'
//               value={leaveDetails.reason}
//               onChange={handleChange}
//               required
//             />
//           </label>
//           <br />
//           <button type='submit'>Submit Leave Application</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default ApplyLeave;
