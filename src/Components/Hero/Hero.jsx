import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <>
    <div className='hero navcontainer'>
         <div className="hero-text">
          <h1>we ensure better education for a better world</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda fuga obcaecati enim vel dolores sint animi voluptatum eum quasi nihil in corrupti ea, ex, magni velit nesciunt minima, necessitatibus error</p>
          <button className='btncontact'>Explore More <img src={dark_arrow} alt="abc" /></button>
         </div>
    </div>
    </>
  )
}

export default Hero