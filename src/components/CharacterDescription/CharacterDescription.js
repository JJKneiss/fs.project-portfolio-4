import React from 'react';
import './CharacterDescription.scss';
const CharacterDescription = props => {
    return (
        <section className="individual">
            <h2>{props.character.name}</h2>
            <img alt={props.character.name} src={props.character.thumbnail} height="300px" width="300px" />
            { props.method}
        </section >
    );
}

export default CharacterDescription;


