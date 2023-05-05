import React, { Component } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

class GifListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: []
    };
  }

  componentDidMount() {
    this.fetchGifs();
  }

  fetchGifs = (query = 'dolphin') => {
    const apiKey = 'B6pyZ0DEu4jfGAqZaGZqu322dY5i6Di2';
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g&limit=3`)
      .then(response => response.json())
      .then(data => this.setState({ gifs: data.data }))
      .catch(error => console.log(error));
  }

  handleSearchSubmit = (query) => {
    this.fetchGifs(query);
  }

  render() {
    return (
      <div>
        <GifSearch onSubmit={this.handleSearchSubmit} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;