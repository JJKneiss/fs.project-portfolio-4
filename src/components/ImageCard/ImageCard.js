import React from 'react';
import { NavLink } from 'react-router-dom';
import './ImageCard.scss'

/* JK: Image Card involving title, image, & description */
const ImageCard = props => {
    // Create Variables for Card Info
    let title = props.val.name;
    let id = props.val.id;
    let desc = (props.val.description || "No Description Available");
    let thumbnail = props.val.thumbnail;

    /* JK: Render description according to availability*/
    let renderDescription = () => {
        if (desc === "No Description Available" || desc === "") {
            return (<p className="unavailable">{"No Description Available"}</p>)
        }
        else {
            let newDesc = desc.slice(" ", 240);
            newDesc += "..."
            return (<p>{newDesc}</p>)
        }
    }
    /* JK: Create navlink with parameter */
    let goToChar = (item) => (< NavLink to={{
        pathname: "/Character/" + id,
        state: props.val
    }}>{item}</NavLink>)
    return (
        <article className="item-card" key={props.id}>
            <h3>{goToChar(title)}</h3>
            {goToChar(<img alt={title} src={thumbnail} width={props.width} height={props.height} />)}
            <div className="description">
                {/* Set render conditional */}
                {renderDescription()}
                {/* {Navigate to page using character } */}
                {goToChar("Details")}
            </div>
        </article >
    );
}

export default ImageCard;