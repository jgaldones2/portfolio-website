import React from 'react';
import './footer.css';
import SocialMedia from './socialmedia';

function Footer() {
  return(
    <div className='footer-container'>
      <div className='copyright'>
        <h5>Copyright &copy; 2020 John Galdones</h5>
      </div>
      <SocialMedia />
    </div>
  );
}

export default Footer;