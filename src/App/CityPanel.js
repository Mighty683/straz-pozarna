import React, { Component } from 'react'

class CityPanel extends Component {
  getClass () {
    let className = 'list-group-item ',
      arrivalTime = this.props.cityData.arrivalTime
    if (arrivalTime < this.props.maxTime && arrivalTime >= 0) {
      className += 'list-group-item-success '
    } else if (arrivalTime === this.props.maxTime) {
      className += 'list-group-item-warning '
    } else {
      className += 'list-group-item-danger '
    }
    return className
  }

  render () {
    return (
      <li className={this.getClass()}>
        <p>City Name: <span> {this.props.cityData.name} </span></p>
        <p>Has fire brigade: <span> {this.props.cityData.hasFireBrigade.toString()} </span></p>
        <p>Arrival Time: <span> {this.props.cityData.arrivalTime} </span></p>
      </li>
    )
  }
}

export default CityPanel
