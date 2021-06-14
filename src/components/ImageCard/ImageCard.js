import React from 'react';
import './ImageCard.css'

const ImageCard = props => {
    let title = props.val.name;
    let desc = (props.val.description || "No Description Available");
    let thumbnail = props.val.thumbnail;
    return (
        <div class="item-card" key={props.id}>
            <h3>{title}</h3>
            <img alt={title} src={thumbnail} width={props.width} height={props.height} />
            <p>{desc}</p>
        </div>
    );
}

export default ImageCard;