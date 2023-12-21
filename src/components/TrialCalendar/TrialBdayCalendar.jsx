// import React, { useEffect, useState } from 'react';
// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
// import { useLocation } from 'react-router-dom';
// import './TrialCalendar.css';
// import { members } from '../../data/data';

// const TrialCalendar = () => {
//     const location = useLocation();
//     const [birthdays, setBirthdays] = useState([]);
//     const [selectedDate, setSelectedDate] = useState('');
//     const [selectedBirthdayInfo, setSelectedBirthdayInfo] = useState(null);
//     const [showBirthdayForm, setShowBirthdayForm] = useState(false);

//     const [name, setName] = useState("");
//     const [showForm, setShowForm] = useState(false);
//     const [date, setDate] = useState(new Date());

//     const handleDateClick = (clickedDate) => {
//         setDate(clickedDate);
//         setShowForm(true);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         if (name.trim() === "") return;
//         const newBirthday = {
//           date: date,
//           name: name,
//         };

//         setBirthdays([...birthdays, newBirthday]);
//         console.log(newBirthday);
//         setShowForm(false);
//         setName("");
//       };

// useEffect(() => {
//     let flatpickrInstance;

//     if (!flatpickrInstance) {
//         flatpickrInstance = flatpickr('#calendar .placeholder', {
//             inline: true,
//             minDate: null,
//             showMonths: 1,
//             disableMobile: true,
//             onReady: function (selectedDates, dateStr, instance) {
//                 highlightBirthdays(instance);
//             },
//             onChange: function (selectedDates, dateStr, instance) {
//                 highlightBirthdays(instance);

//                 handleDateClick(dateStr);

//                 const birthdayInfo = members.filter((member) => member.birthday === dateStr);

//                 const contents = birthdayInfo.map((info) => (
//                     `<div class="event"><div class="date">${instance.formatDate(selectedDates[0], 'l J F')}</div><div class="name">Happy Birthday, ${(info.title.split(',')[1] || '').trim().split(' ')[0] || ''}!</div></div>`
//                 )).join('');

//                 document.querySelector('#calendar .calendar-events').innerHTML = contents;

//             },
//             onMonthChange: function (selectedDates, dateStr, instance) {
//                 highlightBirthdays(instance);
//             },
//             locale: {
//                 weekdays: {
//                     shorthand: ["S", "M", "T", "W", "T", "F", "S"],
//                     longhand: [
//                         "Sunday",
//                         "Monday",
//                         "Tuesday",
//                         "Wednesday",
//                         "Thursday",
//                         "Friday",
//                         "Saturday",
//                     ],
//                 },
//             },
//         });

//         window.addEventListener('resize', () => eventCaledarResize(window));
//     }

//     function highlightBirthdays(instance) {
//         const calendarContainer = instance.calendarContainer;
//         const dayElements = calendarContainer.querySelectorAll('.flatpickr-day');

//         dayElements.forEach((dayElement) => {
//             const date = instance.formatDate(dayElement.dateObj, 'Y-m-d');
//             const isBirthday = members.some((member) => member.birthday === date);

//             if (isBirthday) {
//                 dayElement.classList.add('holiday');
//             } else {
//                 dayElement.classList.remove('holiday');
//             }
//         });
//     }

//     function eventCaledarResize($el) {
//         var width = $el.innerWidth;
//         if (flatpickrInstance.selectedDates.length) {
//             flatpickrInstance.clear();
//         }

//         if (width < 768 && flatpickrInstance.config.showMonths !== 1) {
//             flatpickrInstance.set('showMonths', 1);
//             document.querySelector('.flatpickr-calendar').style.width = '';
//         }
//     }

//     return () => {
//         window.removeEventListener('resize', () => eventCaledarResize(window));
//     };
// }, [birthdays]);

// let title = '';
// if (location.pathname === '/calendar/holiday') {
//     title = 'Holidays';
// } else if (location.pathname === '/calendar/leave') {
//     title = 'Leaves';
// } else if (location.pathname === '/calendar/birthday') {
//     title = 'Birthdays';
// }

//     return (
//         <div className="cal-modal-container">
//             <div className="holiday-list-trial">
//                         {showForm && (
//                             <form onSubmit={handleSubmit}>
//                                 <label htmlFor="nameInput"> Who's cutting the cake? 🎂:</label>
//                                 <input
//                                     type="text"
//                                     id="nameInput"
//                                     value={name}
//                                     onChange={(e) => setName(e.target.value)}
//                                 />
//                                 <button className="btnsave" type="submit">Save</button>
//                             </form>
//                         )}

//                         <h2>Birthdays:</h2>
//                         <ul className="ul-b-list">
//                             {birthdays.map((birthday, index) => (
//                                 <li key={index}>
//                                     {birthday.name}'s birthday on {birthday.date}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//             <div className="cal-modal">
//                 <h3>{title}</h3>
//                 <div id="calendar">
//                     <div className="placeholder"></div>
//                     <div className="calendar-events"></div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TrialCalendar;
import React, { useEffect, useState } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { useLocation } from 'react-router-dom';
import { getDatabase, ref, push, onValue } from 'firebase/database';
import firebaseApp from '../../Firebase/Firebase'; // Update this path

const db = getDatabase(firebaseApp);

import './TrialCalendar.css';
import { members } from '../../data/data';

const TrialCalendar = () => {
    const location = useLocation();
    const [birthdays, setBirthdays] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedBirthdayInfo, setSelectedBirthdayInfo] = useState(null);
    const [showBirthdayForm, setShowBirthdayForm] = useState(false);

    const [name, setName] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [date, setDate] = useState(new Date());

    const handleDateClick = (clickedDate) => {
        setDate(clickedDate);
        setShowForm(true);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (name.trim() === '') return;

        // Ensure that date is in a valid format
        let selectedDate;

        if (typeof date === 'string' && /\d{4}-\d{2}-\d{2}/.test(date)) {
            // If date is already in 'YYYY-MM-DD' format
            selectedDate = new Date(date);
        } else {
            // Otherwise, assume date is a timestamp or another valid format
            selectedDate = new Date(date);
        }

        // Check if the selectedDate is a valid date
        if (isNaN(selectedDate.getTime())) {
            console.error('Invalid date:', date);
            return;
        }

        const newBirthday = {
            date: selectedDate.toISOString(),
            name: name,
        };

        // Add the new birthday to Realtime Database
        const birthdaysRef = ref(db, 'birthdays');
        push(birthdaysRef, newBirthday);

        setBirthdays([...birthdays, newBirthday]);
        setShowForm(false);
        setName('');
    };


    useEffect(() => {
        let flatpickrInstance;

        if (!flatpickrInstance) {
            flatpickrInstance = flatpickr('#calendar .placeholder', {
                inline: true,
                minDate: null,
                showMonths: 1,
                disableMobile: true,
                onReady: function (selectedDates, dateStr, instance) {
                    highlightBirthdays(instance);
                },
                onChange: function (selectedDates, dateStr, instance) {
                    highlightBirthdays(instance);

                    handleDateClick(dateStr);

                    const birthdayInfo = members.filter((member) => member.birthday === dateStr);

                    const contents = birthdayInfo.map((info) => (
                        `<div class="event"><div class="date">${instance.formatDate(selectedDates[0], 'l J F')}</div><div class="name">Happy Birthday, ${(info.title.split(',')[1] || '').trim().split(' ')[0] || ''}!</div></div>`
                    )).join('');

                    document.querySelector('#calendar .calendar-events').innerHTML = contents;

                },
                onMonthChange: function (selectedDates, dateStr, instance) {
                    highlightBirthdays(instance);
                },
                locale: {
                    weekdays: {
                        shorthand: ["S", "M", "T", "W", "T", "F", "S"],
                        longhand: [
                            "Sunday",
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday",
                            "Saturday",
                        ],
                    },
                },
            });

            window.addEventListener('resize', () => eventCaledarResize(window));
        }

        function highlightBirthdays(instance) {
            const calendarContainer = instance.calendarContainer;
            const dayElements = calendarContainer.querySelectorAll('.flatpickr-day');

            dayElements.forEach((dayElement) => {
                const date = instance.formatDate(dayElement.dateObj, 'Y-m-d');
                const isBirthday = members.some((member) => member.birthday === date);

                if (isBirthday) {
                    dayElement.classList.add('holiday');
                } else {
                    dayElement.classList.remove('holiday');
                }
            });
        }

        function eventCaledarResize($el) {
            var width = $el.innerWidth;
            if (flatpickrInstance.selectedDates.length) {
                flatpickrInstance.clear();
            }

            if (width < 768 && flatpickrInstance.config.showMonths !== 1) {
                flatpickrInstance.set('showMonths', 1);
                document.querySelector('.flatpickr-calendar').style.width = '';
            }
        }

        return () => {
            window.removeEventListener('resize', () => eventCaledarResize(window));
        };
    }, [birthdays]);

    let title = '';
    if (location.pathname === '/calendar/holiday') {
        title = 'Holidays';
    } else if (location.pathname === '/calendar/leave') {
        title = 'Leaves';
    } else if (location.pathname === '/calendar/birthday') {
        title = 'Birthdays';
    }

    return (
        <div className="cal-modal-container">
            <div className="holiday-list-trial">
                {showForm && (
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="nameInput"> Who's cutting the cake? 🎂:</label>
                        <input
                            type="text"
                            id="nameInput"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <button className="btnsave" type="submit">
                            Save
                        </button>
                    </form>
                )}

                <h2>Birthdays:</h2>
                <ul className="ul-b-list">
                    {birthdays.map((birthday, index) => (
                        <li key={index}>
                            {birthday.name}'s birthday on {birthday.date}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="cal-modal">
                <h3>{title}</h3>
                <div id="calendar">
                    <div className="placeholder"></div>
                    <div className="calendar-events"></div>
                </div>
            </div>
        </div>
    );
};

export default TrialCalendar;

