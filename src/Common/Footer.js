import React from 'react'
import './Footer.scss'
import footer_logo from './Images/logo 2.png' 
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { ImWhatsapp } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-logo'>
           <img src={footer_logo} alt='Footer logo'/>
           <p><span>Shop</span>hub</p>
        </div>

        <ul className='footer-links'>
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className='footer-social-icons'>
           <div className='footer-icons-container'>
              <label><FaInstagram /></label>
           </div>

           <div className='footer-icons-container'>
              <label><FaXTwitter /></label>
           </div>

           <div className='footer-icons-container'>
              <label><ImWhatsapp /></label>
           </div>

           <div className='footer-icons-container'>
              <label><FaFacebook /></label>
           </div>
        </div>

           <div className='footer-copyright'>
            <hr/>
            <p>Copyright @ 2025 - All Right Reserved</p>
           </div>
        
    </div>
  )
}


export default Footer
