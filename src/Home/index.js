import React, { Component } from 'react';
import Slide1 from './Slide1';

class Home extends Component {
  
  state = {}

  componentDidMount() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.setState({
      height, width
    })
  }

  render() {
    const { height, width } = this.state;
    console.log('width:', width);
    console.log('height:', height);
    return (
      <div>
        <Slide1 width={width} />
      </div>
    )
  }
}

export default Home;