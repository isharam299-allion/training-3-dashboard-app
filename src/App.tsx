import { useEffect, useState } from 'react';
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
  const [isMenuOpen , setMenuOpen] = useState(window.innerWidth > 390);
  const [isUserSectionOpen, setUserSectionOpen] = useState(window.innerWidth > 390);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 390) {
        setMenuOpen(false);
        setUserSectionOpen(false);
      } else {
        setMenuOpen(true);
        setUserSectionOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <GlobalStyles/>
      <Container>
        <Header onClickLogo={() => setMenuOpen(!isMenuOpen)}  
          onClickUserIcon={() => setUserSectionOpen(!isUserSectionOpen)}/>
        <MenuBar $isMenuOpen={isMenuOpen}/>
        <UserBooksSection $isUserSectionOpen={isUserSectionOpen}/>
        <MainBookSection $isMenuOpen={isMenuOpen} $isUserSectionOpen={isUserSectionOpen}/>
      </Container>
      
    </>
  );
}

export default App;
