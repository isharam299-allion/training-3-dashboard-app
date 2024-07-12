import { useEffect, useState } from 'react';
import './App.css';
import { GlobalStyles } from './components/atoms/typography/Typography';
import { BookList, Header, MainSection, MenuBar, UserBooksSection } from './components/organisms';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomeContent } from './components/templates';
import { Book } from './utilities/Book.data';

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
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);

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
      <BrowserRouter>
        <GlobalStyles/>
        <Container>
          <Header onClickLogo={() => setMenuOpen(!isMenuOpen)}  
            onClickUserIcon={() => setUserSectionOpen(!isUserSectionOpen)}
            setFilteredBooks={setFilteredBooks}/>
          <MenuBar $isMenuOpen={isMenuOpen}/>
          <UserBooksSection $isUserSectionOpen={isUserSectionOpen}/>
          <MainSection $isMenuOpen={isMenuOpen} $isUserSectionOpen={isUserSectionOpen}>
            <Routes>
              <Route path='/' element={<HomeContent/>} />
              <Route path='/search' element={<BookList books={filteredBooks} />} />
            </Routes>
          </MainSection>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
