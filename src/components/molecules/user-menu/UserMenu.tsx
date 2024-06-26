import styled from "styled-components";
import { User } from "../../../utilities/User.data";
import { tokens } from "../../tokens/DesignTokens";
import React from "react";
import { ICON_TYPE, SvgIcon, Typography, UserProfileImg } from "../../atoms";
import { SvgIconAssests } from "../../../assests";
import { on } from "events";

interface UserMenuProps {
    user : User
    onClickUserProfile : () => void;
}


const StyledDiv = styled.div`
    display : flex;
    width: 243px;
    height: 50px;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    border-radius: 30px;
    background-color: ${tokens.colors.bgColorWhite};
    padding: 6px 21px 6px 6px;
`;

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
`;



const UserMenu : React.FC<UserMenuProps> = ({user , onClickUserProfile}) => (
    <StyledDiv>
        <StyledWrapper>
        <UserProfileImg imgUrl={user.profileImg} onClickUserProfile={onClickUserProfile}/>
        <Typography.UserName>{user.name}</Typography.UserName>
        </StyledWrapper>
        <SvgIcon SvgComponent={SvgIconAssests.SVG_COMPONENTS.DOWN_SVG} type={ICON_TYPE.DOWN_ICON} />
    </StyledDiv>
);

export {
    UserMenu
}

