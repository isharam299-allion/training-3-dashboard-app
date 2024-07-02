import styled from "styled-components";

enum ICON_TYPE {
    MENU_ICON,
    SEARCH_ICON,
    READ_INFO_ICON,
    PLAY_PAUSE_ICON,
    NEXT_BACK_ICON,
    NOTIFICATION_ICON,
    FLAG_ICON,
    DOWN_ICON
}

const getIconSize = ( type : ICON_TYPE) => {
   switch (type) {
    case ICON_TYPE.MENU_ICON:
    case ICON_TYPE.NOTIFICATION_ICON:
        return '26px';
    case ICON_TYPE.SEARCH_ICON:
        return '20px';
    case ICON_TYPE.READ_INFO_ICON:
        return '41px';
    case ICON_TYPE.NEXT_BACK_ICON:
        return '16px';
    case ICON_TYPE.PLAY_PAUSE_ICON:
        return '30px';
    case ICON_TYPE.FLAG_ICON:
        return '36px';
    case ICON_TYPE.DOWN_ICON:
        return '14px';
    default:
        return '0px';
   }
}

interface IconProps {
    type : ICON_TYPE;
    SvgComponent : React.FC<React.SVGProps<SVGSVGElement>> ;
}

const StyledSvg = styled.svg<Pick<IconProps, 'type'>>`
    height: ${props => props.type === ICON_TYPE.DOWN_ICON ? '8px' : getIconSize(props.type)};
    width: ${props => getIconSize(props.type)};
    display: block;
`;

const SvgIcon : React.FC<IconProps> = ({SvgComponent , type}) => (
    <StyledSvg type={type}>
        <SvgComponent/>
    </StyledSvg>
);

export {SvgIcon , ICON_TYPE}