import React from 'react';
import '../App.css';
import {Button} from './Button';
import {Link} from 'react-router-dom';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='/videos/video-2.mp4' autoPlay loop muted />
        <h1>Intro to Database 370</h1>
        <p>Database Management System</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' link="/view-database">
                <Link to="/view-database" className="nav-link" >VIEW DATABASE</Link>
            </Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' link="/modify-database">
               <Link to="/modify-database" className="nav-link">
                 MODIFY DATABASE <i className='far fa-play-circle' />
               </Link>
            </Button>
    </div>
    </div>
  )
}

export default HeroSection