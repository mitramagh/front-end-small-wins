import "./Content.css";

export interface ContentProps {
    content:any;
    content_type:string;
    like_count?:number;
    comment?: string;
    content_id:number;
    plan_id:number;
}

const Content: React.FC <ContentProps>  =({content, content_type, like_count, comment, plan_id}) => {

    return (
        <div className="content">
            {/* <button  id="likeCount" onClick={() => updateLikes(content_id)}>{like_count} ❤️ </button>
            <button id="deleteCard" onClick={() => deleteCard(content_id)}>X</button> */}
            <h2>{content}</h2>
            <h2>{content_type}</h2>
            <h2>{comment}</h2>
        </div>
    )
}

export default Content;