import React, { useState, useEffect } from 'react';
import firebaseApp from '../../Firebase/Firebase';
import { getDatabase, ref, onValue } from 'firebase/database';
import { userInfoData } from '../../data/data';

import './History.css';

const History = () => {
  const [leaveData, setLeaveData] = useState([]);
  const oktaUserEmail = userInfoData.email; 

  useEffect(() => {
    const database = getDatabase(firebaseApp);
    const leaveRef = ref(database, 'leave');

    const unsubscribe = onValue(leaveRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const leaveArray = Object.values(data);
        setLeaveData(leaveArray);
      }
    });

    return () => unsubscribe();
  }, [setLeaveData]);

  const isAdmin = oktaUserEmail.endsWith('@cigna.com');

  return (
    <div className='history-contents'>
      <h2 className='history-heading'>Leave Data</h2>
      {isAdmin ? (
       
        <table className='table-leave'>
          <thead className='thead-leave'>
            <tr>
              <th>Name</th>
              <th>Leave Start Date</th>
              <th>Leave End Date</th>
              <th>Leave Type</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody className='tbody-leave'>
            {leaveData.map((leave) => (
              <tr key={leave.id}>
                <td>{leave.Name}</td>
                <td>{leave.startDate}</td>
                <td>{leave.endDate}</td>
                <td>{leave.leaveType}</td>
                <td>{leave.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        
        <table>
          <thead>
            <tr className='history-table-row'>
                <th>Leave Start Date</th>
                <th>Leave End Date</th>
                <th>Leave Type</th>
                <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            {leaveData
              .filter((leave) => leave.Name === userInfoData.name)
              .map((leave) => (
                <tr key={leave.id}>
                  <td>{leave.startDate}</td>
                  <td>{leave.endDate}</td>
                  <td>{leave.leaveType}</td>
                  <td>{leave.reason}</td>
                </tr>
              ))}
        </tbody>
        </table>
  )
}
    </div >
  );
};

export default History;