import styled from "styled-components";
import { Heading3 } from "../../atoms/typography/Typography";

interface MainSectioProps {
    isMenuOpen : boolean;
    isUserSectionOpen: boolean;
}

const StyledSection = styled.main<Pick<MainSectioProps, 'isMenuOpen' | 'isUserSectionOpen'>>`
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin-left: ${ props => (props.isMenuOpen ? '247px' : '20px')};
    margin-right: ${ props => (props.isUserSectionOpen ? '413px' : '20px')};
    transition: margin 0.3s ease;
`;


const MainBookSection : React.FC<MainSectioProps> = ({isMenuOpen, isUserSectionOpen}) => (
    <StyledSection isMenuOpen={isMenuOpen} isUserSectionOpen={isUserSectionOpen}>
        <Heading3>Top Books</Heading3>
    </StyledSection>
);

export {
    MainBookSection
}
