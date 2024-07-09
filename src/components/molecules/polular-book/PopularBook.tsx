import styled from "styled-components";
import { Book } from "../../../utilities/Book.data";
import { IMAGE_TYPE, Thumbnail, Typography } from "../../atoms";

const StyledDiv = styled.div`
    display : flex;
    align-items : center;
    flex-direction : column;
    justify-content : center;
    width: 109px;

    @media (min-width: 391px) {
        width: 126px;
    }
`;

interface BookProps {
    book : Book;
}


const PopularBook : React.FC<BookProps> = ({book}) => (
    <StyledDiv>
        <Thumbnail desktopImgSrc={book.desktopImg} mobileImgSrc={book.mobileImg} altText={book.altText} 
        type={IMAGE_TYPE.POPULAR_BOOK}></Thumbnail>
        <Typography.PopularBookTitle>{book.title}</Typography.PopularBookTitle>
        <Typography.PopularBookAuthor>{book.author.name}</Typography.PopularBookAuthor>
    </StyledDiv>
);

export {PopularBook}
