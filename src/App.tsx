import React from 'react';
import './App.css';
import { Heading2, Logo } from './components';
import { GlobalStyles, Heading3, Hyperlink, PopularBookAuthor, PopularBookTitle } from './components/atoms/typography/Typography';
import { NEVER_EAT_ALONE } from './utilities/Book.data';
import { BOOK_TYPE, BookThumbnail } from './components/atoms';
import { BOOK_IMAGES } from './assests/pictures';


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
    <BookThumbnail type={BOOK_TYPE.POPULAR} desktopImgSrc={BOOK_IMAGES.DESKTOP.BOOK_FAULT_IN_OUR_STARS} 
    mobileImgSrc={BOOK_IMAGES.MOBILE.BOOK_FAULT_IN_OUR_STARS} altText=''/>
    <BookThumbnail type={BOOK_TYPE.PLAY} desktopImgSrc={BOOK_IMAGES.DESKTOP.BOOK_FAULT_IN_OUR_STARS} 
    mobileImgSrc={BOOK_IMAGES.MOBILE.BOOK_FAULT_IN_OUR_STARS} altText=''/>
    <BookThumbnail type={BOOK_TYPE.PLAY_NEXT} desktopImgSrc={BOOK_IMAGES.DESKTOP.BOOK_FAULT_IN_OUR_STARS} 
    mobileImgSrc={BOOK_IMAGES.MOBILE.BOOK_FAULT_IN_OUR_STARS} altText=''/>
    <BookThumbnail type={BOOK_TYPE.READ_NEXT } desktopImgSrc={BOOK_IMAGES.DESKTOP.BOOK_FAULT_IN_OUR_STARS} 
    mobileImgSrc={BOOK_IMAGES.MOBILE.BOOK_FAULT_IN_OUR_STARS} altText=''/>
    </>
  );
}

export default App;
