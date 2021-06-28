import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SearchForm from '../components/Search/SearchForm';

import CharData from '../data/CharData';
import ImageList from '../components/ImageList/ImageList';

class SearchPage extends Component {


    state = {
        charData: [],
        attribution: [],
        limiter: 8,
        offset: 0,
        totalResults: 0
    }

    loadAPI = async () => {
        // // Create API call
        // const api = "https://gateway.marvel.com/v1/public/characters?&apikey=";
        // let auth = "9fc3988f672586da032a847df46e7861";
        // let connect = api + auth;
        // connect += '&limit=' + this.state.limiter;
        // connect += '&offset=' + this.state.offset;
        // console.log('api url', connect)
        // this.setData(connect);
        this.sendSearch(this.props.match.params.text);
    };
    sendSearch(item) {
        if (item !== undefined && item !== "") {
            (async () => {
                const api = "https://gateway.marvel.com/v1/public/characters?nameStartsWith=";
                let name = item;
                let fullCall = api + name
                fullCall += '&limit=' + this.state.limiter;
                fullCall += '&offset=' + this.state.offset;
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
                console.log("api response", data.data)
                // Pass data to new Character Object
                this.setState({ offset: data.data.offset + data.data.count, totalResults: data.data.total })
                console.log("data", this.state.charData);
                console.log("limiter", this.state.limiter);
                console.log("offset", this.state.offset);
                console.log("totalResults", this.state.totalResults);
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
                // Set state using Character Object
                this.setState({ charData: arr })
                this.setState({ attribution: credit })
                console.log(arr)
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    // SB: Runs any time the component is about to be displayed, so we grab the url variable and trigger our search.
    componentDidMount = () => this.sendSearch(this.props.match.params.text);

    // SB: Runs if the component is already mounted, but something in props or state changes.
    componentDidUpdate = (previousProps) => {

        // SB: Because the component updates frequently, we have to make sure we're only loading
        //      new data when the url has been changed.
        if (previousProps.match.params.text !== this.props.match.params.text) {
            // SB Note: In here would be a reasonable place to nuke the charData array, since it only runs when the
            //          search has changed and not necessarily when you "show more"
            this.sendSearch(this.props.match.params.text);
        }
    }
    render() {
        return (
            <div className="App">
                <Header />
                {/* SB: No longer need to pass unnecessary data or functions to Search. */}
                <SearchForm />
                <ImageList path={this.state.charData} className="characters" />
                <button className="load-more" onClick={this.loadAPI}>Load More</button>
                <p>Showing {this.state.charData.length} of {this.state.totalResults} results.</p>
                <Footer credit={this.state.attribution} />
            </div >
        );
    }
}
export default SearchPage;