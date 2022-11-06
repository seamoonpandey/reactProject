
import Logo from '../my_logo.png'
import React from 'react'


const NavBar = () => {
  return (
    <>
      <div>
        <nav>
          <a href='/'>HOME</a>
          <a href='/about'>ABOUT</a>
          <a href='/MyBuilds'>My Builds</a>
          <a href='/myinfo'>My Info</a>
          <div className={`animation start-home`}></div>
        </nav>
        <div className='container' >
          <img src={Logo} id='mainLogo' alt='logo'/>
        </div>
      </div>
    </>
  )
}


export default NavBar
