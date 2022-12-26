import React, {  useRef } from 'react'
import './Intro.scss';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { init } from 'ityped'
import Typewriter from 'typewriter-effect';

function Intro() {
  const textRef = useRef();
  // useEffect(() => {
  //   init(textRef.current, 
  //     { 
  //       showCursor: false,
  //       backDelay: 1500,
  //       backSpeed:60,
  //        strings: ['Freelancer', 'Designer'], 
  //   });
    
  // }, []);
  
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/Avanish.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'am</h2>
          <h1>Avanish Srivas</h1>
          <h3><span ref={textRef}><Typewriter
  options={{
    strings: ['Web Developer','Freelancer', 'Web Designer'],
    autoStart: true,
    loop: true,
  }}
/>
          </span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
          
           {/* <ExpandMoreIcon /> */}
        </a>
      </div>
    </div>
  )
}

export default Intro