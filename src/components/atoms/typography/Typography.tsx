import{styled, createGlobalStyle} from "styled-components";
import { tokens } from "../../tokens/DesignTokens";

const GlobalStyles = createGlobalStyle`

    body, html {
        position: relative;
        margin: auto;
        font-family : ${tokens.fontFamily};
        background-color : ${tokens.colors.bgColorPage}; 
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center; 
        align-self: center;

        @media (min-width: 391px) {
            max-width: 1440px;
            max-height: 1024px;
        }
    }

    * {
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
    }
    
`;

const Heading1 = styled.h1`
    font-family: ${tokens.fontFamily.fontFamilyLeMondeLivre};
    color : ${tokens.colors.bgColorWhite};
    font-size: ${tokens.fontSizes.fsExtraLarge30};
    font-weight: ${tokens.fontWeights.extraBold};
    line-height: ${tokens.lineHeights.lineHeight40};
    letter-spacing: ${tokens.letterSpacing.ls5};
    text-align: left;
    margin: 0px;
`;

const Heading2 = styled.h2`
    color : ${tokens.colors.fontColorHeading2};
    font-size: ${tokens.fontSizes.fsSemiLarge24};
    font-weight: ${tokens.fontWeights.bold};
    letter-spacing: ${tokens.letterSpacing.ls1};
    line-height: ${tokens.lineHeights.lineHeight33};
    text-align: left;
    margin: 0px;
`;

const Heading3 = styled.h3`
    font-family: ${tokens.fontFamily.fontFamilyNunito};
    color : ${tokens.colors.fontColorHeading3};
    font-size: ${tokens.fontSizes.fsLarge22};
    font-weight:  ${tokens.fontWeights.bold};
    line-height: ${tokens.lineHeights.lineHeight30};
    letter-spacing: ${tokens.letterSpacing.ls3};
    padding: 0px;
    margin: 0px;
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
    line-height: ${tokens.lineHeights.lineHeight22};
    text-align: center;
    margin: 10px 0px 0px 0px;
`;

const PopularBookAuthor = styled.h5`
    color : ${tokens.colors.fontColorPopularBookAuthor};
    font-size: ${tokens.fontSizes.fsExtraSmall14};
    font-weight: ${tokens.fontWeights.regular};
    line-height: ${tokens.lineHeights.lineHeight22};
    text-align: center;
    margin: 8px 0px 0px 0px;
`;

const TopAuthorName = styled.h4`
    font-size: ${tokens.fontSizes.fsSemiSmall16};
    font-weight: ${tokens.fontWeights.semiBold};
    text-align: center;
    margin: 15px 0px 0px 0px;
    line-height : ${tokens.lineHeights.lineHeight22};
`;

const Language = styled.h2`
    font-size: ${tokens.fontSizes.fsLarge20};
    font-weight: ${tokens.fontWeights.bold};
    line-height: ${tokens.lineHeights.lineHeight28};
    letter-spacing: ${tokens.letterSpacing.ls3};
    text-align: left;
    color : ${tokens.colors.fontColorUserName};
`;

const UserName = styled.h2`
    font-size: ${tokens.fontSizes.fsSmall17};
    font-weight: ${tokens.fontWeights.semiBold};
    line-height: ${tokens.lineHeights.lineHeight23};
    text-align: left;
    color : ${tokens.colors.fontColorUserName};
`;

const NavLink = styled.a<{isActive: boolean}>`
    font-size: ${tokens.fontSizes.fsExtraSmall14};
    font-weight: ${tokens.fontWeights.semiBold};
    line-height: ${tokens.lineHeights.lineHeight19};
    text-align: left;
    color : ${props => props.isActive ? tokens.colors.bgColorWhite : tokens.colors.fontColorMenu};
    text-decoration: none;
    cursor : pointer;
    &&: hover {
        text-decoration: underline;
    }
`;

const HeadingParagraph = styled.p`
    font-size: ${tokens.fontSizes.fsMedium18};
    font-weight: ${tokens.fontWeights.regular};
    line-height: ${tokens.lineHeights.lineHeight24};
    color : ${tokens.colors.fontColorParagraph};
    text-align: left;
    margin: 20px 0px;
    padding: 0;
`;

const ReadInfoCount = styled.h2`
    color : ${tokens.colors.fontColorHeading2};
    font-size: ${tokens.fontSizes.fsSemiLarge24};
    font-weight: ${tokens.fontWeights.bold};
    line-height: ${tokens.lineHeights.lineHeight33};
    text-align: left;
    margin: 0px;
`;

const ReadInfoTitle = styled.h3`
    color : ${tokens.colors.fontColorNextBookAuthor};
    font-size: ${tokens.fontSizes.fsSmall17};
    font-weight: ${tokens.fontWeights.regular};
    line-height: ${tokens.lineHeights.lineHeight23};
    text-align: left;
    margin: 0px;
`;

const NextBookTitle = styled.h4`
    font-family: ${tokens.fontFamily.fontFamilyNunito};
    color : ${tokens.colors.fontColorHeading3};
    font-size: ${tokens.fontSizes.fsSemiSmall16};
    font-weight:  ${tokens.fontWeights.bold};
    line-height: ${tokens.lineHeights.lineHeight22};
    text-align: left;
    margin: 0px;
`;

const NextBookAuthor = styled.h5`
    font-family: ${tokens.fontFamily.fontFamilyNunito};
    color : ${tokens.colors.fontColorNextBookAuthor};
    font-size: ${tokens.fontSizes.fsExtraSmall14};
    font-weight: ${tokens.fontWeights.regular};
    line-height: ${tokens.lineHeights.lineHeight19};
    text-align: left;
    margin: 0px;
`;

const NextBookDuration = styled.h5`
    font-family: ${tokens.fontFamily.fontFamilyNunito}; 
    color : ${tokens.colors.fontColorNextBookDuration};
    font-size: ${tokens.fontSizes.fsExtraSmall14};
    font-weight: ${tokens.fontWeights.regular};
    line-height: ${tokens.lineHeights.lineHeight19};
    text-align: right;
    margin: 0px;
`;

const WeekBookTitle = styled.h4`
    font-family: ${tokens.fontFamily.fontFamilyNunito};
    color : ${tokens.colors.strokeColorGreen}; 
    font-size:     font-size: ${tokens.fontSizes.fsLarge20};
    font-weight:  ${tokens.fontWeights.semiBold};
    line-height: ${tokens.lineHeights.lineHeight27};
    text-align: left;
    margin: 0px;
`;

const WeekBookCount = styled.h4`
    font-family: ${tokens.fontFamily.fontFamilyNunito};
    color : ${tokens.colors.strokeColorGreen}; 
    font-size:${tokens.fontSizes.fsLarge20};
    font-weight:  ${tokens.fontWeights.bold};
    line-height: ${tokens.lineHeights.lineHeight27};
    text-align: center;
    margin: 0px;
    padding: 0px;
`;

const PlayBookTitle = styled.h4`
    font-family: ${tokens.fontFamily.fontFamilyNunito};
    color : ${tokens.colors.fontColorHeading3};
    font-size: ${tokens.fontSizes.fsLarge20};
    font-weight:  ${tokens.fontWeights.bold};
    line-height: ${tokens.lineHeights.lineHeight27};
    text-align: center;
    margin: 0px;
    padding: 0px;
`;

const PlayBookAuthor = styled.h5`
    font-family: ${tokens.fontFamily.fontFamilyNunito};
    color : ${tokens.colors.fontColorPlayBookAuthor};
    font-size: ${tokens.fontSizes.fsExtraSmall14};
    font-weight: ${tokens.fontWeights.regular};
    line-height: ${tokens.lineHeights.lineHeight19};
    text-align: center;
    margin: 0px;
`;

export {
    GlobalStyles,
    Heading1, 
    Heading2, 
    Heading3,
    HeadingParagraph, 
    Hyperlink, 
    PopularBookTitle, 
    PopularBookAuthor, 
    TopAuthorName, 
    Language,
    UserName,
    NavLink,
    ReadInfoCount,
    ReadInfoTitle,
    NextBookTitle,
    NextBookAuthor,
    NextBookDuration,
    WeekBookTitle,
    WeekBookCount,
    PlayBookTitle,
    PlayBookAuthor
};