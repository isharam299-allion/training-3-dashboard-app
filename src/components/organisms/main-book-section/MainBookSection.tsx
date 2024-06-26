import styled from "styled-components";
import { Heading3 } from "../../atoms/typography/Typography";

const StyledSection = styled.main`
    display: flex;
    height: 100vh;
`;


const MainBookSection : React.FC = () => (
    <StyledSection>
        <Heading3>Top Books</Heading3>
    </StyledSection>
);

export {
    MainBookSection
}
