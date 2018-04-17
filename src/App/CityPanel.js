import React, { Component } from 'react'

class CityPanel extends Component {
  getClass () {
    let className = 'city-panel list-group-item ',
      distance = this.props.cityData.distance
    if (!isFinite(distance)) {
      className += 'list-group-item-warning '
    } else if (distance < this.props.maxTime && distance >= 0) {
      className += 'list-group-item-success '
    } else {
      className += 'list-group-item-danger '
    }
    return className
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
      <li className={this.getClass()}>
        <p>Nazwa: <span> {this.props.cityData.name} </span></p>
        <p>{this.getInfoAboutFireBrigade()}</p>
      </li>
    )
  }
}

export default CityPanel
