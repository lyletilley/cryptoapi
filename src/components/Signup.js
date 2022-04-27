import React from 'react'
import './Signup.css'

import Cryptoo from '../assets/trading.jpg'
const Signup = () => {
    return (
        <div className='signup'>
            <div className='container'>

        <div className='left'>
            <img src={Cryptoo}></img>
        </div>
       
        <div className='right'>
                    <h2>Earn passive income through Crypto.</h2>
                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with....
                    </p>
                    <div className='input-container'>
                        <input type='email' placeholder='Enter your email' />
                        <button className='btn'>Learn More Here</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Signup
