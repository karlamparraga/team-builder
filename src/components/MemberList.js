import React from "react";
import "../styles.css"

const MemberList = props => {
    console.log("MemberList props: ", props)
  return (
    <div>
      {props.memberList.map(member => {
        return (
          <div className="note" key={member.id}>
            <h2>{member.name}</h2>
            <p>{member.email}</p>
            <p>{member.role}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MemberList;
