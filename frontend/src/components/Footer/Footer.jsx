import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="logo" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sit repellat obcaecati, aliquam earum vel illo recusandae nobis vero tempora facilis pariatur libero, omnis ipsum minima inventore error.</p>
            <div className="footer-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+92 301-4333430</li>
                <li>dawoodfaisal19@gmail.com</li>
            </ul>
        </div>
        
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 © <a href="https://dawoodfaisal.tech" target='_blank'>Dawood Faisal</a> - All Right Reserved.</p>
    </div>
  )
}

export default Footer
