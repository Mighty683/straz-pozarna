import React, { Component } from 'react'

class CityPanel extends Component {

  getClass () {
    let  distance = this.props.cityData.distance
    if (!isFinite(distance)) {
      return 'list-group-item-warning '
    } else if (distance <= this.props.maxTime && distance >= 0) {
      return 'list-group-item-success '
    } else {
      return 'list-group-item-danger '
    }
  }

  getInfoAboutFireBrigade () {
    let distance = this.props.cityData.distance
    if (this.props.cityData.hasFireBrigade) {
      return 'Posiada jednostkę straży pożarnej.'
    } else {
      if (!isFinite(distance)) {
        return 'Brak możliwości dojazdu straży pożarnej.'
      } else if (distance > this.props.maxTime) {
        return `Czas dojazdu "${distance}" przekracza przyjęty limit.`
      } else {
        return `Czas dojazdu wynosi ${distance}.`
      }
    }
  }

  render () {
    return (
      <li className={`city-panel list-group-item ${this.getClass()}`}>
        <p>Nazwa: <span> {this.props.cityData.name} </span></p>
        <p>{this.getInfoAboutFireBrigade()}</p>
      </li>
    )
  }
}

export default CityPanel
