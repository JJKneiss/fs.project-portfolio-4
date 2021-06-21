import React from 'react';
import { NavLink } from 'react-router-dom';
import './ImageCard.scss'

const ImageCard = props => {
    // Create Variables for Card Info
    let title = props.val.name;
    let id = props.val.id;
    let desc = (props.val.description || "No Description Available");
    let thumbnail = props.val.thumbnail;

    // Set Unavailable if Description empty
    let renderDescription = () => {
        if (desc === "No Description Available") {
            return (<p className="unavailable">{desc}</p>)
        }
        else {
            return (<p>{desc}</p>)
        }
    }
    return (
        <article className="item-card" key={props.id}>
            <div className="char-profile">
                <h3>{title}</h3>
                <img alt={title} src={thumbnail} width={props.width} height={props.height} />
            </div>
            <div className="description">
                {/* Set render conditional */}
                {renderDescription()}
                {/* {Navigate to page using character } */}
                < NavLink to={{
                    pathname: "/Character/" + id,
                    state: props.val
                }}>
                    Read More
            </NavLink>
            </div>
        </article>
    );
}

export default ImageCard;