import styled from "styled-components";
import { tokens } from "../../tokens/DesignTokens";
import React, { useState } from "react";
import { ICON_TYPE, StyledIconBackground, StyledInput, SvgIcon } from "../../atoms";
import { SVG_COMPONENTS } from "../../../assests/svg-icons";
import { useBookSearch } from "../../../custom-hooks/UseBookSearch";
import { useNavigate } from "react-router-dom";
import { Book } from "../../../utilities/Book.data";

const StyledDiv = styled.div`
    display: flex;
    flex: none;
    height: 50px;
    width: auto;
    border-radius: 30px;
    background-color: ${tokens.colors.bgColorSearchBar};
    justify-contentL: space-between;
    align-items: center;
    padding: 0px 5px;

    @media (min-width: 391px) {
        display: flex;
        width: 492px;
    }
`;

const SearchSvgIconBackground = styled(StyledIconBackground)`
    cursor : pointer;
`;

interface SearchBarProps{
    setSearchBooks  : (searchBooks : Book[]) => void;
}

const SearchBox : React.FC<SearchBarProps> = ({setSearchBooks}) => {
    const [query, setQuery] = useState<string>('');
    const  filteredBooks = useBookSearch(query);
    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    console.log(filteredBooks);

    const handleSearch = () => {
        navigate(`/search/`);
        setSearchBooks(filteredBooks);
    }

    return (
        <StyledDiv>
            <StyledInput placeholder="Search your book..." type="text" value={query} onChange={handleInputChange}/>
            <SearchSvgIconBackground $iconType={ICON_TYPE.SEARCH_ICON} onClick={handleSearch}>
                <SvgIcon type={ICON_TYPE.SEARCH_ICON} SvgComponent={SVG_COMPONENTS.SEARCH_ICON_SVG} />
            </SearchSvgIconBackground>
        </StyledDiv>
    );
    
};

export {SearchBox}