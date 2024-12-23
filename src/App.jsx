import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/NavBar/Navbar'
import Hero from './Components/Hero/Hero'
import Programms from './Components/programms/Programms'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonial from './Components/Testimonials/Testimonial'
import Contact from './Components/contact/Contact'
import Footer from './Components/Footer/Footer'
import Videoplayer from './Components/Videoplayer/Videoplayer'
import { useState } from 'react'


function App() {

  const [playState , setPlayState ] = useState(false)

  return (
    <>
     <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle = 'Our program' title ='What We Offer'/>
        <Programms/>
        <About setPlayState={setPlayState} />
        <Title subTitle = 'Gallery' title ='Campus Photos'/>
        <Campus/>
        <Title subTitle = 'TESTIMONIALS' title ='What Student Says'/>
        <Testimonial/>
        <Title subTitle = 'Contact Us' title ='Get in Touch'/>
        <Contact/>
        <Footer/>
        </div>
        <Videoplayer playState={playState} setPlayState={setPlayState}/>
     </div>
    </>
  )
}

export default App
