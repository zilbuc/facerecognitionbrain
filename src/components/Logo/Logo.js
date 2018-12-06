import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import skull from './skull.png'

const Logo = () => {
  return ( <
    div className = 'ma5 mt0' >
    <
    Tilt className = "Tilt br2 shadow-2"
    options = {
      {
        max: 55
      }
    }
    style = {
      {
        height: 140,
        width: 140
      }
    } >
    <
    div className = "Tilt-inner pa3" > < img style = {
      {
        paddingTop: '3px'
      }
    }
    alt = 'logo'
    src = {
      skull
    }
    /></div >
    <
    /Tilt> < /
    div >
  );
}

export default Logo;
