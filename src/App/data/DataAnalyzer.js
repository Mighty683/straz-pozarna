import PathFinder from './PathFinder.js'
import djv from 'djv'
import jsonSchema from './jsonSchema.json'

export default {

  validateJSON (jsonString) {
    let parsedObject
    try {
      parsedObject = JSON.parse(jsonString)
      let env = new djv()
      env.addSchema('test', jsonSchema)
      if (env.validate('test', parsedObject)) {
        throw new Error ('Brak wymaganych danych!')
      }
    } catch (err) {
      if (err instanceof SyntaxError) {
        return 'Zły format danych, wprowadź poprawny JSON!'
      } else {
        return err.message
      }
    }
    return undefined
  },

  parseData (json) {
    try {
      let data = JSON.parse(json),
        citiesGraph = this.prepareCitiesGraphTable(data)
      return {
        citiesData: this.prepareCitiesData(citiesGraph),
        maxTime: data.max_czas_przejazdu
      }
    }
    catch (err) {
      return undefined
    }
  },

  prepareCitiesGraphTable (data) {
    let graph = data.miasta.map(city => {
      return {
        name: city.nazwa,
        hasFireBrigade: city.ma_jednostke,
        roads: this.findConnectedCities(data, city)
      }
    })
    return graph
  },

  prepareCitiesData (citiesGraph) {
    return citiesGraph.map(cityNode => {
      return {
        name: cityNode.name,
        hasFireBrigade: cityNode.hasFireBrigade,
        distance: this.calculateFireBrigadeArrival(cityNode, citiesGraph)
      }
    })
  },

  calculateFireBrigadeArrival (cityNode, citiesGraph) {
    if (cityNode.hasFireBrigade) {
      return 0
    } else {
      let citiesWithFireBrigades = citiesGraph.filter(city => city.hasFireBrigade),
      timeTable = citiesWithFireBrigades.map(cityWithFireBrigade => {
        return PathFinder.findShortestPath(cityNode, cityWithFireBrigade, citiesGraph)
      })
      return timeTable.sort(
        (timeA, timeB) => {
          if (!isFinite(timeA - timeB)) {
            return !isFinite(timeA) ? 1 : -1;
          } else {
            return timeA - timeB
          }
      })[0]
    }
  },
  findConnectedCities (data, city) {
    return data.drogi.filter(road => {
      return road.miasta.indexOf(city.nazwa) >= 0
    }).map(road => {
      return {
        distance: road.czas_przejazdu,
        dest: road.miasta.find(cityName => cityName !== city.nazwa)
      }
    })
  }
}
