import styled from "styled-components";
import { Heading3 } from "../../atoms/typography/Typography";
import { TrendingBookBlock } from "../../molecules";

interface MainSectioProps {
    isMenuOpen : boolean;
    isUserSectionOpen: boolean;
}

const StyledSection = styled.section<Pick<MainSectioProps, 'isMenuOpen' | 'isUserSectionOpen'>>`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    margin-left: ${ props => (props.isMenuOpen ? '247px' : '20px')};
    margin-right: ${ props => (props.isUserSectionOpen ? '413px' : '20px')};
    transition: margin 0.3s ease;
`;


const MainBookSection : React.FC<MainSectioProps> = ({isMenuOpen, isUserSectionOpen}) => (
    <StyledSection isMenuOpen={isMenuOpen} isUserSectionOpen={isUserSectionOpen}>
        <TrendingBookBlock/>
        <Heading3>Top Books</Heading3>
    </StyledSection>
);

export {
    MainBookSection
}
