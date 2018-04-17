import React, { Component } from 'react'
import CityPanel from './CityPanel.js'
import DataAnalyzer from './data/DataAnalyzer.js'

class DataPanel extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ...DataAnalyzer.parseData(props.JSON)
    }
  }
  render () {
    return (
      <ul className='data-panel list-group'>
        {
          this.state.citiesData
            ? (this.state.citiesData.map(city => <CityPanel {... {cityData: city, maxTime: this.state.maxTime}} />))
            : (<h2> Brak danych, wróc do formularza.</h2>)
        }
      </ul>
    )
  }
}

export default DataPanel
