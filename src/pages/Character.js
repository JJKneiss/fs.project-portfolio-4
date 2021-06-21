import React, { Component } from 'react';
import Header from '../components/Header/Header';
import ImageCard from '../components/InfoCards/ImageCard/ImageCard'
import ItemList from '../components/ItemList/ItemList';

import CharData from '../DTO/CharData';
import ProfileImage from '../images/66CA0688-6891-4ED4-9946-AB09012CC531_1_105_c.jpeg'

class Character extends Component {
    state = {
        formInput: [{
        }],
        character: {
            id: "",
            name: "",
            description: "",
            thumbnail: "",
            comics: [],
            series: [],
            stories: [],
            events: []
        },
        suggested: [{
            name: "Previous Character",
            thumbnail: ProfileImage,
            description: "The previous character in the list"
        },
        {
            name: "Next Character",
            thumbnail: ProfileImage,
            description: "The next character in the list"
        }]
    }
    loadCharacter = () => {
        // Abbreviate state variable & create new Character Object
        let state = this.props.location.state;
        let c = new CharData();

        // Load API if state empty
        if (state === undefined) {
            this.loadAPI();
        }
        // Otherwise use props to fill data
        else {
            c.id = state.id
            c.name = state.name;
            c.description = state.description;
            c.thumbnail = state.thumbnail;

            c.comics = state.comics.items;
            c.series = state.series.items;
            c.stories = state.stories.items;
            c.events = state.events.items;
        }
        this.setState({ character: c })
    }
    loadAPI = async () => {
        // Set id to passed prop params
        let charId = this.props.match.params.text;

        // Make API Call
        const api = "https://gateway.marvel.com/v1/public/characters/";
        let request = charId + "?apikey=";
        let auth = "9fc3988f672586da032a847df46e7861";
        let connect = api + request + auth;
        try {
            const response = await fetch(connect);
            const data = await response.json();
            let character = data.data.results[0];
            console.log();
            // Use Character Object to pass data to state
            let c = new CharData();
            c.id = character.id
            c.name = character.name;
            c.description = character.description;
            c.thumbnail = character.thumbnail.path + "." + character.thumbnail.extension;
            c.comics = character.comics.items;
            c.series = character.series.items;
            c.stories = character.stories.items;
            c.events = character.events.items;
            this.setState({ character: c })
        }
        catch (err) {
            console.log(err);
        }
    };
    renderImageCards(path) {
        // If character description unavailable, set proper element
        let eventList = (path.length >= 1 || "No Description Available");
        if (eventList === "No Description Available") {
            return <h3> No Events Available</h3>
        }
        else {
            return (path.map((element, index) => {
                return <ImageCard key={index} val={element} height="150px" width="150px" />
            }))
        }
    }
    componentDidMount = () => this.loadCharacter();

    render() {
        // Abbreviate state & set render logic
        let character = this.state.character;
        let suggested = this.renderImageCards(this.state.suggested);
        return (
            <div className="App" >
                <Header />
                <section className="characters">
                    <h2>{character.name}</h2>
                    <img alt={character.name} src={character.thumbnail} height="300px" width="300px"></img>
                    <p>{character.description}</p>
                </section>
                <section className="characters">
                    {/* Pass list title & state path */}
                    <ItemList title={"Comics"} path={character.comics} />
                    <ItemList title={"Series"} path={character.series} />
                    <ItemList title={"Events"} path={character.events} />
                    <ItemList title={"Stories"} path={character.stories} />
                </section>
                <section className="characters">
                    <h2>Suggested</h2>
                    {suggested}
                </section>
            </div >
        );
    }
}
export default Character;