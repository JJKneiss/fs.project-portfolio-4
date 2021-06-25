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
        if (desc === "No Description Available" || desc === " ") {
            return (<p className="unavailable">{"No Description Available"}</p>)
        }
        else {
            let newDesc = desc.slice(" ", 325);
            newDesc += "..."
            return (<p>{newDesc}</p>)
        }
    }
    return (
        <article className="item-card" key={props.id}>
            <h3>{title}</h3>
            <img alt={title} src={thumbnail} width={props.width} height={props.height} />
            <div className="description">
                {/* Set render conditional */}
                {renderDescription()}
                {/* {Navigate to page using character } */}
                < NavLink to={{
                    pathname: "/Character/" + id,
                    state: props.val
                }}>
                    Details
            </NavLink>
            </div>
        </article >
    );
}

export default ImageCard;