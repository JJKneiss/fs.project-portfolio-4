import React, { Component } from 'react';
import Header from '../components/Header/Header';
import ImageCard from '../components/ImageCard/ImageCard'
import CharData from '../DTO/CharData';

class Home extends Component {

    state = {
        formInput: [{
        }],
        charData: []
    }

    loadAPI = () => {
        const api = "https://gateway.marvel.com/v1/public/characters?apikey=";
        let auth = "9fc3988f672586da032a847df46e7861";
        let connect = api + auth;
        fetch(connect)
            .then(response => response.json())
            .then(data => {
                let arr = [];
                data.data.results.forEach(element => {
                    let c = new CharData();
                    c.name = element.name;
                    c.description = element.description;
                    c.thumbnail = element.thumbnail.path + "." + element.thumbnail.extension;
                    arr.push(c);
                });
                this.setState({ charData: arr })
            })
            .catch(err => console.log(err));
    };
    componentDidMount = () => this.loadAPI();
    render() {
        let characters = this.state.charData.map((element, index) => {
            return <ImageCard key={index} val={element} height="150px" width="150px" />
        });

        return (
            <div className="App">
                <Header />
                <section>
                    <form class="example" action="action_page.php">
                        <input type="text" placeholder="Search.." name="search" />
                        <button type="submit"><i class="fa fa-search"></i></button>
                        <button>Filter</button>
                    </form>
                </section>
                <section className="characters">
                    {characters}
                    <button className="load-more">Load More</button>
                </section>
            </div >
        );
    }
}
export default Home;