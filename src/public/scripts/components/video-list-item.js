import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    return (
        <li className="list-group-item video-list-item" onClick={event=>onVideoSelect(video)}>
            <div className="media">
                <div className="video-list-item-left">
                    <img className="mr-3" src={video.snippet.thumbnails.default.url} />
                </div>
                <div className="media-body video-list-item-body">
                    {video.snippet.title}
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;