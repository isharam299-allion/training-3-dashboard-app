import styled from "styled-components";
import { tokens } from "../../tokens/DesignTokens";
import { Images } from "../../../assests";
import { Button, Typography } from "../../atoms";

const StyledContainer = styled.div`
    display : flex;
    align-items: center;
    justify-content: space-between;
    width: 775px;
    height: 280px;
    border-radius: 24px;
    background-color: ${tokens.colors.bgColorGreen};
    padding: 50px;
`;

const StyledTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 312px;
    height: 220px;
`;

const TrendingBookBlock : React.FC = () => (
    <StyledContainer>
        <StyledTextWrapper>
            <Typography.Heading1>TRENDING BOOKS THIS MONTH</Typography.Heading1>
            <Typography.HeadingParagraph>Listen to trending books in this months</Typography.HeadingParagraph>
            <Button title="VIEW NOW"/>
        </StyledTextWrapper>
        <Images.IMAGES.MAIN_IMG/>
        
    </StyledContainer>
);

export {
    TrendingBookBlock
}