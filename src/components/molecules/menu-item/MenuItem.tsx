import React from "react";
import styled from "styled-components";
import { ICON_TYPE, StyledIconBackground, SvgIcon, Typography } from "../../atoms";
import { tokens } from "../../tokens/DesignTokens";

interface MenuItemProp {
    isActive: boolean;
    content : string;
    MenuIconSvg : React.FC;
    onClick : () => void;
}

const StyledListItem = styled.li<Pick<MenuItemProp, 'isActive'>>`
    display: flex;
    align-items: center;
    gap: 20px;
    width: 172px;
    height: 50px;
    border-radius: 30px;
    padding: 7px;
    list-style-type : none;
    background: ${props => props.isActive ? tokens.colors.bgColorOrange : ''};
`;

const MenuItem : React.FC<MenuItemProp> = ({content, MenuIconSvg , isActive , onClick}) => (
    <StyledListItem isActive={isActive} onClick={onClick}>
        <StyledIconBackground iconType={ICON_TYPE.MENU_ICON} >
            <SvgIcon SvgComponent={MenuIconSvg} type={ICON_TYPE.MENU_ICON}/>
        </StyledIconBackground>
        <Typography.NavLink isActive={isActive}>{content}</Typography.NavLink>
    </StyledListItem>
);

export {
    MenuItem
}