import React, { useContext } from 'react';
import styled from 'styled-components';
import AppTheme from '../context/AppTheme';
import ThemeContext from '../context/ThemeContext';

function IllustrationList(props) {
  const theme = useContext(ThemeContext);
  const currentTheme = AppTheme[theme];

  const IllustrationProject = styled.a`
    color: ${currentTheme.fontColor}
  `;

  function togglePopup() {
    
  }

  function ProjectPopup(props) {

  }

  function openProject(item) {
    return(
      <ProjectPopup projects={item} />
    )
  } 

  function Illustrations() {
    return props.illustrations.Illustrations.map((item) => {
      return(
        <IllustrationProject onClick={ openProject(item) }>{item.ProjectTitle}</IllustrationProject>
      )
    });
  }

  return(
    <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', flexDirection:'column'}}>
      <p style={{ fontSize:'30px' }}>{ props.illustrations.General }</p>
      <Illustrations/>
    </div>
  );
}

export default IllustrationList;