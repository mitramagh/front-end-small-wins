import React from "react";
import ContentList , {ContentListProps} from "./ContentList";
import "./ContentsView.css";
// import NewContentButton from "./NewContentButton";

export interface ContentsViewProps {
    contentData: ContentListProps,
    // deleteContent,
    // addContent,
    // updateLikes,
    // chosenPlan,
    // setChosenPlan,
    // setContents,
}
const ContentsView=(props:ContentsViewProps) => {
    return (
        <div className="content_container">
            <ContentList contents={props.contentData.contents} 
            deleteContent={function (id: number): void {
                throw new Error("Function not implemented.");
            } }
             updateLikes={function (id: number): void {
                throw new Error("Function not implemented.");
            } }></ContentList>
        </div>

    )
}
// const exitPlan=()



export default ContentsView;