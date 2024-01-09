
import React, { useState, useEffect } from 'react';

import flatpickr from 'flatpickr'; // Import the flatpickr library
import 'flatpickr/dist/flatpickr.min.css'; // Import the flatpickr styles
import { useLocation } from 'react-router-dom';
import { holidays } from '../../data/data';
import './TrialCalendar.css';

const TrialCalendar = () => {
  const location = useLocation();
  const [selectedMonthHolidays, setSelectedMonthHolidays] = useState([]);

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
          displayMonthHolidays(instance);
        },
        onChange: function (selectedDates, dateStr, instance) {
          // Highlight holidays on the calendar when a date is selected
          highlightHolidays(instance);

          // Display holiday information
          const holidayInfo = holidays.filter((holiday) => holiday.date === dateStr);

          const contents = holidayInfo.map((info) => (
            `<div class="event"><div class="date">${instance.formatDate(selectedDates[0], 'l J F')}</div><div class="location">${info.holidayDescription}</div></div>`
          )).join('');

          document.querySelector('#calendar .calendar-events').innerHTML = contents;
        },
        onMonthChange: function (selectedDates, dateStr, instance) {
          // Highlight holidays on the calendar when changing months
          highlightHolidays(instance);
          displayMonthHolidays(instance);
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

      eventCaledarResize(window);
      window.addEventListener('resize', () => eventCaledarResize(window));
    }

    function highlightHolidays(instance) {
      const calendarContainer = instance.calendarContainer;
      const dayElements = calendarContainer.querySelectorAll('.flatpickr-day');

      dayElements.forEach((dayElement) => {
        const date = instance.formatDate(dayElement.dateObj, 'm-d');
        const isHoliday = holidays.some((holiday) => holiday.date.substring(5) === date);

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

      if (width < 768 && flatpickrInstance.config.showMonths !== 1) {
        flatpickrInstance.set('showMonths', 1);

        document.querySelector('.flatpickr-calendar').style.width = '';
      }
    }
    function displayMonthHolidays(instance) {
      const selectedMonth = instance.currentMonth;
      const selectedYear = instance.currentYear;
      const holidaysInMonth = holidays.filter((holiday) => {
        const holidayDate = new Date(holiday.date);
        return holidayDate.getMonth() === selectedMonth && holidayDate.getFullYear() === selectedYear;
      });

      setSelectedMonthHolidays(holidaysInMonth);
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
  console.log(location.pathname)

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
      <div className='holiday-list-trial'>
        <h4 className='holiday-list-heading'>Holidays in Selected Month:</h4>
        <ol>
          {selectedMonthHolidays.map((holiday) => (
            <li className='list-item' key={holiday.date}>
              {holiday.holidayDescription} - {holiday.date}
            </li>
          ))}
        </ol>
      </div>
      <div className="cal-modal">
        <h3>{title}</h3>
        <div id="calendar">
          <div className="placeholder"></div>
          <div className="calendar-events">
            {/* <h4>Holidays in Selected Month:</h4> */}
            {/* <ul>
              {selectedMonthHolidays.map((holiday) => (
                <li key={holiday.date}>
                  {holiday.holidayDescription} - {holiday.date}
                </li>
              ))}
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrialCalendar;