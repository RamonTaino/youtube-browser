import React from 'react';
import VideoListItem from './video-list-item';

const VideoList = ({videos}) => {
    const videoListItems = videos.map(video => <VideoListItem key={video.etag} video={video}/>)
    return (
        <div className="col">
            <ul className="list-group">
                {videoListItems}
            </ul>
        </div>
    );
};

export default VideoList;