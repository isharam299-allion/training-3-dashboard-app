import{styled, createGlobalStyle} from "styled-components";
import { tokens } from "../../tokens/DesignTokens";

const GlobalStyles = createGlobalStyle`

    body {
        font-family : ${tokens.fontFamily};
        background-color : ${tokens.colors.bgColorPage};    
    }

    * {
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
    }
    
`;

const Heading2 = styled.h2`
    color : ${tokens.colors.fontColorHeading2};
    font-size: ${tokens.fontSizes.fsSemiLarge24};
    font-weight: ${tokens.fontWeights.bold};
    line-height: 32.74px;
    letter-spacing: ${tokens.letterSpacing.ls1};
    text-align: left;
`;

const Heading3 = styled.h3`
    color : ${tokens.colors.fontColorHeading3};
    font-size: ${tokens.fontSizes.fsLarge22};
    font-weight:  ${tokens.fontWeights.bold};
    line-height: 30.01px;
    letter-spacing: ${tokens.letterSpacing.ls3};
    text-align: left;
`;

const Hyperlink = styled.a`
    color : ${tokens.colors.bgColorGreen};
    font-size: ${tokens.fontSizes.fsMedium18};
    font-weight: ${tokens.fontWeights.semiBold};
    line-height: 24.55px;
    text-align: right;
`;

const PopularBookTitle = styled.h4`
    color : ${tokens.colors.fontColorPopularBookTitle};
    font-size: ${tokens.fontSizes.fsSemiSmall16};
    font-weight:  ${tokens.fontWeights.bold};
    line-height: 21.82px;
    text-align: center;
`;

const PopularBookAuthor = styled.h5`
    color : ${tokens.colors.fontColorPopularBookAuthor};
    font-size: ${tokens.fontSizes.fsExtraSmall14};
    font-weight: ${tokens.fontWeights.regular};
    line-height: 19.1px;
    text-align: center;
`;


export {GlobalStyles, Heading2, Heading3, Hyperlink, PopularBookTitle, PopularBookAuthor};