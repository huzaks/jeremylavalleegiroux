'use client'

import emailjs from "@emailjs/browser";
import { useState, useRef } from 'react';


export default function ContactForm(){

  const [messageSent, setMessageSent] = useState(false);

  const [name, setName] = useState("");
  const handleNameChange = (e) => setName(e.target.value);
  const [errorName, setErrorName] = useState("");
  const valideName = () => {
    if (!name) {
      setErrorName("Name is required");
      return false;
    } else {
      setErrorName("");
      return true;
    }
  };

  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => setEmail(e.target.value);
  const [errorEmail, setErrorEmail] = useState("");
  const valideEmail = () => {
    if (!email) {
      setErrorEmail("Email is required");
      return false;
    } else if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i)) {
      setErrorEmail("Invalid email");
      return false;
    } else {
      setErrorEmail("");
      return true;
    }
  };

  const [message, setMessage] = useState("");
  const handleMessageChange = (e) => setMessage(e.target.value);
  const [errorMessage, setErrorMessage] = useState("");
  const valideMessage = () => {
    if (!message) {
      setErrorMessage("Message is required");
      return false;
    } else if (message.length > 300) {
      setErrorMessage("Message is too long. 300 characters");
      return false;
    } else if (message.length < 5) {
      setErrorMessage("Message is too short");
      return false;
    } else {
      setErrorMessage("");
      return true;
    }
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    let nameValid = valideName();
    let emailValid = valideEmail();
    let messageValid = valideMessage();

    if (nameValid && emailValid && messageValid) {
      setErrorMessage("");
      setErrorEmail("");
      setErrorName("");
      setName("");
      setMessage("");
      setEmail("");

      setMessageSent(true);
      emailjs.sendForm(
        "service_wr35b03",
        "template_vxpgbi9",
        form.current,
        "IkwH83ihR3Ig7mbPI"
      );
      e.target.reset();
    }
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-12 w-full p-8'>
        <label>
          Name
          <input
            type="text"
            name="user_name"
            onChange={handleNameChange}
            onBlur={valideName}
            className='w-full bg-gray-200 rounded-lg p-4'
            placeholder='Enter your name'
          />
          {errorName && <div className='text-red-500 mt-2'>{errorName}</div>}
        </label>
        
        <label>
          Email
          <input
            type="email"
            name="user_email"
            onChange={handleEmailChange}
            onBlur={valideEmail}
            className='w-full bg-gray-200 rounded-lg p-4'
            placeholder='Enter your email'
          />
          {errorEmail && <div className='text-red-500 mt-2'>{errorEmail}</div>}
        </label>
        
        <label>
          Message
          <textarea
            name="message"
            onChange={handleMessageChange}
            onBlur={valideMessage}
            className='w-full resize-none bg-gray-200 rounded-lg p-4 h-52 focus:outline-primary'
            placeholder='Enter your message'
          />
          {errorMessage && <div className='text-red-500 mt-2'>{errorMessage}</div>}
        </label>
        
        <input type="submit" value="Send" className='mt-4 py-4 px-20 bg-primary text-white w-fit rounded-md font-bold hover:-translate-y-1 transition-all self-end cursor-pointer'/>
        {messageSent ? (
          <div style={{ color: "green", alignSelf: 'flex-end' }}>
            Thank you! Your message was sent!
          </div>
        ) : null}
      </form>
    </>
  );
}