import React, { Component } from 'react';
import Header from '../components/Header/Header';
import ImageCard from '../components/ImageCard/ImageCard'
import ProfileImage from '../images/66CA0688-6891-4ED4-9946-AB09012CC531_1_105_c.jpeg'

class Home extends Component {
    state = {
        formInput: [{
        }],
        characters: [{
            title: "Apples",
            img: ProfileImage,
            description: "Description"
        },
        {
            title: "Bananas",
            img: ProfileImage,
            description: "New Description"
        },
        {
            title: "Cucumbers",
            img: ProfileImage,
            description: "old Description"
        },
        {
            title: "Dragonfruit",
            img: ProfileImage,
            description: "Description"
        },
        {
            title: "Elderberry",
            img: ProfileImage,
            description: "New Description"
        },
        {
            title: "Fruit",
            img: ProfileImage,
            description: "old Description"
        },
        {
            title: "Honey",
            img: ProfileImage,
            description: "Description"
        },
        {
            title: "Iced Coffee",
            img: ProfileImage,
            description: "New Description"
        },
        {
            title: "Juice",
            img: ProfileImage,
            description: "old Description"
        },
        {
            title: "Kabob",
            img: ProfileImage,
            description: "old Description"
        }]
    }
    render() {
        let characters = this.state.characters.map((element, index) => {
            return <ImageCard key={index} val={element} height="100px" width="100px" />
        });
        return (
            <div className="App">
                <Header />
                <h2>Home</h2>
                <input />
                <button>Filter</button>
                {characters}
                <button>Load More</button>
            </div >
        );
    }
}
export default Home;