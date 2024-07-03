import styled from "styled-components";
import { ICON_TYPE } from "./SvgIcon";
import { tokens } from "../../tokens/DesignTokens";

interface IconBackgroundProps {
    iconType : ICON_TYPE
}

const getSize = (type : ICON_TYPE) => {
    switch (type) {
        case ICON_TYPE.MENU_ICON:
            return '36px';
        case ICON_TYPE.NOTIFICATION_ICON:
        case ICON_TYPE.FLAG_ICON:
        case ICON_TYPE.PLAY_PAUSE_ICON:
            return '50px';
        case ICON_TYPE.SEARCH_ICON:
        case ICON_TYPE.NEXT_BACK_ICON:
            return '40px';
        case ICON_TYPE.READ_INFO_ICON:
            return '67px';
        default:
            return '0px';
       }
}

const getBorderRadius = (type : ICON_TYPE) => {
    switch (type) {
        case ICON_TYPE.READ_INFO_ICON:
            return '11px';
        default:
            return '50%';
       }
}

const getFillColor = (type : ICON_TYPE) => {
    switch (type) {
        case ICON_TYPE.FLAG_ICON:
            return tokens.colors.bgColorLanguageEllipse;
        case ICON_TYPE.NEXT_BACK_ICON:
            return tokens.colors.strokeColorLightGreen;
        case ICON_TYPE.READ_INFO_ICON:
            return tokens.colors.bgColorLightGreen;
        default:
            return tokens.colors.bgColorWhite;
       }
}

const StyledIconBackground = styled.div<Pick<IconBackgroundProps ,'iconType'>>`
        display: flex;
        justify-content: center;
        align-items: center;
        width: ${props => getSize(props.iconType)};
        height: ${props => getSize(props.iconType)};
        border-radius: ${props => getBorderRadius(props.iconType)};
        border: none;
        background: ${props => getFillColor(props.iconType)};
`;

export {StyledIconBackground};

StyledIconBackground.displayName = 'StyledIconBackground';