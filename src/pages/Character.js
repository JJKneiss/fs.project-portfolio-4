import React, { Component } from 'react';
import Header from '../components/Header/Header';
// import TextCard from '../components/TextCard/TextCard'
import ImageCard from '../components/ImageCard/ImageCard'
import ProfileImage from '../images/66CA0688-6891-4ED4-9946-AB09012CC531_1_105_c.jpeg'

class Character extends Component {
    state = {
        formInput: [{
        }],
        comics: [{
            title: "Comic 1",
            title: "Comic 2",
            title: "Comic 3",
            title: "Comic 4"
        }],
        stories: [{
            title: "Story 1",
            title: "Story 2",
            title: "Story 3",
            title: "Story 4"
        }],
        seriess: [{
            title: "Series 1",
            title: "Series 2",
            title: "Series 3",
            title: "Series 4"
        }],
        eventss: [{
            title: "Event 1",
            title: "Event 2",
            title: "Event 3",
            title: "Event 4"
        }],
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
    render() {
        let suggested = this.state.suggested.map((element, index) => {
            return <ImageCard key={index} val={element} height="150px" width="150px" />
        });
        return (
            <div className="App">
                <Header />
                <h2>Character</h2>
                <input />
                <div>
                    <h2>Comics</h2>
                    <ul>
                        <li>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>Series</h2>
                    <ul>
                        <li>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>Events</h2>
                    <ul>
                        <li>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>Stories</h2>
                    <ul>
                        <li>
                        </li>
                    </ul>
                </div>
                <section className="characters">
                    <h3>Suggested</h3>
                    {suggested}
                </section>
            </div >
        );
    }
}
export default Character;