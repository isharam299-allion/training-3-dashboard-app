import React from "react";
import styled from "styled-components";
import {ReactComponent as LogoSVG } from '../../logo.svg';

const StyledLogo = styled (LogoSVG)`
    height : 41px;
    width : 101px
`;

const Logo : React.FC = () => {
    return <StyledLogo/>
};

export default Logo;