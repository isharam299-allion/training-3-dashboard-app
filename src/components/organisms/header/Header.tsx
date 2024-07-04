import React from "react";
import styled from "styled-components";
import { ICON_TYPE, Logo, StyledIconBackground, SvgIcon, Typography } from "../../atoms";
import { SearchBox, UserMenu } from "../../molecules";
import { SvgFlagAssests, SvgIconAssests } from "../../../assests";
import { USER_THANH_PHAM } from "../../../utilities/User.data";

const StyledHeader = styled.header`
    display : flex;
    flex-wrap: wrap;
    width: 390px;
    max-width : 390px;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    padding : 20px;
    z-index: 1000;

    @media (min-width: 391px) {
        display : flex;
        flex-wrap: nowrap;
        height: 115px;
        width: 1440px;
        max-width : 1440px;
        padding : 35px 33px 30px 55px;
    }
`;


const StyledLanguageDiv = styled.div`
    display: flex;
    height: 50px;
    align-items: center;
    justify-content: space-between;
    gap: 15px;

`;

const LogoWrapper = styled.div`
  display: flex;
  order: 0;
  justify-content:center;
  align-items: center;
`;

const StyledUserMenuWrapper = styled.div`
    display : flex;
    order: 1;
    align-items: center;
    justify-content : space-between;
    gap: 15px;
    height: 50px;
    max-width: 313px;
    z-index: 1000;
    padding: 0px;

    @media (min-width: 391px) {
        order: 2;
        margin-left: 72px;
        gap: 20px;
    }
`;

const StyledSearchBoxWrapper = styled.div`
    display : flex;
    width: 350px;
    order: 2;
    align-items: center;
    justify-content : space-between;
    gap: 15px;
    height: 50px;

    @media (min-width: 391px) {
        order: 1;
        gap: 190px;
        width: 775px;
        max-width: 775px;
    }
    
`;

interface HeaderProps {
    onClickLogo : () => void;
    onClickUserIcon : () => void;
}

const Header : React.FC<HeaderProps> = ({onClickLogo, onClickUserIcon}) => (
    <StyledHeader>
        <LogoWrapper>
            <Logo onClickLogo={onClickLogo}/>
        </LogoWrapper>
        
        <StyledSearchBoxWrapper>
            <SearchBox/>
            <StyledLanguageDiv>
                <Typography.Language>EN</Typography.Language>
                <StyledIconBackground iconType={ICON_TYPE.FLAG_ICON}>
                    <SvgIcon type={ICON_TYPE.FLAG_ICON} SvgComponent={SvgFlagAssests.SVG_FLAGS.FLAG_UK_SVG}/>
                </StyledIconBackground>
            </StyledLanguageDiv>
        </StyledSearchBoxWrapper>

        <StyledUserMenuWrapper>
            <StyledIconBackground iconType={ICON_TYPE.NOTIFICATION_ICON}>
                <SvgIcon type={ICON_TYPE.NOTIFICATION_ICON} SvgComponent={SvgIconAssests.SVG_COMPONENTS.NOTIFICATION_ICON_SVG}/>
            </StyledIconBackground>
            <UserMenu user={USER_THANH_PHAM} onClickUserProfile={onClickUserIcon} />
        </StyledUserMenuWrapper>
        
    </StyledHeader>
);

export {Header}