import React, { Component } from 'react';
import moment from "moment";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Jordan Portfolio. DevCamp React Starter. React Redux Router</h1>
        <div>
          {moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}
        </div>
      </div>
    );
  }
}
