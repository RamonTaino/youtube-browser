import React from 'react';
import VideoListItem from './video-list-item';

const VideoList = ({videos, onVideoSelect}) => {
    const videoListItems = videos.map(video => <VideoListItem onVideoSelect={onVideoSelect} key={video.etag} video={video} />)
    return (
        <div className="col-lg-4">
            <ul className="list-group video-list">
                {videoListItems}
            </ul>
        </div>
    );
};

export default VideoList;