import React from "react";
import styled from "styled-components";
import { Typography } from "../../atoms";
import { Book } from "../../../utilities/Book.data";

const StyledDiv= styled.div`
    display: flex;
    justify-content: center;
`;

interface BookListProps {
    books : Book[];
}

const BookList : React.FC<BookListProps> = ({books}) => (
    <StyledDiv>
        <Typography.Heading2>Available Books</Typography.Heading2>
        {
            books.map((book, index) => (
                <Typography.PopularBookTitle key={index}>{book.title}</Typography.PopularBookTitle>
            ))
        }
    </StyledDiv>
);

export {
    BookList
}