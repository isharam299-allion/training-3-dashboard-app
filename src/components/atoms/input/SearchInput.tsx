import styled from "styled-components";
import { tokens } from "../../tokens/DesignTokens";


const StyledInput = styled.input`
    height: 25px;
    max-width: 492px;
    font-size: ${tokens.fontSizes.fsMedium18};
    border-radius: 30px;
    border: none;
    background-color: ${tokens.colors.bgColorSearchBar};
    margin: 12px auto 12px 25px;
    padding: 0;

    &:: placeholder {
        color: ${tokens.colors.fontColorPlaceHolder};
    }
`;



export {StyledInput}