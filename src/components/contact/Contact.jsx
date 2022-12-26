import React, { useState } from 'react'
import './Contact.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Button from '@mui/material/Button';

function Contact() {
  const [message, setMessage] = useState(false)
  const handleSubmit = (e) => {
     e.preventDefault();
     setMessage(true)
  }
  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
      <form onSubmit={handleSubmit}> 
        <input type="text" placeholder='Email'/>
        <textarea placeholder='Message'></textarea>
        <button type='submit'>Send</button>
        {message && <span>Thanks I'll reply ASAP :)</span>}
      </form>
      <div className="right-bottom">
       
       <Button
        variant="link"
        color="default"
        className='icon'
        startIcon={<LinkedInIcon />}
        href="https://www.linkedin.com/in/avanish-srivas-300a90194/"
      />
        <Button
        variant="link"
        color="default"
        className='icon'
        startIcon={<GitHubIcon />}
        href="https://github.com/Ava620-bot"
      />
        <Button
        variant="link"
        color="default"
        className='icon'
        startIcon={<InstagramIcon />}
        href="https://www.instagram.com/srivas_avanish07/"
      />
       
      
      </div>
      </div>

    </div>
  )
}

export default Contact