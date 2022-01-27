import React, { useEffect, useRef } from 'react';
import "./intro.scss"
import { init } from 'ityped'

export default function Intro() {
  const textRef = useRef();

  useEffect(()=> {
    init(textRef.current, { 
      showCursor: true, 
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Developer', 'Designer', 'Content Creator' ], 
    });
  },[])

  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/268061396_1726424224213041_4123349073005550394_n.jpg" alt=""></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I am</h2>
          <h1>Bhawana Dhamala</h1>
          <h3>Begineer <span ref={textRef}></span></h3>
        </div>
        <a href= "#portfolio">
          <img src='assets/down.png' alt=''/>
        </a>
      </div>
    </div>
  )
}
