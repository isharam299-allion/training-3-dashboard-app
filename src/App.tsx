import { useState } from 'react';
import './App.css';
import { GlobalStyles } from './components/atoms/typography/Typography';
import { Header, MainBookSection, MenuBar, UserBooksSection } from './components/organisms';


function App() {
  const [isMenuOpen , setMenuOPen] = useState(true);
  const [isUserSectionOpen, setUserSectionOpen] = useState(true);
  return (
    <>
      <GlobalStyles/>
      <Header onClickLogo={() => setMenuOPen(!isMenuOpen)}  
        onClickUserIcon={() => setUserSectionOpen(!isUserSectionOpen)}/>
      <MenuBar isMenuOpen={isMenuOpen}/>
      <UserBooksSection isUserSectionOpen={isUserSectionOpen}/>
      <MainBookSection isMenuOpen={isMenuOpen} isUserSectionOpen={isUserSectionOpen}/>
    </>
  );
}

export default App;
