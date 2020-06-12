import React from 'react';
import styled from 'styled-components';
import './skillitem.css'

function SkillItem(props) {
  const Item = styled.span`
    :hover {
      background-color: ${props.color};
    }
  `;

  return (
    <Item className='item'>{props.text}</Item>
  );
}

export default SkillItem;