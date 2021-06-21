import React from 'react';
import './ItemList.scss'
const ItemList = props => {
    // Set property for conditional render
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
                {/* load property */}
                {renderItems()}
            </ul>
        </article>
    );
}

export default ItemList;