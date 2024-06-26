import { useState } from 'react';
import './App.css';
import { GlobalStyles } from './components/atoms/typography/Typography';
import { Header, MainBookSection, MenuBar, UserBooksSection } from './components/organisms';


function App() {
  const [isMenuOpen , setMenuOPen] = useState(true);
  const [isUserSectionOpen, setUserSectionOpen] = useState(false);
  return (
    <>
    <GlobalStyles/>
    <Header onClickLogo={() => setMenuOPen(!isMenuOpen)}  
      onClickUserIcon={() => setUserSectionOpen(!isUserSectionOpen)}/>
    <MenuBar isMenuOpen={isMenuOpen}/>
    <UserBooksSection/>
    <MainBookSection/>
    </>
  );
}

export default App;
