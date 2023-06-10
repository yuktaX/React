import React from 'react';
import ReactDOM from 'react-dom';

export default function Hero() {
    return (
        <section className='hero'>
            <img className='hero-img'src={require('../images/grid.png')} />
            <h1 className='hero-title'>Online Experiences</h1>
            <h4 className='hero-desc'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</h4>
        </section>
    )
}