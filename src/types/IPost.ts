import {IUser} from "./IUser";
import {IComment} from "./IComment";

export interface IPost {
    userId: string;
    id: number;
    title: string;
    body: string;

    //Optional fields will be resolved after fetch
    user?: IUser;
    comments?: IComment[];
}