import React from "react";
import "../styles.css"

const MemberList = props => {
  return (
    <div>
      {props.memberList.map(member => {
        return (
          <div className="note" key={member.id}>
            <h2>{member.title}</h2>
            <p>{member.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MemberList;
