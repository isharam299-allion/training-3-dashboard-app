import styled from "styled-components";
import { tokens } from "../../tokens/DesignTokens";
import { ICON_TYPE, StyledIconBackground, SvgIcon, Typography } from "../../atoms";

interface ReadInfoProps {
    count : string;
    title : string;
    icon : React.FC;
}

const StyledDiv = styled.div`
    display: flex;
    width: 240px;
    height: 87px;
    border-radius: 16px;
    background-color: ${tokens.colors.bgColorWhite};
    padding: 10px;
    gap: 25px;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
`;

const ReadInfoBlock : React.FC<ReadInfoProps> = ({count, icon, title}) => (
    <StyledDiv>
        <StyledIconBackground iconType={ICON_TYPE.READ_INFO_ICON}>
            <SvgIcon SvgComponent={icon} type={ICON_TYPE.READ_INFO_ICON}/>
        </StyledIconBackground>
        <TextWrapper>
            <Typography.ReadInfoCount>{count}</Typography.ReadInfoCount>
            <Typography.ReadInfoTitle>{title}</Typography.ReadInfoTitle>
        </TextWrapper>
    </StyledDiv>
);

export {
    ReadInfoBlock
};
export type { ReadInfoProps };
