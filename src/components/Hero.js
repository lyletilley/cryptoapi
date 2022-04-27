import React from 'react'
import './Hero.css'
import Crypto from '../assets/cryptoimage.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='container'>

                {/* Left Side */}
                <div className='left'>
                    <p>Buy or Sell Crypto 24/7</p>
                    <h1>Invest -- Cryptocurreny</h1>
                    <p>Buy, Sell, and store hundreds of crypto!!!</p>
                    <div className='input-container'>
                        <input type='email' placeholder='Enter your email' />
                        <button className='btn'>Learn More</button>
                    </div>
                </div>


                
                <div className='right'>
                    <div className='img-container'>
                        <img src={Crypto} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero