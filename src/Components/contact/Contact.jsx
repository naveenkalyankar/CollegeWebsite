import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "08a265ec-0e55-4d2a-affc-d8f810e27fc7");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


    return (
        <div className="contact">
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon} alt="" /></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, magnam illo impedit repudiandae vel neque tenetur vero quod, quia id unde ut amet dolore excepturi quibusdam voluptates, ullam quo officiis?</p>
                <ul>
                    <li> <img src={mail_icon} alt="" />naveenkalyankar297@gmail.com</li>
                    <li> <img src={phone_icon} alt="" />+91 9632010611</li>
                    <li> <img src={location_icon} alt="" />77 massachsetts Ave , cambridge <br />MA 02139 , United states</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit} >
                    <label >
                        your name
                    </label>
                    <input type="text" name='name' placeholder='Enter your name' required />
                    <label >phone number</label>
                    <input type="tel" name="phone" placeholder='Enter your mobile number' required />
                    <label >write your messages here</label>
                    <textarea name="message" rows="6" placeholder='enter your message' required></textarea>
                    <button type='submit' className='btn dark-btn'> Submit now <img src={white_arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact