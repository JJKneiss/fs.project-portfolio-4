import React from 'react';
// // import './Search.css'

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
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} placeholder="Search" onChange={this.handleChange} />
                {/* On Click send state value to Home page sendSearch function */}
                <input type="submit" value="Submit" onClick={() => this.props.data.sendSearch(this.state.value)} />
            </form>
        );
    }
}
export default Search;