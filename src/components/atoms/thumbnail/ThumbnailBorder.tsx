import styled from "styled-components";
import { IMAGE_TYPE } from "./Thumbnail";
import { tokens } from "../../tokens/DesignTokens";

interface ThumbnailBgProps {
    $imageType : IMAGE_TYPE;
}

const getHeight = (type : IMAGE_TYPE) => {
    switch (type) {
        case IMAGE_TYPE.TOP_AUTHOR:
            return '80px';
        case IMAGE_TYPE.PLAY_BOOK:
            return '144px';
        default:
            return '0px';
    }
}

const getWidth = (type : IMAGE_TYPE) => {
    switch (type) {
        case IMAGE_TYPE.TOP_AUTHOR:
            return '80px';
        case IMAGE_TYPE.PLAY_BOOK:
            return '99px';
        default:
            return '0px';
    }
}


const getBorderRadius = (type : IMAGE_TYPE) => {
    switch (type) {
        case IMAGE_TYPE.TOP_AUTHOR:
            return '50%';
        case IMAGE_TYPE.PLAY_BOOK:
            return '14px';
        default:
            return '0%';
    }
}

const getBorderSize = (type : IMAGE_TYPE) => {
    switch (type) {
        case IMAGE_TYPE.TOP_AUTHOR:
            return '2px';
        case IMAGE_TYPE.PLAY_BOOK:
            return '1.5px';
        default:
            return '0%';
    }
}

const ThumbnailBorder = styled.div<Pick<ThumbnailBgProps, '$imageType'>>`
    display: flex;
    width: ${props => getWidth(props.$imageType)};
    height: ${props => getHeight(props.$imageType)};
    border-radius: ${props => getBorderRadius(props.$imageType)};
    border: ${props => getBorderSize(props.$imageType)} solid ${tokens.colors.strokeColorGreen};
    justify-content: center;
    align-items: center;
`;

export {
    ThumbnailBorder
}

ThumbnailBorder.displayName = 'ThumbnailBorder';
