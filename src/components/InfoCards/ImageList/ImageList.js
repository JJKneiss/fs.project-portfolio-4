import React from 'react';
import ImageCard from '../../../components/InfoCards/ImageCard/ImageCard';
import './ImageList.scss';

const ImageList = props => {
    // Map item cards based on props passed in previous state.
    let list = props.path.map((element, index) => {
        if (index < props.limiter) {
            return (<ImageCard key={element.id} val={element} height="150px" width="150px" />);
        }
    })
    return (
        <div>
            {list}
        </div>
    );
}

export default ImageList;