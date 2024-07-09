import styled from "styled-components";
import { Book } from "../../../utilities/Book.data";
import { tokens } from "../../tokens/DesignTokens";
import { IMAGE_TYPE, Thumbnail, Typography } from "../../atoms";

interface NextBookProps {
    book : Book;
}

const StyledDiv = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 5px;
    padding-right: 15px;
    width: 313px;
    height: 80px;
    border-radius: 14px;
    background-color: ${tokens.colors.bgColorWhite};
    text-align:right;
`;

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 15px;
    margin-top: 12px;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: left;
`;

const NextBook : React.FC<NextBookProps> = ({book}) => (
    <StyledDiv>
        <Wrapper>
            <Thumbnail 
            altText={book.altText} desktopImgSrc={book.desktopImg} mobileImgSrc={book.mobileImg} 
            type={IMAGE_TYPE.READ_NEXT_BOOK}/>
            <TitleWrapper>
                <Typography.NextBookTitle>{book.title}</Typography.NextBookTitle>
                <Typography.NextBookAuthor>{book.author.name}</Typography.NextBookAuthor>
            </TitleWrapper>
        </Wrapper>
       
       <Typography.NextBookDuration>{book.duration}</Typography.NextBookDuration>
       
    </StyledDiv>
);

export {
    NextBook
}