import React from 'react'

import profile from "./../assets/profile.jpeg";
//import coding from './../assets/anim/73303-coding.json';

const Home = () => {
  return (
    <div className='landing'>
      <div className='landing-img'>
        <h1>
            hey
            <br />
            <strong>i am jose daniel corredor</strong>
        </h1>
        <p>
          I am a backend developer, passionate with tech and IoT.
        </p>
      </div>
      <div className="my-img">
          <img className="img-profile" src={profile} alt="thatsme" />
        </div>
    </div>
  )
}

export default Home