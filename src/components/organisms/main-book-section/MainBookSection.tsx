import styled from "styled-components";
import { TrendingBookBlock } from "../../molecules";
import { PopularBookBlock } from "../popular-books-block/PopularBookBlock";
import { POPULAR_BOOKS } from "../../../utilities/Book.data";
import { TopAuthorBlock } from "../top-authors-block/TopAuthorBlock";
import { TOP_AUTHORS } from "../../../utilities/Author.data";
import { tokens } from "../../tokens/DesignTokens";

interface MainSectioProps {
    isMenuOpen : boolean;
    isUserSectionOpen: boolean;
}

const StyledSection = styled.section<Pick<MainSectioProps, 'isMenuOpen' | 'isUserSectionOpen'>>`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    margin-left: ${ props => (props.isMenuOpen ? '247px' : '20px')};
    margin-right: ${ props => (props.isUserSectionOpen ? '413px' : '20px')};
    transition: margin 0.3s ease;
`;

const Separator = styled.div`
    border: 1px solid ${tokens.colors.separatorColor};
    height : 1px;
    width : 100%;
`;

const MainBookSection : React.FC<MainSectioProps> = ({isMenuOpen, isUserSectionOpen}) => (
    <StyledSection isMenuOpen={isMenuOpen} isUserSectionOpen={isUserSectionOpen}>
        <TrendingBookBlock/>
        <PopularBookBlock bookList={POPULAR_BOOKS}/>
        <Separator/>
        <TopAuthorBlock  authorList={TOP_AUTHORS}/>
    </StyledSection>
);

export {
    MainBookSection
}
