import React, {Component} from 'react';

class VideoListItem extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.video);
    }

    render() {
        return (
            <li className="list-group-item">
                Video
            </li>
        );
    }
}

export default VideoListItem;