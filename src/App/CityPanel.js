import React from 'react'

const CityPanel = (props) => {
  const getClass = () => {
    let distance = props.cityData.distance
    if (!isFinite(distance)) {
      return 'list-group-item-warning '
    } else if (distance <= props.maxTime && distance >= 0) {
      return 'list-group-item-success '
    } else {
      return 'list-group-item-danger '
    }
  }
  const getInfoAboutFireBrigade = () => {
    let distance = props.cityData.distance
    if (props.cityData.hasFireBrigade) {
      return 'Posiada jednostkę straży pożarnej.'
    } else {
      if (!isFinite(distance)) {
        return 'Brak możliwości dojazdu straży pożarnej.'
      } else if (distance <= props.maxTime && distance >= 0) {
        return `Czas dojazdu wynosi ${distance}.`
      } else {
        return `Czas dojazdu "${distance}" przekracza przyjęty limit.`
      }
    }
  }

  return (
    <li className={`city-panel list-group-item ${getClass()}`}>
      <p>Nazwa: <span> {props.cityData.name} </span></p>
      <p>{getInfoAboutFireBrigade()}</p>
    </li>
  )
}

export default CityPanel
