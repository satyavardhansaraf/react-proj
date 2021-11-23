import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>Lorem Ipsum</h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <div className='hero-btns'>
      <Link to='/sign-up' className='btn-mobile'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            GET STARTED
          </Button>
        </Link>
        <Link to='/about-us' className='btn-mobile'>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >
            LEARN MORE
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
