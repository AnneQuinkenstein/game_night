import React, { Component } from 'react';
import giphy_key from '../../../Keys'; 
import GifList from './GifsList';
import './Pics.css';

class Pics extends Component {

  constructor(props){
    super(props); 
    this.state = {
      dataArray: [],
      cathegory: props.movieTitle,
    }
  }

  componentDidMount(){
    this.fetchData(); 
  }
  
  fetchData = () => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.cathegory}&tag=movie&api_key=${giphy_key}&limit=5`)
      .then(res => res.json())
      .then(data => this.setState({dataArray: data.data}))
  }


  render(){
    return (
      <div className="Pics"> 
          <GifList gifs={this.state.dataArray} falseGuesses={this.props.falseGuesses}/>  
      </div> 
    );
  }
}

export default Pics;
