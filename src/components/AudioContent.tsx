
import React from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS


export interface AudioContentProps {
    id:number;
    title:string;
    url?:string;
}

const AudioContent: React.FC <AudioContentProps > = ({title, url}) => {
    return (
        <div className="Audio">
            <AudioPlayer autoPlay src="http://example.com/audio.mp3" onPlay={e => console.log("onPlay")} />
            <button> play this </button>
        </div>
);
    }