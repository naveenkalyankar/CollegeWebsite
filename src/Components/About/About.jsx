import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
   <div className="about">
    <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
    </div>
    <div className="about-right">
      <h3>ABOUT UNIVERSITY</h3>
      <h2>nurturing Tommorow's Leaders Today</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae enim iusto, quibusdam iure, fugit numquam corporis soluta beatae nostrum, magnam voluptas ipsa aliquam assumenda tempora facere ipsum sit repellat voluptatibus?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis assumenda, eos dolorem ad voluptatem expedita corrupti? Pariatur architecto perferendis molestiae voluptatibus aperiam. </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis assumenda tempore, porro quasi perferendis cum harum beatae atque aliquid amet quae accusantium molestias repellendus qui saepe repellat. Ex, ab quis.</p>
    </div>
   </div>
  )
}

export default About