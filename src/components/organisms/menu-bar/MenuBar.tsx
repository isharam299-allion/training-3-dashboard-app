import styled from "styled-components";
import { tokens } from "../../tokens/DesignTokens";
import { IsOptional } from "prop-types";

    interface MenuBarProps {
        isMenuOpen : boolean;
    }

    const StyledDiv = styled.div<Pick<MenuBarProps,'isMenuOpen'>>`
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        width: 212px;
        height: 100vh;
        border-radius: 40px 0px 0px 40px;
        background-color: ${tokens.colors.bgColorWhite};
        transform: ${ props => (props.isMenuOpen ? 'translateX(0)' : 'translateX(-100%)')};
        transition: transform 0.3s ease;
    `;



    const MenuBar : React.FC<MenuBarProps> = ({isMenuOpen}) => (
        <StyledDiv isMenuOpen={isMenuOpen} >

        </StyledDiv>
    );

export {
    MenuBar
}