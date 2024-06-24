import styled from "styled-components";

// Thumbnail types based on the section of the book appears
enum IMAGE_TYPE  {
    POPULAR_BOOK,
    PLAY_BOOK,
    PLAY_NEXT_BOOK,
    READ_NEXT_BOOK,
    TOP_AUTHOR
}


interface PictureProps {
    type : IMAGE_TYPE;
    desktopImgSrc : string;
    mobileImgSrc : string;
    altText : string;
}

// height of the book image based on the thumbnail image type
const getThumbnailHeight = (type : IMAGE_TYPE) => {
    switch (type) {
        case IMAGE_TYPE.POPULAR_BOOK:
            return '140px';
        case IMAGE_TYPE.PLAY_BOOK:
            return '144px';
        case IMAGE_TYPE.READ_NEXT_BOOK:
            return '70px';
        case IMAGE_TYPE.PLAY_NEXT_BOOK:
            return '100px';
        case IMAGE_TYPE.TOP_AUTHOR:
            return '70px';
        default:
            return 'auto';
    }
}

// border radius of the image based on the thumbnail image type
const getImgBorderRadius = (type : IMAGE_TYPE) => {
    switch (type) {
        case IMAGE_TYPE.POPULAR_BOOK:
        case IMAGE_TYPE.PLAY_BOOK:
            return '10px';
        case IMAGE_TYPE.READ_NEXT_BOOK:
        case IMAGE_TYPE.PLAY_NEXT_BOOK:
            return '8px';
        default:
            return '0px';
    }
}

const StyledPicture = styled.picture<Pick<PictureProps, 'type'>>`
    img {
        width: auto;
        height: ${props => getThumbnailHeight(props.type)};
        border-radius: ${props => getImgBorderRadius(props.type)};
        opacity: 0px;
    }  
`;

const Thumbnail : React.FC<PictureProps> = ({
    desktopImgSrc, 
    mobileImgSrc, 
    type, 
    altText}) => (
    <StyledPicture type={type}>
         <source media="(min-width: 768px)" srcSet={desktopImgSrc}/>
         <img src={mobileImgSrc} alt={altText}/>
    </StyledPicture>
);

export { Thumbnail , IMAGE_TYPE}