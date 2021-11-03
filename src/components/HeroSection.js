import React from 'react';
import { Button } from './Button';

import './heroSection.css';

import video3 from '../assets/videos/video-3.mp4';

// import App.css if you need it

const HeroSection = () => {
    return (
        <div className='hero-container'>
            <video src={ video3 } autoPlay loop muted/>
            <h1>UN AMANECER DISTINTO</h1>
            <p>¿Qué es lo que esperas?</p>
            <div className='hero-btns'>
                <Button 
                    className='btns' 
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    COMIENZA YA
                </Button>
                <Button 
                    className='btns' 
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                    VÍDEO PROMOCIONAL <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    );
};

export default HeroSection;
