import styled from "styled-components";
import { tokens } from "../../tokens/DesignTokens";
import React from "react";
import { NextBook, WeekReadBooksBlock } from "../../molecules";
import { FAULT_IN_OUR_STARS, NEVER_EAT_ALONE, THE_BOOK_THEIF } from "../../../utilities/Book.data";
import { Typography } from "../../atoms";

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

const BookWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 10px;
    margin-bottom: 33px;
`;


const UserBooksSection : React.FC<UserBookSectionProps> = ({isUserSectionOpen}) => (
    <StyledSection isUserSectionOpen={isUserSectionOpen}>
        <Container>
            <Typography.Heading3>Next Book</Typography.Heading3>
            <BookWrapper>
                <NextBook  book={FAULT_IN_OUR_STARS}/>
                <NextBook  book={NEVER_EAT_ALONE}/>
                <NextBook  book={THE_BOOK_THEIF}/>
            </BookWrapper>
            <Typography.Heading3>Daily Works</Typography.Heading3>
            <WeekReadBooksBlock readCount={3} readingCount={5}/>
        </Container>
        
    </StyledSection>
);


export {
    UserBooksSection
}
