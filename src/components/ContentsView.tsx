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
const ContentsView=(props.ContentsViewProps) => {
    return (
        <div className="content_container">
            <ContentList contents={contentData.contents} deleteContent={undefined}></ContentList>
        </div>

    )
}
// const exitPlan=()



export default ContentsView;