import React, { Component } from 'react';
import Header from '../components/Header/Header';
import ImageCard from '../components/ImageCard/ImageCard';
import profileImage from '../image/profileImage.jpg';

class About extends Component {
    state = {
        formInput: [{
        }],
        profile: [{
            name: "Jamie Kneiss",
            thumbnail: profileImage,
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
                        <img alt={profile} src={profileImage} height="300px" width="300px" />
                        <p>Jamie is an aspiring web developer doing his best to bring the spirit of each project to life.</p>
                    </div>
                    <div className="project">
                        <h2>Project: Marvel Wiki</h2>
                        <p>While just a basic wiki application using the Marvel API, this React based application has taught Jamie a lot about the React framework, maintaining project scope, and simply thinking along the lines that a developer should. </p>
                    </div>
                </section>
            </div >
        );
    }
}
export default About;