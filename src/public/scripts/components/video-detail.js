import React from 'react';

const VideoDetail = ({video}) => {
    if(!video) {
        return <div className="col-lg-8">
            <div className="video-detail">
                Loading...
            </div>
        </div>;
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
        <div className="col-lg-8">
            <div className="video-detail">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" 
                        allowFullScreen="allowFullScreen" 
                        src={url}></iframe>
                </div>
                <div className="details">
                    <h3>{video.snippet.title}</h3>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        </div>
    );
};

export default VideoDetail;