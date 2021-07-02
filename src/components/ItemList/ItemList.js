import React from 'react';
import './ItemList.scss'

/* JK: Create List of <li> tags using passed data */
const ItemList = props => {
    /* Render Items according to availability */
    let renderItems = () => {
        if (props.path.length === 0) {
            return <p className="unavailable">Not Available</p>
        }
        else {
            return (props.path.map((element, index) => {
                return <li key={index}>{element.name}</li>
            }))
        }
    }
    return (
        <article >
            <h2>{props.title}</h2>
            <ul>
                {renderItems()}
            </ul>
        </article>
    );
}

export default ItemList;