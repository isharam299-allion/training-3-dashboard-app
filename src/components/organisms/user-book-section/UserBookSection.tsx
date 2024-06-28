import styled from "styled-components";
import { tokens } from "../../tokens/DesignTokens";
import React from "react";
import { NextBook } from "../../molecules";
import { FAULT_IN_OUR_STARS } from "../../../utilities/Book.data";

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

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 100px 33px 35px 32px;
`;


const UserBooksSection : React.FC<UserBookSectionProps> = ({isUserSectionOpen}) => (
    <StyledSection isUserSectionOpen={isUserSectionOpen}>
        <Container>
            <NextBook  book={FAULT_IN_OUR_STARS}/>
        </Container>
        
    </StyledSection>
);


export {
    UserBooksSection
}
