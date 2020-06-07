import React from 'react';
import './footer.css';
import SocialMedia from './socialmedia';

function Footer(props) {
  const page = props.page;

  return(
    <div className='footer-container'>
      <div className='copyright'>
        <p>Copyright &copy; 2020 John Galdones</p>
      </div>
      <SocialMedia size='1x' page={page}/>
    </div>
  );
}

export default Footer;