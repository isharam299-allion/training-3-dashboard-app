import styled from "styled-components";
import { tokens } from "../../tokens/DesignTokens";
import React from "react";
import { NextBook, PlayBooksBlock, WeekReadBooksBlock } from "../../molecules";
import { FAULT_IN_OUR_STARS, NEVER_EAT_ALONE, THE_BOOK_THEIF } from "../../../utilities/Book.data";
import { Typography } from "../../atoms";
import { USER_THANH_PHAM } from "../../../utilities/User.data";

interface UserBookSectionProps {
    $isUserSectionOpen : boolean;
}

const StyledSection = styled.aside<Pick<UserBookSectionProps, '$isUserSectionOpen'>>`
    display: ${ props => (props.$isUserSectionOpen ? 'flex' : 'none')};
    position: absolute;
    top: 0;
    right: 0;
    width: 378px;
    height: auto;
    max-height: 1024px;
    border-radius: 40px;
    padding-top: 115px;
    opacity: 0px;
    background-color: ${tokens.colors.bgColorLightGreen};
    transform: ${ props => (props.$isUserSectionOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease;

    @media (min-width: 391px) {
        height: auto;
        transform: ${ props => (props.$isUserSectionOpen ? 'translateY(0)' : 'translateY(-100%)')};
        transition: transform 0.3s ease;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto 33px 35px 32px;
`;

const BookWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 10px;
    margin-bottom: 33px;
`;


const UserBooksSection : React.FC<UserBookSectionProps> = ({$isUserSectionOpen: isUserSectionOpen}) => (
    <StyledSection $isUserSectionOpen={isUserSectionOpen}>
        <Container>
            <PlayBooksBlock readingBooks={USER_THANH_PHAM.readingBooks}/>
            <Typography.Heading3>Next Books</Typography.Heading3>
            <BookWrapper>
                <NextBook  book={FAULT_IN_OUR_STARS}/>
                <NextBook  book={NEVER_EAT_ALONE}/>
                <NextBook  book={THE_BOOK_THEIF}/>
            </BookWrapper>
            <Typography.Heading3>Daily Work</Typography.Heading3>
            <WeekReadBooksBlock readCount={3} readingCount={5}/>
        </Container>
        
    </StyledSection>
);


export {
    UserBooksSection
}
