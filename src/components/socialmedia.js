import React, { useContext } from 'react';
import './socialmedia.css';
import styled from 'styled-components';
import AppTheme from '../context/AppTheme';
import ThemeContext from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons';


function SocialMedia() {
  const theme = useContext(ThemeContext);
  const currentTheme = AppTheme[theme];

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
        <FontAwesomeIcon icon={faLinkedinIn} size='2x' />
      </App>
      {/* Github */}
      <App href='https:github.com/jyoshio2' rel='noopener noreferrer' target='_blank'>
        <FontAwesomeIcon icon={faGithub} size='2x' />
      </App>
      {/* Instagram */}
      <App href='https:instagram.com/j.gal2' rel='noopener noreferrer' target='_blank'>
        <FontAwesomeIcon icon={faInstagram} size='2x' />
      </App>
      {/* Spotify */}
      <App href='https://open.spotify.com/user/12140620223?si=nex5NvP6TmKhvc9ERyh05Q' rel='noopener noreferrer' target='_blank'>
        <FontAwesomeIcon icon={faSpotify} size='2x' />
      </App>
    </div>
  );
}

export default SocialMedia;