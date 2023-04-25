import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='/videos/video-2.mp4' autoPlay loop muted />
        <h1>Intro to Database 370</h1>
        <p>Database Management System</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                VIEW DATABASE
            </Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                MODIFY DATABASE <i className='far fa-play-circle' />
            </Button>
    </div>
    </div>
  )
}

export default HeroSection