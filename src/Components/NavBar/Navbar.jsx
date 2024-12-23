import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {

  const [sticky , setSticky] =useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 530 ? setSticky (true):setSticky(false);    })
  },[])
   const [mobileMenu ,  setMobileMenu ] = useState(false)
  const toggleMenu = ()=>{
    mobileMenu  ?  setMobileMenu(false) : setMobileMenu(true)
  }
  return (
    <nav className={`navcontainer ${sticky? 'dark-nav' : '' }`}>
        <img src={logo} alt="pic" className='navlogo' />
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li><Link to ='hero' smooth ={true} offset ={0} duration={100}>Home</Link></li>
            <li><Link to ='programs' smooth ={true} offset ={-260} duration={100}>Program</Link></li>
            <li><Link to ='about' smooth ={true} offset ={-160} duration={100}>About Us</Link> </li>
            <li><Link to ='campus' smooth ={true} offset ={-260} duration={100}>Campus</Link></li>
            <li><Link to ='testimonials' smooth ={true} offset ={-260} duration={100}>Testimonials</Link></li>
            <li><Link  to ='contact' smooth ={true} offset ={-260} duration={100} className='btncontact'>Contact us</Link></li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar