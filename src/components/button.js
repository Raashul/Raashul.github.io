import styled from 'styled-components';

export const NavButton = styled.a`
  color: ${(props) => props.color ? props.color : 'inherit'}
  border: 2px solid #0070FF;
  cursor: pointer;
  height: 50px;
  width: 80px;
`

export const HoverLinks = styled.a`
  &:hover {
    border-bottom: 3px solid ${(props) => props.color ? props.color : 'inherit'}
  }
`
