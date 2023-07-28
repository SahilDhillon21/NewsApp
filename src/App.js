import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  title = 'Sahil'
  render() {
    return (
      <div>
        <h3>Hello my first cbc, by <strong>{this.title}</strong></h3>
      </div>
    )
  }
}
