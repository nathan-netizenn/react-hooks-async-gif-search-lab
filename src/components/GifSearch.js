import React, { Component } from 'react';

class GifSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.query} onChange={this.handleChange} />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default GifSearch;