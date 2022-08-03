import React from "react";
import "./ContentList.css";
import Content, {ContentProps} from "./Content";

export interface ContentListProps {
    contents:ContentProps[];
    deleteContent:(id:number) => void;
    updateLikes: (id:number) => void;

}

const ContentList = (props: ContentListProps) => {

    const contentComponents = contents.map((content) => {
        return (
            <Content
                    plan_id={content.plan_id}
                    content_id={content.content_id}
                    content={content.content}
                    content_type={content.content_type}
                    like_count={content.like_count}
                    comment={content.comment}
                    deleteContent={props.deleteContent}
                    updateLikes={props.updateLikes}
           ></Content>
        );
    })
    return <div className="contentList">{contentComponents}</div>;
};


export default ContentList;