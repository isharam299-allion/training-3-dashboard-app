import styled from "styled-components";
import { tokens } from "../../tokens/DesignTokens";
import { Backgrounds, Images } from "../../../assests";
import { Button, Typography } from "../../atoms";

const StyledContainer = styled.div`
    display : flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: auto;
    border-radius: 24px;
    background-color: ${tokens.colors.bgColorGreen};
    padding: 20px;
    background-image: url(${Backgrounds.BACKGROUNDS.WingBg}), linear-gradient(rgba(255, 0, 0, 0.5), rgba(0, 0, 255, 0.5));
    background-size: contain; 
    background-repeat: no-repeat; 
    background-position: center;
    background-blend-mode: overlay;

    @media (min-width: 391px) {
        flex-direction: row-reverse;
        width: 775px;
        height: 280px;
        padding: 26px 50px 30px 50px;
    }
`;

const StyledTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 314px;
    height: 220px;
    margin-top: 10px;

    @media(min-width: 391px){
        margin-top: 8px;
    }
`;

const TrendingBookBlock : React.FC = () => (
    <StyledContainer>
        <Images.IMAGES.MAIN_IMG/>
        <StyledTextWrapper>
            <Typography.Heading1>TRENDING BOOKS THIS MONTH</Typography.Heading1>
            <Typography.HeadingParagraph>Listen to trending books in this months</Typography.HeadingParagraph>
            <Button title="VIEW NOW"/>
        </StyledTextWrapper>
        
        
    </StyledContainer>
);

export {
    TrendingBookBlock
}