import styled from "styled-components";
import { tokens } from "../../tokens/DesignTokens";
import React from "react";
import { ICON_TYPE, StyledIconBackground, StyledInput, SvgIcon } from "../../atoms";
import { SVG_COMPONENTS } from "../../../assests/svg-icons";

const StyledDiv = styled.div`
    display: flex;
    height: 50px;
    width: 492px;
    border-radius: 30px;
    background-color: ${tokens.colors.bgColorSearchBar};
    justify-contentL: space-between;
    align-items: center;
    padding: 0px 5px;
`;


const SearchBox : React.FC = () => (
    <StyledDiv>
        <StyledInput placeholder="Search your book..." />
        <StyledIconBackground iconType={ICON_TYPE.SEARCH_ICON}>
            <SvgIcon type={ICON_TYPE.SEARCH_ICON} SvgComponent={SVG_COMPONENTS.SEARCH_ICON_SVG}/>
        </StyledIconBackground>
    </StyledDiv>
);

export {SearchBox}