import styled from "styled-components";
import { Book } from "../../../utilities/Book.data";
import { IMAGE_TYPE, Thumbnail, Typography } from "../../atoms";

const StyledDiv = styled.div`
    display : flex;
    justify-content : center;
`;

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: 15px;
    margin-top: 12px;
`;


interface BookItemProps {
    book : Book;
}


const BookItem : React.FC<BookItemProps> = ({book}) => (
    <StyledDiv>
        <Thumbnail desktopImgSrc={book.desktopImg} mobileImgSrc={book.mobileImg} altText={book.altText} 
        type={IMAGE_TYPE.POPULAR_BOOK}></Thumbnail>
        <TitleWrapper>
            <Typography.PopularBookTitle>{book.title}</Typography.PopularBookTitle>
            <Typography.PopularBookAuthor>{book.author.name}</Typography.PopularBookAuthor>
        </TitleWrapper>
    </StyledDiv>
);

export {BookItem}
