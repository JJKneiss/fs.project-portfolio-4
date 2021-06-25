import React, { Component } from 'react';
import Header from '../components/Header/Header';
import ImageCard from '../components/ImageCard/ImageCard';

class About extends Component {
    state = {
        formInput: [{
        }],
        profile: [{
            name: "Jamie Kneiss",
            thumbnail: "",
            description: "Description"
        }],
        project: [{
            name: "Project Synopsis: Marvel Wiki",
            description: "A simple wiki using the Marvel API"
        }]
    }
    render() {
        // Map image cards using passed state
        let profile = this.state.profile.map((element, index) => {
            return <ImageCard key={index} val={element} height="100px" width="100px" />
        });
        return (
            <div className="App">
                <Header />
                <section>
                    <div className="profile">
                        <h2>Jamie Kneiss</h2>
                        <img alt={profile} src={""} height="300px" width="300px" />
                        <p>Minor Description</p>
                    </div>
                    <div className="project">
                        <h2>Project: Marvel Wiki</h2>
                        <p>A basic wiki application using the Marvel API</p>
                    </div>
                </section>
            </div >
        );
    }
}
export default About;