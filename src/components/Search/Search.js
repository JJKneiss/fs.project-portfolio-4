import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './Search.scss';

class Search extends React.Component {
    // Create Controlled Component
    constructor(props) {
        // Set state & bind data
        super(props);
        this.state = { value: '' };

        // Bind to this
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }
    render() {
        let query = this.props.data;
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} placeholder="Search" onChange={this.handleChange}
                    onKeyDown={(e) => { if (e.key === 'Enter') { query.sendSearch(this.state.value) } }}
                />
                {/* On Click send state value to Home page sendSearch function */}

                < NavLink to={{
                    pathname: "/Search/" + this.state.value,
                    state: this.state.value
                }}>
                    <FaSearch onClick={() => query.sendSearch(this.state.value)} />
                </NavLink>
            </form >
        );
    }
}
export default Search;