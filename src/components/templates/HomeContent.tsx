import styled from "styled-components";
import { tokens } from "../tokens/DesignTokens";
import { SvgIconAssests } from "../../assests";
import { ReadInfoBlock, TrendingBookBlock } from "../molecules";
import { PopularBookBlock, TopAuthorBlock } from "../organisms";
import { POPULAR_BOOKS } from "../../utilities/Book.data";
import { TOP_AUTHORS } from "../../utilities/Author.data";
import { ReadInfoProps } from "../molecules/read-info/ReadInfoBlock";

const Separator = styled.div`
    border: 1px solid ${tokens.colors.separatorColor};
    height : 1px;
    width : 100%;
    max-width: 781px;
`;

const ReadInfosWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 27px;

    @media(min-width: 391px) {
        max-width: 781px;
        flex-direction: row;
    }
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
        count: "03",
        title: "Reading Books",
        icon: SvgIconAssests.SVG_COMPONENTS.READING_BOOKS_ICON_SVG
    }
]

const HomeContent : React.FC = () => (
    <>
        <TrendingBookBlock/>
        <PopularBookBlock bookList={POPULAR_BOOKS}/>
        <Separator/>
        <TopAuthorBlock  authorList={TOP_AUTHORS}/>
        <ReadInfosWrapper>
            {
                readinfoList.map((info, index) => (
                    <ReadInfoBlock count={info.count} title={info.title} icon={info.icon}  key={index}/>
                ))
            } 
        </ReadInfosWrapper>
    </>
);


export {
    HomeContent
}