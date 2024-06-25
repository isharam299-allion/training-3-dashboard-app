import styled from "styled-components";
import { tokens } from "../../tokens/DesignTokens";
import { Author } from "../../../utilities/Author.data";
import { IMAGE_TYPE, Thumbnail, Typography } from "../../atoms";

const StyledDiv = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;
    flex-direction : column;
    width: fit-content;
`;

const StyledThumbnail = styled.div`
    display: block;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: ${tokens.colors.bgColorEllipse};
    justify-content: center;
    align-items: center;
`;

const StyledThumbnailBorder = styled.div`
    display: flex;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 2px solid ${tokens.colors.strokeColorGreen};
    justify-content: center;
    align-items: center;
`;

interface AuthorProps {
    author : Author;
};

const TopAuthor : React.FC<AuthorProps> = ({author}) => (
    <StyledDiv>
        <StyledThumbnailBorder>
            <StyledThumbnail>
                <Thumbnail type={IMAGE_TYPE.TOP_AUTHOR} desktopImgSrc={author.desktopImg} 
                mobileImgSrc={author.mobileImg} altText={author.altText} />
            </StyledThumbnail>
        </StyledThumbnailBorder>
        <Typography.TopAuthor>{author.name}</Typography.TopAuthor>
    </StyledDiv>
);

export {TopAuthor}
