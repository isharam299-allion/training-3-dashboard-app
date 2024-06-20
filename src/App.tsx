import React from 'react';
import './App.css';
import { Heading2, Logo } from './components';
import { GlobalStyles, Heading3, Hyperlink, PopularBookAuthor, PopularBookTitle } from './components/atoms/typography/Typography';
import { NEVER_EAT_ALONE } from './utilities/Book.data';

function App() {
  return (
    <>
    <GlobalStyles/>
    <Logo />
    <Heading2>Popular</Heading2>
    <Heading3>Next Books</Heading3>
    <Hyperlink>View All</Hyperlink>
    <PopularBookTitle>{NEVER_EAT_ALONE.title}</PopularBookTitle>
    <PopularBookAuthor>{NEVER_EAT_ALONE.author.name}</PopularBookAuthor>
    </>
  );
}

export default App;
