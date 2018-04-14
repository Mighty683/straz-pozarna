import React, { Component } from 'react'
import CityPanel from './CityPanel.js'

class DataPanel extends Component {
  render () {
    return (
      <ul className='data-panel list-group'>
        {this.props.citiesData.map(city => <CityPanel {... {cityData: city, maxTime: this.props.maxTime}} />)}
      </ul>
    )
  }
}

export default DataPanel
