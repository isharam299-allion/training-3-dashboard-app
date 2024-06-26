import React from "react";
import styled from "styled-components";
import { ICON_TYPE, Logo, StyledIconBackground, StyledInput, SvgIcon, Typography } from "../../atoms";
import { SVG_COMPONENTS } from "../../../assests/svg-icons";
import { SearchBox } from "../../molecules";
import { tokens } from "../../tokens/DesignTokens";

const StyledHeader = styled.header`
    display : flex;
    padding : 30px;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    z-index: 1000;
`;

const StyledLanguageDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;

`;

interface HeaderProps {
    onClickLogo : () => void;
    onClickUserIcon : () => void;
}

const Header : React.FC<HeaderProps> = ({onClickLogo, onClickUserIcon}) => (
    <StyledHeader>
        <Logo onClickLogo={onClickLogo}/>
        <SearchBox/>
        <StyledLanguageDiv>
            <Typography.Language>EN</Typography.Language>
            <StyledIconBackground iconType={ICON_TYPE.FLAG_ICON}>
                <SvgIcon type={ICON_TYPE.FLAG_ICON} SvgComponent={SVG_COMPONENTS.UK_KLAG_ICON_SVG}/>
            </StyledIconBackground>
        </StyledLanguageDiv>
        <StyledIconBackground iconType={ICON_TYPE.NOTIFICATION_ICON}>
            <SvgIcon type={ICON_TYPE.NOTIFICATION_ICON} SvgComponent={SVG_COMPONENTS.NOTIFICATION_ICON_SVG}/>
        </StyledIconBackground>
    </StyledHeader>
);

export {Header}