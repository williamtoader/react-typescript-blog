import axios from "axios";
import {IPost} from "../types/IPost";
const endpointURL = "https://jsonplaceholder.typicode.com/posts";

export const PostsApiService = {
    getPaginated: async (pageNo: number, limit: number): Promise<IPost[]> => {
        if(pageNo < 1) throw new Error("Out of bounds");

        const res = await axios.get(endpointURL, {
            params: {
                _page: pageNo,
                _limit: limit,
                _sort: "id",
                _order: "desc"
            }
        });
        if (pageNo > Math.ceil(Number(res.headers["x-total-count"]) / limit)) throw new Error("Out of bounds");
        return res.data;
    }
    ,
    getByUserId: async (userId: string): Promise<IPost[]> => {
        const res = await axios.get(endpointURL, {
            params: {
                userId: userId
            }
        });
        if(res.data.length === 0) throw new Error("No posts");
        return res.data;
    }
}