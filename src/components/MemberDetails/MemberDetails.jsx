import React from 'react';

const MemberDetails = ({ member }) => {
  return (
    <div className="member-details">
      <h2>{member.title}</h2>
      <p>{member.designation}</p>
      <p>{member.team}</p>
      <p>{member.location}</p>
      {/* Add other details you want to display */}
    </div>
  );
};

export default MemberDetails;