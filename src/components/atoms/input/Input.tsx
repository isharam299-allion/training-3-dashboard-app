import styled from "styled-components";
import { tokens } from "../../tokens/DesignTokens";


const StyledInput = styled.input`
    height: 25px;
    max-width: 160px;
    font-size: ${tokens.fontSizes.fsMedium18};
    border-radius: 30px;
    border: none;
    background-color: ${tokens.colors.bgColorSearchBar};
    margin: 6px auto 12px 12px;
    padding: 0;

    &::placeholder {
        color: ${tokens.colors.fontColorPlaceHolder};
        display: none;
    }

    @media (min-width: 391px) {
        max-width: 492px;
        margin: 6px auto 6px 27px;
        &:: placeholder {
            display: flex;
        }
    }
`;

export {StyledInput};

StyledInput.displayName = 'StyledInput';