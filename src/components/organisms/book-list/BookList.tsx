import React from "react";
import styled from "styled-components";
import { Typography } from "../../atoms";
import { Book } from "../../../utilities/Book.data";
import { BookItem } from "../../molecules";

const StyledDiv= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`;

const HeadingWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    margin-bottom: 20px;
`;

const BooksGrid= styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;

const GridItem = styled.div`
    display: flex;
    flex: 1 1 calc(50% - 20px);
    box-sizing: border-box;
`;

interface BookListProps {
    books : Book[];
}

const BookList : React.FC<BookListProps> = ({books}) => (
    <StyledDiv>
        <HeadingWrapper>
            <Typography.Heading2>Available Books</Typography.Heading2>
        </HeadingWrapper>
        
        <BooksGrid>
        {
            books.map((book, index) => (
                <GridItem>
                    <BookItem book={book} key={index}/>
                </GridItem>
                
            ))
        }
        </BooksGrid>
    </StyledDiv>
);

export {
    BookList
}