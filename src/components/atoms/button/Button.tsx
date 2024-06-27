import styled from "styled-components";
import { tokens } from "../../tokens/DesignTokens";
import React from "react";

interface ButtonProps {
    title : string
}

const StyledButton = styled.button`
    text-align: center;
    width: 139px;
    height: 42px;
    border-radius: 30px;
    color: ${tokens.colors.bgColorWhite};
    background-color: ${tokens.colors.bgColorOrange};
    font-family: ${tokens.fontFamily.fontFamilyNunito};
    font-size: ${tokens.fontSizes.fsExtraSmall14};
    font-weight: ${tokens.fontWeights.extraBold};
    line-height: ${tokens.lineHeights.lineHeight19};
    letter-spacing: ${tokens.letterSpacing.ls2};
    margin: 14px 0px;
    border: none;
`;

const Button : React.FC<ButtonProps> = ({title}) => (
    <StyledButton>
        {title}
    </StyledButton>
);

export {
    Button
}