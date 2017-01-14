import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../css/styles.css';

import config from './config/config';
import YouTubeApiSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoDetail from './components/video-detail';
import VideoList from './components/video-list';


class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch(config.DEFAULT_SEARCH_TERM);
    }

    videoSearch(term) {
        YouTubeApiSearch({
            key: config.YOUTUBE_API_KEY,
            term: term
        },(videos => this.setState({
            videos,
            selectedVideo: videos[0]
        })));
    }

    render() {
        return (
            <div className="container">
                <div className="row pt-3">
                    <SearchBar className="col" onSearchChange={term => this.videoSearch(term)}/>
                </div>
                <div className="row pt-3">
                    <VideoDetail video={this.state.selectedVideo}/>
                    <VideoList
                        onVideoSelect={video => this.setState({selectedVideo: video})}
                        videos={this.state.videos}/>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));