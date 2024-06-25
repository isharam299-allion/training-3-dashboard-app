import React from 'react';
import './App.css';
import { Heading2, Logo } from './components';
import { GlobalStyles, Heading3, Hyperlink } from './components/atoms/typography/Typography';
import { NEVER_EAT_ALONE } from './utilities/Book.data';
import { ICON_TYPE, IMAGE_TYPE, StyledIconBackground, SvgIcon, Thumbnail, Typography } from './components/atoms';
import { AUTHOR_IMAGES, BOOK_IMAGES } from './assests/pictures';
import { PopularBook, TopAuthor } from './components/molecules';
import { MARKUS_ZUKAS } from './utilities/Author.data';
import { SVG_COMPONENTS } from './assests/svg-icons';


function App() {
  return (
    <>
    <GlobalStyles/>
    <Logo />
    <Heading2>Popular</Heading2>
    <Hyperlink>View All</Hyperlink>
    <PopularBook book={NEVER_EAT_ALONE}/>
    <Heading2>Top Authors</Heading2>
    <TopAuthor author={MARKUS_ZUKAS}/>
    <StyledIconBackground iconType={ICON_TYPE.READ_INFO_ICON}>
     <SvgIcon SvgComponent={SVG_COMPONENTS.AUTHORS_SVG} type={ICON_TYPE.READ_INFO_ICON} />
    </StyledIconBackground>
    <StyledIconBackground iconType={ICON_TYPE.NEXT_BACK_ICON}>
     <SvgIcon SvgComponent={SVG_COMPONENTS.NEXT_ICON_SVG} type={ICON_TYPE.NEXT_BACK_ICON} />
    </StyledIconBackground>
    <SvgIcon SvgComponent={SVG_COMPONENTS.HOME_SVG} type={ICON_TYPE.MENU_ICON} />
    
    <Heading3>Next Books</Heading3>
    <Thumbnail type={IMAGE_TYPE.POPULAR_BOOK} desktopImgSrc={BOOK_IMAGES.DESKTOP.BOOK_FAULT_IN_OUR_STARS} 
    mobileImgSrc={BOOK_IMAGES.MOBILE.BOOK_FAULT_IN_OUR_STARS} altText=''/>
    <Thumbnail type={IMAGE_TYPE.PLAY_BOOK} desktopImgSrc={BOOK_IMAGES.DESKTOP.BOOK_FAULT_IN_OUR_STARS} 
    mobileImgSrc={BOOK_IMAGES.MOBILE.BOOK_FAULT_IN_OUR_STARS} altText=''/>
    <Thumbnail type={IMAGE_TYPE.PLAY_NEXT_BOOK} desktopImgSrc={BOOK_IMAGES.DESKTOP.BOOK_FAULT_IN_OUR_STARS} 
    mobileImgSrc={BOOK_IMAGES.MOBILE.BOOK_FAULT_IN_OUR_STARS} altText=''/>
    <Thumbnail type={IMAGE_TYPE.READ_NEXT_BOOK} desktopImgSrc={BOOK_IMAGES.DESKTOP.BOOK_FAULT_IN_OUR_STARS} 
    mobileImgSrc={BOOK_IMAGES.MOBILE.BOOK_FAULT_IN_OUR_STARS} altText=''/>
    <Thumbnail type={IMAGE_TYPE.TOP_AUTHOR} desktopImgSrc={AUTHOR_IMAGES.DESKTOP.AUTHOR_DAN_BROWN} 
    mobileImgSrc={AUTHOR_IMAGES.MOBILE.AUTHOR_DAN_BROWN} altText=''/>
 
    
    </>
  );
}

export default App;
