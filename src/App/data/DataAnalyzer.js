export default {
  prepareData (data) {
    let citiesGraph = this.prepareCitiesGraph(data)
    return {
      citiesData: this.prepareCitiesData(citiesGraph),
      maxTime: data.max_czas_przejazdu
    }
  },

  prepareCitiesGraph (data) {
    let graph = data.miasta.map(city => {
      return {
        name: city.nazwa,
        hasFireBrigade: city.ma_jednostke,
        roads: this.findConnectedCities(data, city)
      }
    })
    graph.forEach(cityNode => {
      cityNode.roads.forEach(road => {
        road.dest = graph.find(cityNode => cityNode.name === road.dest)
      })
    })
    return graph
  },

  prepareCitiesData (citiesGraph) {
    return citiesGraph.map(cityNode => {
      return {
        name: cityNode.name,
        hasFireBrigade: cityNode.hasFireBrigade,
        arrivalTime: this.calculateArrivalTime(cityNode, citiesGraph)
      }
    })
  },

  calculateArrivalTime (cityNode, initialTime) {
    let arrivalTime = 0
    if (cityNode.hasFireBrigade) {
      return arrivalTime
    } else {
        return this.calculateShortestArrivalTime(cityNode, citiesGraph)
    }
  },

  calculateShortestArrivalTime (cityNode, citiesGraph) {
    let citiesWithFireBrigade = citiesGraph.filter(cityNode => cityNode.hasFireBrigade)
    timeTable = citiesWithFireBrigade.map(cityWithFireBrigade => {
      return this.findShortestPath(cityNode, cityWithFireBrigade, citiesGraph)
    }
    return timeTable.sort.find
  },

  findShortestPath (sourceNode, destNode, graph) {
    let path = [],
      nextNode = sourceNode
    while ()
    nextNode = sourceNode.roads.find()
  }

  findConnectedCities (data, city) {
    return data.drogi.filter(road => {
      return road.miasta.indexOf(city.nazwa) >= 0
    }).map(road => {
      return {
        arrivalTime: road.czas_przejazdu,
        dest: road.miasta.find(cityName => cityName !== city.nazwa)
      }
    })
  }
}
