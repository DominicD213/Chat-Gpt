import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg'

const Footer = () => (
  <div className='gpt3__footer section__padding'>
    <div className='gpt3__footer-heading'>
      <h1 className='gradient__text'>Do you want to step into the future now before other do?</h1>
    </div>
    <div className='gpt3__footer-btn'>
      <p>Request Early Access</p>
    </div>
    <div className='gpt3__footer-links'>
      <div className='gpt3__footer-links_logo'>
        <img src={gpt3Logo} alt='log'></img>
        <p>3180 18th Street, San Francisco</p>
      </div>  
      <div className='gpt3__footer-links_div'>
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Content</p>
      </div>
      <div className='gpt3__footer-links_div'>
        <h4>Company</h4>
        <p>Privacy Policy</p>
        <p>Contact</p>
        <p>Terms Of Service</p>
      </div>
      <div className='gpt3__footer-links_div'>
        <h4>Get in Touch</h4>
        <p>3180 18th Street, San Francisco</p>
        <p>(650) 387-6701</p>
        <p>press@openai.com</p>
      </div>
    </div>
</div>
);

export default Footer;
