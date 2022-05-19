import {IUser} from "../types/IUser";
import axios from "axios";

const endpointURL = "https://jsonplaceholder.typicode.com/users";

export const UsersApiService = {
    getAll: async (): Promise<IUser[]> => {
        const res = await axios.get(endpointURL);
        return res.data;
    }
    ,
    getById: async (userId: string): Promise<IUser> => {
        const res = await axios.get(endpointURL, {
            params: {
                id: userId
            }
        });
        if(res.data.length === 0) throw new Error("No user");
        return res.data[0];
    }
}