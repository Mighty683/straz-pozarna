import React, { Component } from 'react'

class CityPanel extends Component {
  getClass () {
    let className = 'city-panel list-group-item ',
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
  getInfoAboutFireBrigade () {
    let arrivalTime = this.props.cityData.arrivalTime
    if (this.props.cityData.hasFireBrigade) {
      return 'Posiada jednostkę straży pożarnej.'
    } else {
      if (arrivalTime < 0) {
        return 'Brak możliwości dojazdu straży pożarnej.'
      } else if (arrivalTime > this.props.maxTime) {
        return `Czas dojazdu "${arrivalTime}" przekracza przyjęty limit.`
      } else {
        return `Czas dojazdu wynosi ${arrivalTime}.`
      }
    }
  }

  render () {
    return (
      <li className={this.getClass()}>
        <p>Nazwa: <span> {this.props.cityData.name} </span></p>
        <p>{this.getInfoAboutFireBrigade()}</p>
      </li>
    )
  }
}

export default CityPanel
