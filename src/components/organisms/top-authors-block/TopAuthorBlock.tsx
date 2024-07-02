import styled from "styled-components";
import { Typography } from "../../atoms";
import { TopAuthor } from "../../molecules";
import { Author } from "../../../utilities/Author.data";

interface TopAuthorsProps {
    authorList: Author[];
}

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 390px;
    margin-top: 20px;

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

const AuthorsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    margin: 15px 0px 19px 0px;
`;



const TopAuthorBlock: React.FC<TopAuthorsProps> = ({ authorList }) => {
    const displayedAuthors = window.innerWidth <= 390 ? authorList.slice(0, 3) : authorList;
    return(<StyledDiv>
        <HeadingWrapper>
            <Typography.Heading2>Top Authors</Typography.Heading2>
            <Typography.Hyperlink>View All</Typography.Hyperlink>
        </HeadingWrapper>
        <AuthorsWrapper>
            {
                displayedAuthors.map((author, index) => (
                    <TopAuthor author={author} key={index} />
                ))
            }
        </AuthorsWrapper>
    </StyledDiv>);
};

export {
    TopAuthorBlock
}