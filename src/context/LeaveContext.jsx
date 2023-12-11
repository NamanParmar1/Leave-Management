// import React, { createContext, useContext, useState } from 'react';

// const LeaveContext = createContext();

// export const useLeaveContext = () => {
//   const context = useContext(LeaveContext);

//   if (!context) {
//     throw new Error('useLeaveContext must be used within a LeaveProvider');
//   }

//   return context;
// };

// export const LeaveProvider = ({ children }) => {
//   const [leaveData, setLeaveData] = useState([]);

//   const value = {
//     leaveData,
//     setLeaveData,
//   };

//   return <LeaveContext.Provider value={value}>{children}</LeaveContext.Provider>;
// };


import React, { createContext, useContext, useState } from 'react';

const LeaveContext = createContext();

export const useLeaveContext = () => {
  const context = useContext(LeaveContext);

  if (!context) {
    throw new Error('useLeaveContext must be used within a LeaveProvider');
  }

  return context;
};

export const LeaveProvider = ({ children }) => {
  const [leaveData, setLeaveData] = useState([]);

  const value = {
    leaveData,
    setLeaveData,
  };

  return (
    <LeaveContext.Provider value={{ leaveData, setLeaveData }}>
      {children}
    </LeaveContext.Provider>
  );

};