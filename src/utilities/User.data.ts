import { UserAssests } from "../assests";

export interface User {
    id : String;
    name : string;
    profileImg : string;
}

export const USER_THANH_PHAM : User = {
    id: '1000',
    name: "Thanh Pham",
    profileImg: UserAssests.USER_PROFILE_IMAGES.USER_IMG_THANH_PHAM
}