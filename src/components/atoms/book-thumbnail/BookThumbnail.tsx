import styled from "styled-components";

// Thumbnail types based on the section of the book appears
enum BOOK_TYPE  {
    POPULAR = 'popular',
    PLAY = 'play',
    PLAY_NEXT = 'play-next',
    READ_NEXT = 'read-next'
}

interface BookThumbnailProps {
    type : BOOK_TYPE;
    desktopImgSrc : string;
    mobileImgSrc : string;
    altText : string;
}

// Get height of the book image based on the thumbnail type
const getThumbnailHeight = (type : BOOK_TYPE) => {
    switch (type) {
        case BOOK_TYPE.POPULAR:
            return '140px';
        case BOOK_TYPE.PLAY:
            return '144px';
        case BOOK_TYPE.READ_NEXT:
            return '70px';
        case BOOK_TYPE.PLAY_NEXT:
            return '100px';
        default:
            break;
    }
}

const getImgBorderRadius = (type : BOOK_TYPE) => {
    switch (type) {
        case BOOK_TYPE.POPULAR:
        case BOOK_TYPE.PLAY:
            return '10px';
        case BOOK_TYPE.READ_NEXT:
        case BOOK_TYPE.PLAY_NEXT:
            return '8px';
        default:
            break;
    }
}

const StyledPicture = styled.picture<Pick<BookThumbnailProps, 'type'>>`
    img {
        width: auto;
        height: ${props => getThumbnailHeight(props.type)};
        border-radius: ${props => getImgBorderRadius(props.type)};
        opacity: 0px;
    }  
`;

const BookThumbnail : React.FC<BookThumbnailProps> = ({
    desktopImgSrc, 
    mobileImgSrc, 
    type, 
    altText}) => (
    <StyledPicture type={type}>
         <source media="(min-width: 768px)" srcSet={desktopImgSrc}/>
         <img src={mobileImgSrc} alt={altText}/>
    </StyledPicture>
);

export {BookThumbnail, BOOK_TYPE}