import React from 'react';

const TextCard = props => {
    return (
        <div key={props.id}>
            <h2>{props.val.title}</h2>
            <p>{props.val.description}</p>
        </div>
    );
}

export default TextCard;