import styled from "styled-components";
import { tokens } from "../../tokens/DesignTokens";

interface UserProfileImgProps {
    imgUrl : string;
    onClickUserProfile : () => void;
}

const StyledDiv = styled.div<Pick<UserProfileImgProps, 'imgUrl'>>`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background-image : url(${props => props.imgUrl});
    background-color: ${tokens.colors.bgColorWhite};
    background-size: cover;
    background-position: center;
    cursor: pointer;
`;


const UserProfileImg : React.FC<UserProfileImgProps> = ({imgUrl , onClickUserProfile}) => (
    <StyledDiv imgUrl={imgUrl} onClick={onClickUserProfile}/>
);

export {
    UserProfileImg
}