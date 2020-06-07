import React from 'react';
import './socialmedia.css';
import styled from 'styled-components';
import AppTheme from '../context/AppTheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons';


function SocialMedia(props) {
  const page = props.page;
  const currentTheme = AppTheme[page];

  const App = styled.a`
    padding-left: 5px;
    padding-right: 5px;
    color: black;
    
    &:hover {
      color: ${currentTheme.pageColor};
    }
  `;

  return(
    <div className='links-container'>
      {/* LinkedIn */}
      <App href='https:linkedin.com/in/john-galdones' rel='noopener noreferrer' target='_blank'>
        <FontAwesomeIcon icon={faLinkedinIn} size={props.size} />
      </App>
      {/* Github */}
      <App href='https:github.com/jyoshio2' rel='noopener noreferrer' target='_blank'>
        <FontAwesomeIcon icon={faGithub} size={props.size} />
      </App>
      {/* Instagram */}
      <App href='https:instagram.com/j.gal2' rel='noopener noreferrer' target='_blank'>
        <FontAwesomeIcon icon={faInstagram} size={props.size} />
      </App>
      {/* Spotify */}
      <App href='https://open.spotify.com/user/12140620223?si=nex5NvP6TmKhvc9ERyh05Q' rel='noopener noreferrer' target='_blank'>
        <FontAwesomeIcon icon={faSpotify} size={props.size} />
      </App>
    </div>
  );
}

export default SocialMedia;