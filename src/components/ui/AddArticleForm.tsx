import React, {useState} from "react";
import { useFormik } from 'formik';
import CustomSelect from "./CustomSelect";
import {Input} from "postcss";
import {useDeps} from "../../service/DependencyInjector";
export default function AddArticleForm(props) {
    const usersAPI = useDeps().usersAPI;
    const [options, setOptions] = useState([{text: "Select user", key: ""}]);
    usersAPI.getAll().then(users => {
        let result = [ {text: "Select user", key: ""}, ...users.map(user => ({text: user.name, key: String(user.id)})) ];
        setOptions(result);
    });
    const formik = useFormik({
        initialValues: {
            title: '',
            userId: '',
            postBody: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    /*
    Form structure:
    Title
    User select
    Post body
    */
    return (
        <div>
            <form onSubmit={(e)=>{e.preventDefault()}}>
                <input
                    name="title"
                    id="title"
                    type="text"
                    className="w-full h-10 px-4 mb-2 text-md text-gray-700 placeholder-gray-600 border rounded-md focus:shadow-outline"
                    onChange={(e)=>{formik.handleChange(e)}}
                    placeholder={"Title"}
                />
                <br/>
                <CustomSelect options={
                    options
                } onChange={val => {formik.setFieldValue("userId", val)}}/>
                <br/>
                <textarea
                    name="postBody"
                    onChange={(e)=>{formik.handleChange(e)}}
                    className={"w-full px-4 py-2 mb-2 text-md text-gray-700 placeholder-gray-600 border rounded-md focus:shadow-outline"}
                    placeholder={"Post body"}
                />
            <br/>
                <button
                    type="submit" onClick={()=>formik.handleSubmit()}
                    className="border rounded-full p-5 text-sm bg-white hover:bg-gray-200 border-black tracking-widest uppercase"
                >Submit</button>
            </form>
        </div>
    )
}