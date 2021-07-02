import React from 'react';
import { withRouter } from 'react-router-dom'
// import { NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './SearchForm.scss';

/* JK: Search form to make character calls to the Marvel API */
class SearchForm extends React.Component {
    // Create Controlled Component
    constructor(props) {
        // Set state & bind data
        super(props);

        // SB: By pre-populating our "value" from the url, we are guaranteeing the text box will reflect the current search.
        this.state = { value: this.props.match.params.text || '' };

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

    doSearch = (e) => {
        // SB: Keeps the form from trying to submit to itself.
        e.preventDefault();
        // SB: Navigates to a new page. 
        this.props.history.push('/Search/' + this.state.value);
    }

    render() {
        // let query = this.props.data;
        return (
            // SB: Button and enter key both trigger the same function via the form's onSubmit.
            <form onSubmit={this.doSearch}>
                <input type="text" value={this.state.value} placeholder="Search" onChange={this.handleChange} />
                <button disabled={!(this.state.value && this.state.value.length > 0)}>
                    <FaSearch />
                </button>
            </form>

        );
    }
}
// SB: withRouter allows us to access react-router features such as the history.
export default withRouter(SearchForm);