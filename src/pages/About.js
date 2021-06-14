import React, { Component } from 'react';
import Header from '../components/Header/Header';
import TextCard from '../components/TextCard/TextCard'
import ImageCard from '../components/ImageCard/ImageCard'
import ProfileImage from '../images/66CA0688-6891-4ED4-9946-AB09012CC531_1_105_c.jpeg'

class About extends Component {
    state = {
        formInput: [{
        }],
        profile: [{
            name: "Jamie Kneiss",
            thumbnail: ProfileImage,
            description: "Description"
        }],
        project: [{
            name: "Project Synopsis: Marvel Wiki",
            description: "A simple wiki using the Marvel API"
        }]
    }
    render() {
        let profile = this.state.profile.map((element, index) => {
            return <ImageCard key={index} val={element} height="100px" width="100px" />
        });
        let project = this.state.project.map((element, index) => {
            return <TextCard key={index} val={element} />
        });
        return (
            <div className="App">
                <Header />
                <h2>About</h2>
                {profile}
                {project}
            </div >
        );
    }
}
export default About;