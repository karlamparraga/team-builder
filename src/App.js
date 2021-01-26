import React, {useState} from 'react';
import "./styles.css"

import Form from "./components/Form";
import MemberList from "./components/MemberList"
import data from "./data";

const App = () => {
    const [memberList, setMember] = useState(data);

    const addNewMember = member => {
        setMember([...memberList, member]);
    }

    return (
        <div className="note">
            <h1>Add a Member</h1>
            {/* adding a member form */}
            <Form addNewMember={addNewMember}/>

            {/* rendering list of members */}
            <MemberList memberList={memberList}/>
        </div>
    );

}

export default App;
