import React, { useEffect } from 'react';

import flatpickr from 'flatpickr'; // Import the flatpickr library
import 'flatpickr/dist/flatpickr.min.css'; // Import the flatpickr styles
import { useLocation } from 'react-router-dom';
import { holidays } from '../../data/data';
import './TrialCalendar.css';

const TrialCalendar = () => {
    const location = useLocation();


    // useEffect(() => {
    //     // const eventDates = {};
    //     // let day1 = formatDate(new Date(new Date().setMonth(new Date().getMonth() + 1)));
    //     // eventDates[day1] = [
    //     //     'Event 1, Location 1',
    //     //     'Event 2, Location 2'
    //     // ];
    //     // let day2 = formatDate(new Date(new Date().setDate(new Date().getDate() + 40)));
    //     // eventDates[day2] = [
    //     //     'Event 2, Location 3',
    //     // ];

    //     const flatpickrInstance = flatpickr('#calendar .placeholder', {
    //         inline: true,
    //         minDate: null,
    //         showMonths: 1,
    //         disableMobile: true,
    //         onChange: function (date, str) {
    //             console.log(date);
    //             var contents = '';
    //             if (date.length) {
    //                 contents += `<div class="event"><div class="date">${flatpickrInstance.formatDate(date[0], 'l J F')}</div></div>`;
    //                 // for (let i = 0; i < eventDates[str]?.length; i++) {
    //                 //     contents += `<div class="location">${eventDates[str]?.[i]}</div>`;
    //                 // }
    //                 //contents += '</div>';
    //             }
    //             document.querySelector('#calendar .calendar-events').innerHTML = contents;
    //         },
    //         locale: {
    //             weekdays: {
    //                 shorthand: ["S", "M", "T", "W", "T", "F", "S"],
    //                 longhand: [
    //                     "Sunday",
    //                     "Monday",
    //                     "Tuesday",
    //                     "Wednesday",
    //                     "Thursday",
    //                     "Friday",
    //                     "Saturday",
    //                 ]
    //             }
    //         }
    //     });

    //     eventCaledarResize(window);
    //     window.addEventListener('resize', () => eventCaledarResize(window));

    //     function eventCaledarResize($el) {
    //         var width = $el.innerWidth;
    //         if (flatpickrInstance.selectedDates.length) {
    //             flatpickrInstance.clear();
    //         }
    //         // if (width >= 768 && flatpickrInstance.config.showMonths !== 2) {
    //         //     flatpickrInstance.set('showMonths', 2);

    //         // }
    //         if (width < 768 && flatpickrInstance.config.showMonths !== 1) {
    //             flatpickrInstance.set('showMonths', 1);

    //             document.querySelector('.flatpickr-calendar').style.width = '';
    //         }
    //     }

    //     return () => {
    //         window.removeEventListener('resize', () => eventCaledarResize(window));
    //     };
    // }, []);

    useEffect(() => {
        let flatpickrInstance;

        if (!flatpickrInstance) {
            flatpickrInstance = flatpickr('#calendar .placeholder', {
                inline: true,
                minDate: null,
                showMonths: 1,
                disableMobile: true,
                onReady: function (selectedDates, dateStr, instance) {
                    // Highlight holidays on the calendar initially
                    highlightHolidays(instance);
                },
                onChange: function (selectedDates, dateStr, instance) {
                    // Highlight holidays on the calendar when a date is selected
                    highlightHolidays(instance);
                
                    // Display holiday information
                    const holidayInfo = holidays.filter((holiday) => {
                        const holidayDate = holiday.date.substring(5); // Extract day and month from the holiday date
                        return holidayDate === dateStr.substring(5); // Compare day and month without considering the year
                    });
                
                    let contents;
                    if (holidayInfo.length > 0) {
                        // Display holiday information
                        contents = holidayInfo.map((info) => (
                            `<div class="event"><div class="date">${instance.formatDate(selectedDates[0], 'l, J F')}</div><div class="location">${info.holidayDescription}</div></div>`
                        )).join('');
                    } else {
                        // Display only the date if no holidays are found
                        contents = `<div class="event"><div class="date">${instance.formatDate(selectedDates[0], 'l, J F')}</div></div>`;
                    }
                
                    document.querySelector('#calendar .calendar-events').innerHTML = contents;
                    //console.log(selectedDates);
                },
                onMonthChange: function (selectedDates, dateStr, instance) {
                    // Highlight holidays on the calendar when changing months
                    highlightHolidays(instance);
                },
                onYearChange: function (selectedDates, dateStr, instance) {
                    // Highlight holidays on the calendar when changing years
                    highlightHolidays(instance);
                },
                // locale: {
                //     weekdays: {
                //         shorthand: ["S", "M", "T", "W", "T", "F", "S"],
                //         longhand: [
                //             "Sunday",
                //             "Monday",
                //             "Tuesday",
                //             "Wednesday",
                //             "Thursday",
                //             "Friday",
                //             "Saturday",
                //         ],
                //     },
                // },
            });

            eventCaledarResize(window);
            window.addEventListener('resize', () => eventCaledarResize(window));
        }

        function highlightHolidays(instance) {
            // Highlight holidays on the calendar
            const calendarContainer = instance.calendarContainer;
            const dayElements = calendarContainer.querySelectorAll('.flatpickr-day');
        
            dayElements.forEach((dayElement) => {
                const date = instance.formatDate(dayElement.dateObj, 'm-d');
                const isHoliday = holidays.some((holiday) => {
                    const holidayDate = holiday.date.substring(5); // Extract day and month from the holiday date
                    return holidayDate === date;
                });
        
                if (isHoliday) {
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
            // if (width >= 768 && flatpickrInstance.config.showMonths !== 2) {
            //     flatpickrInstance.set('showMonths', 2);

            // }

            if (width < 768 && flatpickrInstance.config.showMonths !== 1) {
                flatpickrInstance.set('showMonths', 1);

                document.querySelector('.flatpickr-calendar').style.width = '';
            }
        }

        return () => {
            window.removeEventListener('resize', () => eventCaledarResize(window));
        };
    }, [holidays]);


    function formatDate(date) {
        let d = date.getDate();
        let m = date.getMonth() + 1;
        let y = date.getFullYear();
        return `${y}-${(m <= 9 ? '0' + m : m)}-${(d <= 9 ? '0' + d : d)}`;
    }
    

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







// Flatpickr library provides a variety of date formatting options using format tokens. Here are some commonly used format tokens:

// 'd': Day of the month as a two-digit number (01, 02, ..., 31).
// 'D': Abbreviated day name (Sun, Mon, ..., Sat).
// 'j': Day of the month without leading zeros (1, 2, ..., 31).
// 'l': Full day name (Sunday, Monday, ..., Saturday).
// 'F': Full month name (January, February, ..., December).
// 'M': Abbreviated month name (Jan, Feb, ..., Dec).
// 'm': Month as a two-digit number (01, 02, ..., 12).
// 'n': Month without leading zeros (1, 2, ..., 12).
// 'Y': Four-digit year (2023).
// 'y': Two-digit year (23 for 2023).
// 'H': Hour (00, 01, ..., 23).
// 'h': Hour in 12-hour format (01, 02, ..., 12).
// 'i': Minutes (00, 01, ..., 59).
// 'S': Seconds (00, 01, ..., 59).
// 'a': Lowercase am or pm.
// 'A': Uppercase AM or PM.
