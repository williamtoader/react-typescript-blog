import React from "react";
import {IComment} from "../../types/IComment";
export default function Comment(props) {
    const comment: IComment = props.comment;
    return (
        <div className="min-h-[60px] border-l-2 pl-2 mb-2 border-solid font-sans text-md border-gray-800 text-gray-800">
            <p className="text-sm">
                <b className="font-ui">From:</b> {comment.email}
            </p>

            <p className="font-serif">
                {comment.body}
            </p>
        </div>
    )
}