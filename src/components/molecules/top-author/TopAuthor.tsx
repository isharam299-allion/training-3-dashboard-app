import styled from "styled-components";
import { tokens } from "../../tokens/DesignTokens";
import { Author } from "../../../utilities/Author.data";
import { IMAGE_TYPE, Thumbnail, ThumbnailBorder, Typography } from "../../atoms";

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



interface AuthorProps {
    author : Author;
};

const TopAuthor : React.FC<AuthorProps> = ({author}) => (
    <StyledDiv>
        <ThumbnailBorder imageType={IMAGE_TYPE.TOP_AUTHOR}>
            <StyledThumbnail>
                <Thumbnail type={IMAGE_TYPE.TOP_AUTHOR} desktopImgSrc={author.desktopImg} 
                mobileImgSrc={author.mobileImg} altText={author.altText} />
            </StyledThumbnail>
        </ThumbnailBorder>
        <Typography.TopAuthorName>{author.name}</Typography.TopAuthorName>
    </StyledDiv>
);

export {TopAuthor}
