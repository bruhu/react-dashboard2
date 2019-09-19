import React, { Component } from 'react'

export class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), color: null }
  }

  //re renders time every second
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  //generates random color within 256 shades of RGB
  ChangeColor() {
    let newColor = `rgb( ${Math.floor(Math.random() * 256)}, 
   ${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)}`;
    return newColor;
  }

  tick() {
    this.setState({
      date: new Date(),
      color: this.ChangeColor()
    })
  }

  render() {
    return (
      <React.Fragment>
        <p>What colorful time is it?</p>
        <div className='container' style={{ color: this.state.color }}>
          <h2 className='clock'>{this.state.date.toLocaleTimeString()}</h2>
        </div>
      </React.Fragment>
    )
  }
}

export default Clock;
