import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
    }
    
    render() {
        return (
            <div className="col search-bar"> 
                <input className="form-control" 
                        placeholder="Search YouTube" 
                        value={ this.state.term } 
                        onChange={ event => this.onSearchChange(event.target.value) } 
                        autoFocus/>
            </div>
        );
    }

    onSearchChange(term) {
        this.setState({ term });
        this.props.onSearchChange(term)
    }
}

export default SearchBar;