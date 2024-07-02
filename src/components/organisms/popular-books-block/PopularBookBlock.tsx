import styled from "styled-components";
import { Typography } from "../../atoms";
import { Book } from "../../../utilities/Book.data";
import { PopularBook } from "../../molecules";

interface PopularBooksProps {
    bookList: Book[];
}

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    max-width: 390px;
    margin-top: 30px;

    @media (min-width: 391px) {
        width: 775px;
        max-width: 775px;
    }
`;

const HeadingWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: bottom;
    gap: 30px
`;

const BooksWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    margin: 15px 0px 19px 0px;
`;



const PopularBookBlock: React.FC<PopularBooksProps> = ({ bookList }) => {
    const displayedBooks = window.innerWidth <= 390 ? bookList.slice(0, 3) : bookList;
    return(
        <StyledDiv>
        <HeadingWrapper>
            <Typography.Heading2>Popular</Typography.Heading2>
            <Typography.Hyperlink>View All</Typography.Hyperlink>
        </HeadingWrapper>

        <BooksWrapper>
            {
                displayedBooks.map((book, index) => (
                    <PopularBook book={book} key={index} />
                ))
            }
        </BooksWrapper>
    </StyledDiv>
    )
};

export {
    PopularBookBlock
}