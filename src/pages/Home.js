import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SearchForm from '../components/Search/SearchForm';

import CharData from '../data/CharData';
import ImageList from '../components/ImageList/ImageList';

class Home extends Component {

    state = {
        charData: [],
        attribution: [],
        limiter: 4,
        offset: 0,
        totalResults: 0
    }

    loadAPI = async () => {
        // Create API call
        const api = "https://gateway.marvel.com/v1/public/characters?&apikey=";
        let auth = "9fc3988f672586da032a847df46e7861";
        let connect = api + auth;
        connect += '&limit=' + this.state.limiter;
        connect += '&offset=' + this.state.offset;
        console.log('api url', connect)
        this.setData(connect);
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
            if (data.data.results.length === 0) {
                alert("No results. Please check your spelling");
            }
            else {
                console.log(connect);
                console.log("api response", data.data)
                // Pass data to new Character Object
                this.setState({ offset: data.data.offset + data.data.count })
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
                    arr.push(c);
                });
                // Set state using Character Object
                this.setState({ charData: arr })
                this.setState({ attribution: data.attributionText })
                console.log(arr)
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    componentDidMount = () => this.loadAPI();
    render() {
        // let limiter = 4;
        return (
            <div className="App">
                <Header />
                <SearchForm />
                <section className="characters">
                    <ImageList path={this.state.charData} className="characters" />
                    {/* <button className="load-more" onClick={() => { */}
                    {/* this.setState({ limiter: this.state.limiter + 4 }) */}
                    {/* console.log(this.state.limiter) */}
                    {/* }}>Load More</button> */}
                    <button className="load-more" onClick={this.loadAPI}>Load More</button>
                    <p></p>
                </section>
                <Footer credit={this.state.attribution} />
            </div >
        );
    }
}
export default Home;