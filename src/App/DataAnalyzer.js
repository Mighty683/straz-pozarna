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
        arrivalTime: this.calculateArrivalTime(cityNode)
      }
    })
  },

  calculateArrivalTime (cityNode, initialTime) {
    let arrivalTime = 0
    if (cityNode.hasFireBrigade) {
      return arrivalTime
    } else {
      for (let i = 0 ; i < cityNode.roads.length ; i++) {
          let road = cityNode.roads[i]
          if (road.dest.hasFireBrigade) {
            return road.arrivalTime
          } else {
            return -1
          }
      }
    }
  },

  findConnectedCities (data, city) {
    return data.drogi.filter(road => {
      return road.miasta.indexOf(city.nazwa) >= 0
    }).map(road => {
        console.log(road)
      return {
        arrivalTime: road.czas_przejazdu,
        dest: road.miasta.find(cityName => cityName !== city.nazwa)
      }
    })
  }
}
