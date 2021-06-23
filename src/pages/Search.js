import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Search from '../components/Search/Search';

import CharData from '../DTO/CharData';
import ImageList from '../components/InfoCards/ImageList/ImageList';

class Home extends Component {

    state = {
        charData: [],
        attribution: [],
        limiter: 4
    }

    loadAPI = async () => {
        // Create API call
        const api = "https://gateway.marvel.com/v1/public/characters?&apikey=";
        let auth = "9fc3988f672586da032a847df46e7861";
        let connect = api + auth;
        this.setData(connect);
    };
    sendSearch(item) {
        if (item !== undefined && item !== "") {
            console.log(item);
            (async () => {
                const api = "https://gateway.marvel.com/v1/public/characters?nameStartsWith=";
                let name = item;
                let fullCall = api + name;
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
            let arr = [];
            let credit = data.attributionText;
            console.log(data.data.results)
            if (data.data.results.length === 0) {
                alert("No results. Please check your spelling");
            }
            else {
                // Pass data to new Character Object
                data.data.results.forEach(element => {
                    console.log(element);
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
                this.setState({ attribution: credit })
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    componentDidMount = () => this.sendSearch(this.props.match.params.text);
    render() {
        // let query = this.props.match.params.text;
        // console.log(query);
        return (
            <div className="App">
                <Header />
                <Search data={
                    {
                        charData: this.state.charData,
                        sendSearch: this.sendSearch.bind(this)
                    }
                } />
                <section className="characters">
                    <ImageList path={this.state.charData} limiter={this.state.limiter} className="characters" />
                    <button className="load-more" onClick={() => {
                        this.setState({ limiter: this.state.limiter + 4 })
                        console.log(this.state.limiter)
                    }}>Load More</button>
                </section>
                <Footer credit={this.state.attribution} />
            </div >
        );
    }
}
export default Home;