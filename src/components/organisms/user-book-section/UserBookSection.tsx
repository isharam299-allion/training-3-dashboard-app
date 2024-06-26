import styled from "styled-components";
import { tokens } from "../../tokens/DesignTokens";
import React from "react";

interface UserBookSectionProps {
    isUserSectionOpen : boolean;
}

const StyledSection = styled.aside<Pick<UserBookSectionProps, 'isUserSectionOpen'>>`
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    width: 378px;
    height: 100vh;
    border-radius: 40px;
    opacity: 0px;
    background-color: ${tokens.colors.bgColorLightGreen};
    transform: ${ props => (props.isUserSectionOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease;
`;


const UserBooksSection : React.FC<UserBookSectionProps> = ({isUserSectionOpen}) => (
    <StyledSection isUserSectionOpen={isUserSectionOpen}>

    </StyledSection>
);


export {
    UserBooksSection
}
