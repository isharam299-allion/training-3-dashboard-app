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
    width: 775px;
    margin-top: 20px;
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



const TopAuthorBlock: React.FC<TopAuthorsProps> = ({ authorList }) => (
    <StyledDiv>
        <HeadingWrapper>
            <Typography.Heading2>Top Authors</Typography.Heading2>
            <Typography.Hyperlink>View All</Typography.Hyperlink>
        </HeadingWrapper>
        <AuthorsWrapper>
            {
                authorList.map((author, index) => (
                    <TopAuthor author={author} key={index} />
                ))
            }
        </AuthorsWrapper>
    </StyledDiv>
);

export {
    TopAuthorBlock
}