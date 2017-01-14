import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../css/styles.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: []
        };

        this.videoSearch('React Development');
    }

    videoSearch(term) {
        console.log(term);
    }

    render() {
        return (
            <div className="container">
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));