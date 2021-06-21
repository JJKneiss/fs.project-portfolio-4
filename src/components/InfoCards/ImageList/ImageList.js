import React from 'react';
import ImageCard from '../../../components/InfoCards/ImageCard/ImageCard';
import './ImageList.scss';

const ImageList = props => {
    // Map item cards based on props passed in previous state.
    let list = props.path.map((element, index) => {
        return <ImageCard key={element.id} val={element} height="150px" width="150px" />
    })
    return (
        <section className={props.className}>
            {list}
            <button className="load-more">Load More</button>
        </section>
    );
}

export default ImageList;