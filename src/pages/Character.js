import React, { Component } from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ItemList from '../components/ItemList/ItemList';
import CharacterDescription from '../components/CharacterDescription/CharacterDescription';
import CharData from '../data/CharData';
class Character extends Component {
    state = {
        character: {
            id: "",
            name: "",
            description: "",
            thumbnail: "",
            comics: [],
            series: [],
            stories: [],
            events: [],
            wiki: ""
        }
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
            c.wiki = state.wiki;
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
            c.wiki = character.wiki;
            this.setState({ character: c })
        }
        catch (err) {
            console.log(err);
        }
    };
    renderDescription(desc) {
        if (desc === "") {
            return (<p className="unavailable">{"No Description Available"}</p>)
        }
        else {
            return (<p>{desc}</p>)
        }
    }
    renderLists(character) {
        console.log(character.comics.length);
        let arr = [character.comics, character.series, character.events, character.stories];
        console.log(arr);
        let counter = character.comics.length + character.series.length + character.events.length + character.stories.length;
        arr.forEach(element => {
            counter += element.length;
        })
        console.log(counter);
        if (counter === 0) {
            return (<p>whoops</p>)
        } else {
            return (<section className="characters" >
                {/* Pass list title & state path */}
                <ItemList title={"Comics"} path={character.comics} />
                <ItemList title={"Series"} path={character.series} />
                <ItemList title={"Events"} path={character.events} />
                <ItemList title={"Stories"} path={character.stories} />
            </section>)
        }
    }
    componentDidMount = () => this.loadCharacter();

    render() {
        // Abbreviate state & set render logic
        let character = this.state.character;
        return (
            <div className="App" >
                <Header />
                <CharacterDescription character={character} method={this.renderDescription(character.description)} />
                {this.renderLists(character)}
                <Footer credit={this.state.attribution} />
            </div >
        );
    }
}
export default Character;