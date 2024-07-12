import styled from "styled-components";

interface MainSectionProps {
    $isMenuOpen : boolean;
    $isUserSectionOpen: boolean;
}

const MainSection = styled.section<Pick<MainSectionProps, '$isMenuOpen' | '$isUserSectionOpen'>>`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 390px;
    margin-left: 20px;
    margin-right: 20px;
    transition: margin 0.3s ease;
    padding-bottom: 10px;
    
    @media (min-width: 391px) {
        max-width: 1440px;
        margin-left: ${ props => (props.$isMenuOpen ? '240px' : '20px')};
        margin-right: ${ props => (props.$isUserSectionOpen ? '413px' : '20px')};
        transition: margin 0.3s ease;
    }
`;

export {
    MainSection
}
