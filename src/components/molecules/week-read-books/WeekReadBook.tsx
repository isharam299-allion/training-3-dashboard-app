import styled from "styled-components";
import { tokens } from "../../tokens/DesignTokens";
import React from "react";
import { ProgressCircle, Typography } from "../../atoms";
import { IMAGES } from "../../../assests/images";

interface WeekReadBooksProps {
    readingCount: number;
    readCount: number;
}

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 313px;
    height: 118px;
    border-radius: 16px ;
    background-color: ${tokens.colors.bgColorWhite};
    margin-top: 10px;
    padding: 14px 30px;
`;

const TitleWrapper = styled.div`
    dislay: flex;
    flex-direction: column;
    align-itmes: left;
`;

const StyledSvgImgWrapper = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
        margin-right: 56px;
`; 

const WeekReadBooksBlock : React.FC<WeekReadBooksProps> =({readingCount, readCount}) => (
    <StyledDiv>
        <TitleWrapper>
            <Typography.WeekBookTitle>Books this week</Typography.WeekBookTitle>
            <StyledSvgImgWrapper>
                <IMAGES.WEEK_READ_BOOKS_IMG/>
            </StyledSvgImgWrapper> 
        </TitleWrapper>
       <ProgressCircle $progressFactor={readCount/readingCount} size={65} $strokeSize={5}>
            <Typography.WeekBookCount>{readCount}/{readingCount}</Typography.WeekBookCount>
       </ProgressCircle>
    </StyledDiv>
);

export {
    WeekReadBooksBlock
}