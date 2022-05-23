import React, {useState} from "react";
import {useDeps} from "../../service/DependencyInjector";
import CustomSelect from "../ui/CustomSelect";

export const AuthorPicker = (props) => {
    const usersAPI = useDeps().usersAPI;
    const [options, setOptions] = useState([{text: "Select user", key: ""}]);
    usersAPI.getAll().then(users => {
        let result = [ {text: "Select user", key: ""}, ...users.map(user => ({text: user.name, key: String(user.id)})) ];
        setOptions(result);
    });

    return (
        <CustomSelect options={options} onChange={props.onChange}/>
    )
}