import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import './BirthdayCalendar.css';


import Sidebar from "../../layout/Sidebar/Sidebar";
import ContentTop from "../ContentTop/ContentTop";

const BirthdayCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [birthdays, setBirthdays] = useState([]);
 
  const handleDateClick = (clickedDate) => {
    setDate(clickedDate);
    setShowForm(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === "") return;
    const newBirthday = {
      date: date,
      name: name,
    };

    setBirthdays([...birthdays, newBirthday]);
    setShowForm(false);
    setName("");
  };

  return (
    <>
      <Sidebar />
      <div className="main-content">
        {" "}
        {/* className="calendar-container" */}
        <ContentTop />
        <div className="calendar-content">
          <div className="calendar-container">
            <Calendar onClickDay={handleDateClick} value={date} />
          </div>
          <div className="cakecut">
            {showForm && (
              <form onSubmit={handleSubmit}>
                <label htmlFor="nameInput"> Who's cutting the cake? 🎂:</label>
                <input
                  type="text"
                  id="nameInput"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <button className="btnsave" type="submit">Save</button>
              </form>
            )}
         
            <h2>Birthdays:</h2>
            <ul className="ul-b-list">
              {birthdays.map((birthday, index) => (
                <li key={index}>
                  {birthday.name}'s birthday on {birthday.date.toDateString()}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BirthdayCalendar;

//------------------------------------------------------------------------------------------------

// import React, { useState } from 'react';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// //import './BirthdayCalendar.css';

// const BirthdayCalendar = () => {
//   const [date, setDate] = useState(new Date());
//   const [showForm, setShowForm] = useState(false);
//   const [name, setName] = useState('');
//   const [birthdays, setBirthdays] = useState([]);

//   const handleDateClick = (info) => {
//     setDate(info.date);
//     setShowForm(true);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (name.trim() === '') return;

//     const newBirthday = {
//       date: date,
//       name: name,
//     };

//     setBirthdays([...birthdays, newBirthday]);
//     setShowForm(false);
//     setName('');
//   };

//   return (
//     <div className="calendar-container">
//       <h1>Birthday Calendar</h1>
//       <div className="calendar-content">
//         <div>
//           <FullCalendar
//             plugins={[dayGridPlugin]}
//             initialView="dayGridMonth"
//             dateClick={handleDateClick}
//           />
//         </div>
//         <div>
//           {showForm && (
//             <form onSubmit={handleSubmit}>
//               <label htmlFor="nameInput">Who's cutting the cake? 🎂:</label>
//               <input
//                 type="text"
//                 id="nameInput"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//               <button type="submit">Save</button>
//             </form>
//           )}
//           <h2>Birthdays:</h2>
//           <ul>
//             {birthdays.map((birthday, index) => (
//               <li key={index}>
//                 {birthday.name}'s birthday on {birthday.date.toDateString()}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BirthdayCalendar;