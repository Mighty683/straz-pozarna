import React from 'react'
import CityPanel from './CityPanel.js'
import DataAnalyzer from './data/DataAnalyzer.js'

const DataPanel = ({JSON}) => {
  const parsedData = DataAnalyzer.parseData(JSON)
  return (
    <ul className='data-panel list-group'>
      {
        parsedData && parsedData.citiesData
          ? (parsedData.citiesData.map(city => <CityPanel {... {cityData: city, maxTime: parsedData.maxTime}} />))
          : (<h2> Brak danych, wróc do formularza.</h2>)
      }
    </ul>
  )
}

export default DataPanel
