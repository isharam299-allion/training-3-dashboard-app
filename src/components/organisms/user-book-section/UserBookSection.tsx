import styled from "styled-components";
import { tokens } from "../../tokens/DesignTokens";
import React from "react";

const StyledSection = styled.aside`
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    width: 378px;
    height: 100vh;
    border-radius: 40px;
    opacity: 0px;
    background-color: ${tokens.colors.bgColorLightGreen};
`;


const UserBooksSection : React.FC = () => (
    <StyledSection>

    </StyledSection>
);


export {
    UserBooksSection
}
