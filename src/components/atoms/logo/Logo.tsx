import React from "react";
import styled from "styled-components";
import {ReactComponent as LogoSVG } from '../../../assests/logo.svg';

const StyledLogo = styled (LogoSVG)`
    height : 41px;
    width : 101px;
    z-index: 1000;
    cursor: pointer;
    margin-right: 90px;
`;

interface LogoProps {
    onClickLogo : () => void;
}

const Logo : React.FC<LogoProps> = ({onClickLogo}) => (
     <StyledLogo onClick={onClickLogo}/>
);

export default Logo;