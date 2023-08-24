import { ObjectId } from "mongodb";

export interface UserInterface {
    _id?: ObjectId;
    fullName: string;
    email: string;
    password?: string;
    image?: string;
    wishList?: [];
    cart?: [];
}