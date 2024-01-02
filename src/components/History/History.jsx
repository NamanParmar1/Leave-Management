import React, { useState, useEffect } from 'react';
import firebaseApp from '../../Firebase/Firebase';
import { getDatabase, ref, onValue } from 'firebase/database';
import { userInfoData } from '../../data/data';

import './History.css';

const History = () => {
  const [leaveData, setLeaveData] = useState([]);
  const oktaUserEmail = userInfoData.email; // Replace with your Okta user email or fetch it dynamically

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

  return (
    <div className='history-contents'>
      <h2 className='history-heading'>Leave Data</h2>
      {isAdmin ? (
        // Display all leave details to the admin
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
          <tbody>
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
        // Display only individual's leave details to the employee
        <table className='table-leave'>
          <thead className='thead-leave'>
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