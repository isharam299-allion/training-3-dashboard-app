import {Author, CONAN_DOYLE, F_SCOTT_FITZGERALD, JOHN_GREEN, KEITH_FERRAZZI, MARKUS_ZUKAS, R_J_PALACIO, YUVAL_NOAH_HARARI } from "./Author.data";
import { BOOK_IMAGES } from "../assests/pictures";
interface Book {
    id : Number;
    title : String;
    author : Author;
    desktopImg : String;
    mobileImg : String;
}


export const NEVER_EAT_ALONE : Book = {
    id: 1000,
    title: "Never Eat Alone",
    author: KEITH_FERRAZZI,
    desktopImg: BOOK_IMAGES.DESKTOP.BOOK_NEVER_EAT_ALONE,
    mobileImg: BOOK_IMAGES.MOBILE.BOOK_NEVER_EAT_ALONE
}

export const THE_GREAT_GASBY : Book = {
    id: 1001,
    title: "Great Gasby",
    author: F_SCOTT_FITZGERALD,
    desktopImg: BOOK_IMAGES.DESKTOP.BOOK_THE_GREAT_GASBY,
    mobileImg: BOOK_IMAGES.MOBILE.BOOK_THE_GREAT_GASBY
}

export const SAPIENS : Book = {
    id: 1000,
    title: "Sapiens",
    author: YUVAL_NOAH_HARARI,
    desktopImg: BOOK_IMAGES.DESKTOP.BOOK_SAPIENS,
    mobileImg: BOOK_IMAGES.MOBILE.BOOK_SAPIENS
}


export const THE_BOOK_THEIF : Book = {
    id: 1002,
    title: "The Book Thief",
    author: MARKUS_ZUKAS,
    desktopImg: BOOK_IMAGES.DESKTOP.BOOK_THE_BOOK_THEIF,
    mobileImg: BOOK_IMAGES.MOBILE.BOOK_THE_BOOK_THEIF
}

export const SHERLOCK_HOMES : Book = {
    id: 1003,
    title: "Sherlock Holmes",
    author: CONAN_DOYLE,
    desktopImg: BOOK_IMAGES.DESKTOP.BOOK_SHERLOCK_HOMES,
    mobileImg: BOOK_IMAGES.MOBILE.BOOK_SHERLOCK_HOMES
}

export const FAULT_IN_OUR_STARS : Book = {
    id: 1003,
    title: "Fault In Our Stars",
    author: JOHN_GREEN,
    desktopImg: BOOK_IMAGES.DESKTOP.BOOK_FAULT_IN_OUR_STARS,
    mobileImg: BOOK_IMAGES.MOBILE.BOOK_FAULT_IN_OUR_STARS
}

export const WONDER : Book = {
    id: 1003,
    title: "Wonder",
    author: R_J_PALACIO,
    desktopImg: BOOK_IMAGES.DESKTOP.BOOK_WONDER,
    mobileImg: BOOK_IMAGES.MOBILE.BOOK_WONDER
}
