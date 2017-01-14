import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../css/styles.css';

import config from './config/config';
import YouTubeApiSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';


class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            videos: []
        };
        this.videoSearch(config.DEFAULT_SEARCH_TERM);
    }

    videoSearch(term) {
        YouTubeApiSearch({
            key: config.YOUTUBE_API_KEY,
            term: term
        },(videos => this.setState({videos})))
    }

    render() {
        return (
            <div className="container">
               <SearchBar onSearchChange={term => this.videoSearch(term)}/>
               Videos Count: {this.state.videos.length}
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));