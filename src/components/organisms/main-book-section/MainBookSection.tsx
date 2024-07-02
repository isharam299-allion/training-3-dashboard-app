import styled from "styled-components";
import { ReadInfoBlock, TrendingBookBlock } from "../../molecules";
import { PopularBookBlock } from "../popular-books-block/PopularBookBlock";
import { POPULAR_BOOKS } from "../../../utilities/Book.data";
import { TopAuthorBlock } from "../top-authors-block/TopAuthorBlock";
import { TOP_AUTHORS } from "../../../utilities/Author.data";
import { tokens } from "../../tokens/DesignTokens";
import { SvgIconAssests } from "../../../assests";
import { ReadInfoProps } from "../../molecules/read-info/ReadInfoBlock";

interface MainSectioProps {
    isMenuOpen : boolean;
    isUserSectionOpen: boolean;
}

const StyledSection = styled.section<Pick<MainSectioProps, 'isMenuOpen' | 'isUserSectionOpen'>>`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    max-width: 1440px;
    margin-left: ${ props => (props.isMenuOpen ? '247px' : '20px')};
    margin-right: ${ props => (props.isUserSectionOpen ? '413px' : '20px')};
    transition: margin 0.3s ease;
`;

const Separator = styled.div`
    border: 1px solid ${tokens.colors.separatorColor};
    height : 1px;
    width : 100%;
    max-width: 781px;
`;

const ReadInfosWrapper = styled.div`
    display: flex;
    width : 100%;
    justify-content: space-between;
    max-width: 781px;
    align-items: center;
`;


const readinfoList : ReadInfoProps[] = [
    {
        count: "20",
        title: "Read Books",
        icon: SvgIconAssests.SVG_COMPONENTS.READ_BOOKS_ICON_SVG
    },
    {
        count: "20",
        title: "Authors",
        icon: SvgIconAssests.SVG_COMPONENTS.AUTHORS_SVG
    },
    {
        count: "5",
        title: "Reading Books",
        icon: SvgIconAssests.SVG_COMPONENTS.READING_BOOKS_ICON_SVG
    }
]

const MainBookSection : React.FC<MainSectioProps> = ({isMenuOpen, isUserSectionOpen}) => (
    <StyledSection isMenuOpen={isMenuOpen} isUserSectionOpen={isUserSectionOpen}>
        <TrendingBookBlock/>
        <PopularBookBlock bookList={POPULAR_BOOKS}/>
        <Separator/>
        <TopAuthorBlock  authorList={TOP_AUTHORS}/>
        <ReadInfosWrapper>
        {
            readinfoList.map((info, index) => (
                <ReadInfoBlock count={info.count} title={info.title} icon={info.icon} />
            ))
        }
        
        </ReadInfosWrapper>
    </StyledSection>
);

export {
    MainBookSection
}
