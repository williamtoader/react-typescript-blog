import React from "react";
import {IComment} from "../../types/IComment";
import Comment from "../ui/Comment";
import {useState} from "react";
import CustomToolbarButton from "../ui/CustomToolbarButton";

export default function Comments(props) {
    const comments: IComment[] = props.comments;
    const [hidden, setHidden] = useState(true);
    return (
        <div className={`w-full md:p-8 mt-3 p-0 ${(comments.length === 0 ? "hidden" : "")}`}>
            <CustomToolbarButton
                text={hidden ? `Show ${comments.length} comments` : 'Hide comments'}
                icon={hidden ? "fa fa-arrow-down fa-solid" : "fa fa-arrow-up fa-solid"}
                onClick={()=>{setHidden(!hidden)}}/>
            <div className={`${hidden ? "invisible h-0 opacity-0" : "visible h-auto opacity-100"} transition-all ease-in-out delay-150 mt-5`}>
                <div className={hidden ? "hidden" : ""}>
                    {comments.map(comment => <Comment comment={comment}/>)}
                </div>

            </div>
        </div>

    )
}