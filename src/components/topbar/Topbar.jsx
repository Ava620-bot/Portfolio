import React from 'react'
import './Topbar.scss';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';

function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={'topbar '+(menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
            <img src="https://m.media-amazon.com/images/I/31AWFCkio3L._SY355_.jpg" className='logo' alt=''/>
            {/* <a href='#contact' className='logo'>Avanish Srivas</a> */}
        <div className="itemContainer">
           <PersonIcon className='icon'/>
           <span>+91 9919417625</span>
        </div>
        <div className="itemContainer">
           <EmailIcon className='icon'/>
           <span>avanish07srivas@gmail.com</span>
        </div>

        </div>

        <div className="right">
            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar