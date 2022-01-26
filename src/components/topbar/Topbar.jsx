import React from 'react';
import "./topbar.scss";
import {Person,Mail} from "@material-ui/icons"

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className='wrapper'>
        <div className="left">
          <a href='#intro' className='logo'>genius.</a>
          <div className="itemContainer"></div>
          <Person className='icon'/>
          <span>+977 9861288506</span>
          <div className="itemContainer"></div>
          <Mail className='icon'/>
          <span>bhawanadhamala75@gmail.com</span>
        </div>
        <div className="right">
          <div className="hamburger"></div>

            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          
        </div>
      </div>
    </div>
  )
}
