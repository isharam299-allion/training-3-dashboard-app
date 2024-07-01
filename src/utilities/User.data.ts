import { UserAssests } from "../assests";
import { Book, NEVER_EAT_ALONE, SHERLOCK_HOMES, THE_GREAT_GASBY, WONDER } from "./Book.data";

export interface User {
    id : String;
    name : string;
    profileImg : string;
    readingBooks : Book[];
}

export const USER_THANH_PHAM : User = {
    id: '1000',
    name: "Thanh Pham",
    profileImg: UserAssests.USER_PROFILE_IMAGES.USER_IMG_THANH_PHAM,
    readingBooks: [THE_GREAT_GASBY, WONDER , NEVER_EAT_ALONE, SHERLOCK_HOMES]
}