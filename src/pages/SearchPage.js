import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SearchForm from '../components/Search/SearchForm';

import CharData from '../data/CharData';
import ImageList from '../components/ImageList/ImageList';

/* JK: This page sends user input search parameters and returns the desired characters */
class SearchPage extends Component {
    state = {
        charData: [],
        attribution: [],
        limiter: 8,
        offset: 0,
        totalResults: 0
    }

    /* JK: On Button Click, load API again with search input */
    loadAPI = async () => this.sendSearch(this.props.match.params.text);

    /* JK: Accept search input & method source for context, then send to final API call */
    sendSearch(item, src) {
        if (item !== undefined && item !== "") {
            (async () => {
                const api = "https://gateway.marvel.com/v1/public/characters?nameStartsWith=";
                let name = item;
                let fullCall = api + name

                fullCall += '&limit=' + this.state.limiter;
                if (src === "search") {
                    this.setState({ offset: 0 });
                    fullCall += '&offset=' + 0;
                }
                else {
                    fullCall += '&offset=' + this.state.offset;
                }
                const key = "&apikey=";
                let auth = "9fc3988f672586da032a847df46e7861";
                let fullAuth = key + auth;
                let connect = fullCall + fullAuth;
                this.setData(connect);
            })();
        }
        else {
            alert("Search bar empty.");
        }
    }

    /* JK: Using search parameters,
    accept API data using transfer object and populate state with details */
    async setData(connect) {
        try {
            const response = await fetch(connect);
            const data = await response.json();
            let arr = this.state.charData || [];
            let credit = data.attributionText;
            if (data.data.results.length === 0) {
                alert("No results. Please check your spelling");
            }
            else {
                console.log("api response", data.data);

                /* JK: Pass api data to new Character */
                data.data.results.forEach(element => {
                    let c = new CharData();
                    c.id = element.id;
                    c.name = element.name;
                    c.description = element.description;
                    c.thumbnail = element.thumbnail.path + "." + element.thumbnail.extension;
                    c.comics = element.comics;
                    c.events = element.events;
                    c.series = element.series;
                    c.stories = element.stories;
                    c.wiki = element.urls[1].url;
                    arr.push(c);
                });
                this.setState({
                    charData: arr,
                    attribution: credit,
                    offset: data.data.offset + data.data.count,
                    totalResults: data.data.total
                });
                console.log(arr);
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    // SB: Runs any time the component is about to be displayed, so we grab the url variable and trigger our search.
    componentDidMount = () => this.sendSearch(this.props.match.params.text, "search");

    // SB: Runs if the component is already mounted, but something in props or state changes.
    componentDidUpdate = (previousProps) => {

        // SB: Because the component updates frequently, we have to make sure we're only loading
        //      new data when the url has been changed.
        if (previousProps.match.params.text !== this.props.match.params.text) {
            // SB Note: In here would be a reasonable place to nuke the charData array, since it only runs when the
            //          search has changed and not necessarily when you "show more"
            this.setState({ charData: [], offset: 0, totalResults: 0 });
            this.sendSearch(this.props.match.params.text, "search");
        }
    }
    render() {
        return (
            <div className="App">
                <Header />
                {/* SB: No longer need to pass unnecessary data or functions to Search. */}
                <SearchForm />
                <ImageList path={this.state.charData} className="characters" />
                {/* JK: On button click, clear state & create new API call with user input */}
                <button disabled={(this.state.charData.length === this.state.totalResults)} className="load-more" onClick={this.loadAPI}>Load More</button>
                {/* JK: Display the current set of results out of total results */}
                <p>Showing {this.state.charData.length} of {this.state.totalResults} results.</p>
                <Footer credit={this.state.attribution} />
            </div >
        );
    }
}
export default SearchPage;