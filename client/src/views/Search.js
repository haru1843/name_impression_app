import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {
    render() {
        return (
            <div>
                <p>at 'Search'!!</p>
                <p><Link to="/">Home</Link></p>
                <p><Link to="/search">Search</Link></p>
            </div>
        );
    }
}

export default Search;