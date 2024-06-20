import {Author, CONAN_DOYLE, F_SCOTT_FITZGERALD, KEITH_FERRAZZI, MARKUS_ZUKAS } from "./Author.data";

interface Book {
    id : Number;
    title : String;
    author : Author
}


export const NEVER_EAT_ALONE : Book = {
    id: 1000,
    title: "Never Eat Alone",
    author: KEITH_FERRAZZI
}

export const GREAT_GASBY : Book = {
    id: 1001,
    title: "Great Gasby",
    author: F_SCOTT_FITZGERALD
}

export const THE_BOOK_THEIF : Book = {
    id: 1002,
    title: "The Book Thief",
    author: MARKUS_ZUKAS
}

export const SHERLOCK_HOMES : Book = {
    id: 1003,
    title: "Sherlock Holmes",
    author: CONAN_DOYLE
}

