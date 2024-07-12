import styled from "styled-components";
import { tokens } from "../../tokens/DesignTokens";
import React, { useState } from "react";
import { ICON_TYPE, StyledIconBackground, StyledInput, SvgIcon } from "../../atoms";
import { SVG_COMPONENTS } from "../../../assests/svg-icons";
import { useBookSearch } from "../../../custom-hooks/UseBookSearch";

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

const SearchBox : React.FC = () => {
    const [query, setQuery] = useState<string>('');
    const  filteredBooks = useBookSearch(query);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    console.log(filteredBooks);

    return (
        <StyledDiv>
            <StyledInput placeholder="Search your book..." type="text" value={query} onChange={handleInputChange}/>
            <SearchSvgIconBackground $iconType={ICON_TYPE.SEARCH_ICON}>
                <SvgIcon type={ICON_TYPE.SEARCH_ICON} SvgComponent={SVG_COMPONENTS.SEARCH_ICON_SVG} />
            </SearchSvgIconBackground>
        </StyledDiv>
    );
    
};

export {SearchBox}