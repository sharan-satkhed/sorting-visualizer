import React, { Component } from 'react';
import $ from "jquery";
import './App.css';
import Header from './header'
import { bubbleSort } from './algorithms/bubbleSort'
import { quickSort } from './algorithms/quickSort'
import { heapSort } from './algorithms/heapSort'
import { mergeSort } from './algorithms/mergeSort'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { data: [], arraySize: 20 };
    this.state.sortSpeed = 300;//in ms
  }

  reset = () =>{
    window.location.reload();
  }

  componentWillMount() {
    for (var i = 0; i < this.state.arraySize; i++) {
      this.state.data.push(this.getRandomNumber());
    }
  }

  getRandomNumber = () => {
    return Math.floor(Math.random() * 1000);
  }

  getBarChar = (data) => {
    if (!data) {
      return null;
    }

    const totalData = data.length;
    const width = 100 / totalData;
    const maxNum = Math.max.apply(Math, data);

    var chartElements = data.map(num => {
      var height = (num * 100) / maxNum;
      return (
        <div class="bar-char-item" title={num} style={{ "width": width + "%", height: height + "%" }} />
      );
    })

    return (<div class="bar-char-container" > {chartElements}</div>);
  }

  addArray = () => {

    var newData = [];

    for (var i = 0; i < this.state.arraySize; i++) {
      newData.push(this.getRandomNumber());
    }

    this.setState({ data: this.state.data.concat(newData) })
    $('.bar-char-item').css('background-color', 'orange');
  }

  sort = (sortAlgo) => {
    var swaps = [];
    if (sortAlgo === 'bubbleSort') {
      swaps = bubbleSort(this.state.data.slice(0, this.state.data.length));
    } else if(sortAlgo === 'quickSort'){
      swaps = quickSort(this.state.data.slice(0, this.state.data.length));
    } else if(sortAlgo === 'heapSort'){
      swaps = heapSort(this.state.data.slice(0, this.state.data.length));
    } else if(sortAlgo === 'mergeSort'){
      swaps = mergeSort(this.state.data.slice(0, this.state.data.length));
    }
    this.swapStateData(swaps, 0);
  }

  swapStateData = (swaps, idx) => {

    if (idx >= swaps.length) {
      $('.bar-char-item').css('background-color', 'mediumseagreen');
      return;
    }

    setTimeout(() => {

      var i = swaps[idx][0];
      var j = swaps[idx][1];

      var data = this.state.data;
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
      this.setState({ data });
      this.swapStateData(swaps, idx + 1);
    }, this.state.sortSpeed)

  }


  sortSpeedChange = (e) =>{
    this.setState({sortSpeed : 1000 - e.target.value});
  }

  render() {

    var barChar = this.getBarChar(this.state.data);

    return (
      <div>
        <Header reset={this.reset} addArray={this.addArray} sort={this.sort} sortSpeed={this.state.sortSpeed} sortSpeedChange={this.sortSpeedChange}/>
        <div>
          {barChar}
        </div>
      </div>
    );
  }
}

