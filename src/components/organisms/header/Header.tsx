import React from "react";
import styled from "styled-components";
import { ICON_TYPE, Logo, StyledIconBackground, StyledInput, SvgIcon, Typography, UserProfileImg } from "../../atoms";
import { SearchBox, UserMenu } from "../../molecules";
import { SvgFlagAssests, SvgIconAssests } from "../../../assests";
import { USER_THANH_PHAM } from "../../../utilities/User.data";

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
                <SvgIcon type={ICON_TYPE.FLAG_ICON} SvgComponent={SvgFlagAssests.SVG_FLAGS.FLAG_UK_SVG}/>
            </StyledIconBackground>
        </StyledLanguageDiv>
        <StyledIconBackground iconType={ICON_TYPE.NOTIFICATION_ICON}>
            <SvgIcon type={ICON_TYPE.NOTIFICATION_ICON} SvgComponent={SvgIconAssests.SVG_COMPONENTS.NOTIFICATION_ICON_SVG}/>
        </StyledIconBackground>
        <UserMenu user={USER_THANH_PHAM} />
        <UserProfileImg imgUrl={USER_THANH_PHAM.profileImg}/>
    </StyledHeader>
);

export {Header}