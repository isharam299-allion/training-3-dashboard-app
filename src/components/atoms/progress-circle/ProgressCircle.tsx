import styled from "styled-components";
import { tokens } from "../../tokens/DesignTokens";

interface ProgressCircleProps {
   rotation : number;
   size : number;
   strokeSize : number;
}

const ProgressCircle = styled.div<Pick<ProgressCircleProps, 'size' |'strokeSize'| 'rotation'>>`
    width: ${props =>props.size}px;
    height: ${props =>props.size}px;
    border-radius: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: ${props =>props.strokeSize}px solid ${tokens.colors.strokeColorLightGreen}; 
    }

    &::after {
        content: '';
        position: absolute;
        top: 0px;
        left: 0px;
        width: ${props =>props.size + props.strokeSize * 2}px;
        height: ${props =>props.size + props.strokeSize * 2}px;
        border-radius: 50%;
        background: 
        conic-gradient(
            ${tokens.colors.strokeColorGreen} ${props =>props.rotation * 100}%,
            transparent ${props => props.rotation * 100}%
        );
        transform: rotate(-180deg);
        -webkit-mask: 
        radial-gradient(farthest-side, transparent calc(100% - 5px), black calc(100% - 4px));
        mask: 
        radial-gradient(farthest-side, transparent calc(100% - 5px), black calc(100% - 4px));
    }
`;

export {
    ProgressCircle
}