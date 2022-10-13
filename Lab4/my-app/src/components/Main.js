import React, { Component } from 'react'
import { Films } from '../shared/ListOfFilms.js'
import FilmsPresentation from './FilmsPresentation.js';
export class Main extends Component {
    constructor() {
        super();
        this.state = {
           films: Films
        };
    }
    render() {
      return <FilmsPresentation films={this.state.films}/>
    }
  }
  export default Main