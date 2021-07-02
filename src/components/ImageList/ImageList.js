import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import './ImageList.scss';

/* JK: Create Image List using list of Image Card components */
const ImageList = props => {
    let list = props.path.map((element, index) => {
        return (<ImageCard key={element.id} val={element} height="150px" width="150px" />);
    })
    return (
        // < section className="characters" >
        <section className="characters">
            {list}
        </section>
    );
}

export default ImageList;