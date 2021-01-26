import React, {useState} from 'react';
import "../styles.css"

const Form = props => {
    console.log("Form props: ", props)
    const [member, setMember] = useState({ name: "", email: "", role: "" });

    const changeHandler = event => {
      setMember({ ...member, [event.target.name]: event.target.value });
    };

    const submitForm = event => {
      event.preventDefault();
      const newMember = {
        ...member,
        id: Date.now()
      };
      props.addNewMember(newMember);
    };

    return (
      <form onSubmit={submitForm}>
        <label htmlFor="name">Member Name</label>
          <input
            type="text"
            name="name"
            placeholder="Member Name"
            value={member.name}
            onChange={changeHandler}
          />
    
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Member Email"
            value={member.email}
            onChange={changeHandler}
          />

          <label htmlFor="role">Role</label>
          <input
            type="text"
            name="role"
            placeholder="Member Role"
            value={member.role}
            onChange={changeHandler}
          />
    
          <button type="submit">Add Member</button>
      </form>
    );
};

export default Form;