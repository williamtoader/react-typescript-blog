import {IComment} from "../types/IComment";
import axios from "axios";

const endpointURL = "https://jsonplaceholder.typicode.com/comments";

export const CommentsApiService = {
    getAll: async (): Promise<IComment[]> => {
        const res = await axios.get(endpointURL);
        return res.data;
    }
    ,
    getByPost: async (postId: string): Promise<IComment[]> => {
        const res = await axios.get(endpointURL, {
            params: {
                postId: postId
            }
        });
        return res.data;
    }
}