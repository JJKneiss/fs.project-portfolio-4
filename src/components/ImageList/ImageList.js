import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import './ImageList.scss';

const ImageList = props => {
    // Map item cards based on props passed in previous state.
    let list = props.path.map((element, index) => {
        // if (index < props.limiter) {
        return (<ImageCard key={element.id} val={element} height="150px" width="150px" />);
        // }
    })
    return (
        // < section className="characters" >
        <div>
            {list}
        </div>
        //         {/* <button className="load-more" onClick={() => { */ }
        // {/* this.setState({ limiter: this.state.limiter + 4 }) */ }
        // {/* console.log(this.state.limiter) */ }
        // {/* }}>Load More</button> */ }
        // {/* <button className="load-more" onClick={props.method}>Load More</button> */ }
        // {/* <p>Showing {props.currentNumber} of {props.totalNumber} results.</p> */ }
        //     // </section >
    );
}

export default ImageList;