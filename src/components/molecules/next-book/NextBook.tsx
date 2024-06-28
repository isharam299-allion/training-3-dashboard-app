import styled from "styled-components";
import { Book } from "../../../utilities/Book.data";
import { tokens } from "../../tokens/DesignTokens";
import { IMAGE_TYPE, Thumbnail, Typography } from "../../atoms";

interface NextBookProps {
    book : Book;
}

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    width: 313px;
    height: 80px;
    border-radius: 14px;
    background-color: ${tokens.colors.bgColorWhite};
`;

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const NextBook : React.FC<NextBookProps> = ({book}) => (
    <StyledDiv>
            <Thumbnail 
        altText={book.altText} desktopImgSrc={book.desktopImg} mobileImgSrc={book.mobileImg} 
        type={IMAGE_TYPE.READ_NEXT_BOOK}/>
        <TitleWrapper>
            <Typography.NextBookTitle>{book.title}</Typography.NextBookTitle>
            <Typography.NextBookAuthor>{book.author.name}</Typography.NextBookAuthor>
        </TitleWrapper>
        <Typography.NextBookDuration>{book.duration}</Typography.NextBookDuration>
    </StyledDiv>
);

export {
    NextBook
}