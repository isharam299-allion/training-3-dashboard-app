import { useState } from 'react';
import './App.css';
import { GlobalStyles } from './components/atoms/typography/Typography';
import { Header, MainBookSection, MenuBar, UserBooksSection } from './components/organisms';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  max-width: 390px;
  height: 100vh;

  @media (min-width: 391px) {
    max-width: 1440px;
  }
`;

function App() {
  const [isMenuOpen , setMenuOPen] = useState(true);
  const [isUserSectionOpen, setUserSectionOpen] = useState(true);
  return (
    <>
      <GlobalStyles/>
      <Container>
        <Header onClickLogo={() => setMenuOPen(!isMenuOpen)}  
          onClickUserIcon={() => setUserSectionOpen(!isUserSectionOpen)}/>
        <MenuBar isMenuOpen={isMenuOpen}/>
        <UserBooksSection isUserSectionOpen={isUserSectionOpen}/>
        <MainBookSection isMenuOpen={isMenuOpen} isUserSectionOpen={isUserSectionOpen}/>
      </Container>
      
    </>
  );
}

export default App;
