// import package and local style sheet
import React, { useState } from 'react';
import '../../styles/Contact.css';

// function to validate the email input value is formatted correctly
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default function Contact() {
    // set state variables as blank for name, email message, and notifcation
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [notification, setNotification] = useState('');
  
    // update state upon change
    const handleInputChange = (e) => {
      // get the value and name of the input which triggered the change
      const { name, value } = e.target;

      // call either setName, setEmail, or setMessage based on what field the user is typing in
      return name === 'name' ? setName(value) : name === 'email' ? setEmail(value) : setMessage(value)
    };
  
    // display notifcation when focus is lost on input
    const handleLoseFocus = (e) => {
      // get the value and name of the input which triggered the change
      const { name, value } = e.target;

      // if the value is blank, call setNotification with appropriate message
      if (!value) {
        setNotification(`${name} is required`);
        return;
      }
    };

    // event once the submit button is clicked
    const handleFormSubmit = (e) => {
      // prevent the default behavior (refresh page) of the form submit
      e.preventDefault();
  
      // if any field is empty, display notification by calling setNotification
      if (!name || !email || !message) {
        setNotification('Must fill out all fields to submit');
        return;
      }

      // check that the value for email is in the correct format by calling validateEmail and passing in the input
      // if it is not correct, call setNotification to display error message
      if (!validateEmail(email)) {
        setNotification('Email is invalid');
        return;
      }

      // setNotification for successful submit and clear the inputs
      setNotification(`Hi ${name}! Thank you for visiting and leaving a message!`);
      setName('');
      setEmail('');
      setMessage('');
    };

  return (
    // contact form
    <div className="contact">
      <h1>Contact Me!</h1>
      <form className="form">
        {/* name input */}
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          onBlur={handleLoseFocus}
          type="text"
          placeholder="Name"
        />
        {/* email input */}
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={handleLoseFocus}
          type="text"
          placeholder="Email"
        />
        {/* message input */}
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur={handleLoseFocus}
          type="text"
          placeholder="Message"
        />
        {/* submit button */}
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {/* notification display */}
      {notification && (
        <div>
          <p className="error-text">{notification}</p>
        </div>
      )}
    </div>
  );
}
