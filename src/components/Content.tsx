import React from "react";
import "./Content.css";
// import AudioContent, { AudioContentProps } from "./AudioContent";

export interface ContentProps {
    content:number|string|undefined|null;
    content_type:string;
    like_count?:number;
    comment?: string;
    content_id:number;
    plan_id:number;
    updateLikes: (id:number) => void;
    deleteContent: (id:number) => void;
}

const Content=(props:ContentProps) => {

    return (
        <div className="content">
            {/* <button  id="likeCount" onClick={() => props.updateLikes(props.content_id)}>{props.like_count} ❤️ </button>
            <button id="deleteContent" onClick={() => props.deleteContent(props.content_id)}>X</button>  */}
            <h2>{props.content}</h2>
            <h2>{props.content_type}</h2>
            <h2>{props.comment}</h2>
            {/* <h2>{AudioContent}</h2> */}
        </div>
    )
}

export default Content;




