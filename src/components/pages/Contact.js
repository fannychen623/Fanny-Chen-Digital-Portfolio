import React, { useState } from 'react';
import '../../styles/Contact.css';

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default function Contact() {

    // Here we set two state variables for firstName and lastName using `useState`
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleInputChange = (e) => {
      // Getting the value and name of the input which triggered the change
      const { name, value } = e.target;

      // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
      return name === 'name' ? setName(value) : name === 'email' ? setEmail(value) : setMessage(value)
    };
  
    const handleLoseFocus = (e) => {
      // Getting the value and name of the input which triggered the change
      const { name, value } = e.target;

      if (!value) {
        setErrorMessage('All fields are required');
      // Alert the user their first and last name, clear the inputs
      alert(`${name} is required.`);
        // We want to exit out of this code block if something is wrong so that the user can correct it
        return;
      }
    };

    const handleFormSubmit = (e) => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      e.preventDefault();
  
      if (!validateEmail(email)) {
        setErrorMessage('Email is invalid');
        // We want to exit out of this code block if something is wrong so that the user can correct it
        return;
      }

      // Alert the user their first and last name, clear the inputs
      alert(`Hi ${name}! Thank you for visiting and leaving a message.`);
      setName('');
      setEmail('');
      setMessage('');
    };

  return (
    <div className="contact">
      <h1>Contact Me!</h1>
      <form className="form">
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          onBlur={handleLoseFocus}
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={handleLoseFocus}
          type="text"
          placeholder="Email"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur={handleLoseFocus}
          type="text"
          placeholder="Message"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
