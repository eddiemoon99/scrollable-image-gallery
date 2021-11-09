import React from 'react';
import { galleryStyles } from '../styles/galleryStyles';
import { Image } from './image';
import { recursiveRandomizeArray } from '../utils/reorderArray';

// initializing default state pre-fetch
const initialState = {
  isFetching: false,
  photoData: []
}

// Gallery component
export class Gallery extends React.Component {
  constructor(props) {
    super(props);
    // getting data from cache if it exists already
    this.state = localStorage.getItem("appState") ? JSON.parse(localStorage.getItem("appState")) : initialState;
    this.reorderImages = this.reorderImages.bind(this);
  } 
    
  // function for fetching data and setting our state
  fetchData = () => {
    this.setState({
      ...this.state, 
      isFetching: true
    });
    fetch(props.PHOTO_DATA_URL)
      .then(response => response.json())
      .then(result => {
        this.setState({photoData: result, isFetching: false})
      })
      // error handling for fetch
      .catch(error => {
        console.log(error);
        this.setState({...this.state, isFetching: false});
      });
  };

  // function for recursively re-ordering the images
  reorderImages = () => {
    const newOrder = recursiveRandomizeArray(this.state.photoData);
    this.setState({
      photoData: newOrder,
      isFetching: false
    })
  }

  // fetching data if it does not exist in the cache
  componentDidMount() {
    if (!localStorage.getItem("appState")) {
      this.fetchData();
    }
  }


  // caching the photo data
  componentWillUnmount() {
    localStorage.setItem('appState', JSON.stringify(this.state));
  }

  render() {
    return (
      <div style={galleryStyles.mainContainer}>
        <div style={galleryStyles.row}>
          {/* {mapping our images from our state as Image components} */}
          {this.state.photoData.map(imageObj => <Image key={imageObj.id} url={imageObj.url} title={imageObj.title} />)}
        </div>
        <button style={galleryStyles.reorderButton} onClick={this.reorderImages}>
                    Reorder!
        </button>
      </div>
    )
  }
}