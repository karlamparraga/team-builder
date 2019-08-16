import React, {useState} from 'react';
import "./styles.css"

import Form from "./components/Form";
import MemberList from "./components/MemberList"
import data from "./data";

const App = () => {
    const [members, setMember] = useState(data);

    const addNewMember = member => {
        setMember([...members, member]);
    }

    return (
        <div className="note">
            <h1>Add a Member</h1>
            {/* adding a member form */}
            <Form addNewMember={addNewMember} />

            {/* rendering list of members */}
            <MemberList memberList={members}/>
        </div>
    );

}

export default App;
