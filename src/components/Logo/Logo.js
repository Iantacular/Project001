import React from 'react';
import Tilt from 'react-parallax-tilt';
import './logo.css';
import flexing from './flexing.png';

const Logo = () => {
    return (
    <Tilt className = "Tilt br2 shadow-2" options={{ max : 50 }} style={{
        display: 'flex', justifyContent: 'flex-start',
        height: '100px', width: '100px', backgroundColor: 'darkgreen'
        }}>
      <div className="Tilt-inner"><img src={flexing} alt="Flexing Arm Logo"/>
      </div>
    </Tilt>
    );
}

export default Logo;