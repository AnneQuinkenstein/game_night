import React, { Component } from 'react';
import giphy_key from '../../../Keys';
import Gif from './Gif';

class GifsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      cathegory: this.props.movieTitle,
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.cathegory}&tag=movie&api_key=${giphy_key}&limit=5`)
      .then(res => res.json())
      .then(data => this.setState({ gifs: data.data }))
      .catch(error => {console.log("There was an error fetching and parsing data", error);});
  }


  render() {
    return (
      <div className="GifsList">
        {this.state.gifs.map((gif, index) => <Gif gifURL={gif.images.downsized_large.url} falseGuesses={this.props.falseGuesses} index={index} key={gif.images.downsized_large.url} wrongLetter={this.props.wrongLetters[index]} />)}
      </div>
    );
  }
}

export default GifsList;
