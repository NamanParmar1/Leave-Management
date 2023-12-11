import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import Sidebar from '../../layout/Sidebar/Sidebar';
import { toast } from 'react-toastify';
import ContentTop from '../ContentTop/ContentTop';
import './HighlightedLeaves.css';
import { useLeaveContext } from '../../context/LeaveContext';

const LeaveCalendar = () => {
  const { leaveData: contextLeaveData, setLeaveData } = useLeaveContext();
  const [leaveData, setLocalLeaveData] = useState(contextLeaveData || []);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    toast.success('Leave Calendar');
    // If leaveData is empty, fetch it from localStorage
    if (!leaveData || leaveData.length === 0) {
      const storedLeaveData = JSON.parse(localStorage.getItem('leaveData')) || [];
      setLeaveData(storedLeaveData);
    }
  }, [leaveData, setLeaveData]);

  const getHighlightedDates = () => {
    return Array.isArray(leaveData)
      ? leaveData.map((leave, index) => ({
        title: `${leave.Name}'s Leave`,
        start: new Date(leave.startDate),
        end: new Date(leave.endDate),
        description: (leave.reason),
        color: getRandomColor(index),
      }))
      : [];
  };

  const getRandomColor = (index) => {
    const colors = ['red', 'green', 'blue', 'purple', 'orange' ,'violet'];
    return colors[index % colors.length];
  };

  const handleDateClick = (info) => {
    setSelectedDate(info.dateStr);
  };

  const eventContent = ({ event }) => (
    <>
      <p>{event.title}{event.description}</p>
      <p>{event.description}</p>
    </>
  );

  return (
    <>
      <Sidebar />
      <div className='main-content'>
        <ContentTop />
        <div className='main-leave'>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin]}
            initialView="dayGridMonth"
            header={{
              left: "prev,next",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay"
            }}
            themeSystem="Simplex"
            events={getHighlightedDates()}
            dateClick={handleDateClick}
            eventContent={eventContent}
            height="600px"
          />
        </div>
      </div>
    </>
  );
};

export default LeaveCalendar;
