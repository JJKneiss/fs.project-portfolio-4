import React from 'react';

const ImageCard = props => {
    return (
        <div key={props.id}>
            <h3>{props.val.title}</h3>
            <img alt="profile" src={props.val.img} width="200px" height="200px" />
            <p>{props.val.description}</p>
        </div>
    );
}

export default ImageCard;