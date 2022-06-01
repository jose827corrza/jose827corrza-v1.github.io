import React from 'react'

import logo from './../logo.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='logo-footer'>
            <img src={logo} alt="logo"  className='App-logo'/>
        </div>
        <div className='msg-footer'>
            <h6>Made with love from Bogota, Colombia  🇨🇴 2022</h6>
        </div>
    </div>
  )
}

export default Footer