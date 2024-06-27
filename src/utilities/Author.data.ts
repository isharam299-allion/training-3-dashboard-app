import { AUTHOR_IMAGES } from "../assests/pictures";
interface Author {
    id : Number;
    name : String;
    desktopImg : string;
    mobileImg : string;
    altText : string | '';
}

const MARKUS_ZUKAS : Author = {
    id: 1000,
    name: "Markus Zukas",
    desktopImg: AUTHOR_IMAGES.DESKTOP.AUTHOR_MARKUS_ZUKAS,
    mobileImg: AUTHOR_IMAGES.MOBILE.AUTHOR_MARKUS_ZUKAS,
    altText: ""
}

 const KEITH_FERRAZZI : Author = {
    id: 1001,
    name: "Keith Ferrazzi",
    desktopImg: '',
    mobileImg: '',
    altText: ""
}

const F_SCOTT_FITZGERALD : Author = {
    id: 1002,
    name: "F.Scott Fitzgerald",
    desktopImg: '',
    mobileImg: '',
    altText: ""
}

const YUVAL_NOAH_HARARI : Author = {
    id: 1003,
    name: "Yuval Noah Harari",
    desktopImg: AUTHOR_IMAGES.DESKTOP.AUTHOR_YUVAL_NOAH_HARARI,
    mobileImg: AUTHOR_IMAGES.MOBILE.AUTHOR_YUVAL_NOAH_HARARI,
    altText: ""
}

const CONAN_DOYLE : Author = {
    id: 1004,
    name: "Conan Doyle",
    desktopImg: '',
    mobileImg: '',
    altText: ""
}

const JOHN_GREEN: Author = {
    id: 1005,
    name: "John Green",
    desktopImg: AUTHOR_IMAGES.DESKTOP.AUTHOR_JOHN_GREEN,
    mobileImg: AUTHOR_IMAGES.MOBILE.AUTHOR_JOHN_GREEN,
    altText: ""
}

const DAN_BROWN : Author = {
    id: 1006,
    name: "Dan Brown",
    desktopImg: AUTHOR_IMAGES.DESKTOP.AUTHOR_DAN_BROWN,
    mobileImg: AUTHOR_IMAGES.MOBILE.AUTHOR_DAN_BROWN,
    altText: ""
}

const J_K_ROWLING : Author = {
    id: 1007,
    name: "J.K.Rowling",
    desktopImg: AUTHOR_IMAGES.DESKTOP.AUTHOR_J_K_ROWLING,
    mobileImg: AUTHOR_IMAGES.MOBILE.AUTHOR_J_K_ROWLING,
    altText: ""
}

const R_J_PALACIO : Author = {
    id: 1008,
    name: "R.J.Palacio",
    desktopImg: AUTHOR_IMAGES.DESKTOP.AUTHOR_R_J_PALACIO,
    mobileImg: AUTHOR_IMAGES.MOBILE.AUTHOR_R_J_PALACIO,
    altText: ""
}

const TOP_AUTHORS : Author[] = [
    MARKUS_ZUKAS,
    DAN_BROWN,
    JOHN_GREEN,
    YUVAL_NOAH_HARARI,
    J_K_ROWLING,
    R_J_PALACIO
];

export type {Author}

export {
    R_J_PALACIO,
    J_K_ROWLING,
    DAN_BROWN,
    CONAN_DOYLE,
    F_SCOTT_FITZGERALD,
    JOHN_GREEN,
    KEITH_FERRAZZI,
    MARKUS_ZUKAS,
    YUVAL_NOAH_HARARI,
    TOP_AUTHORS
}