export default {
  generateTimeTable (sourceCity, graphTable) {
    // Finding best ways using Dijskra algorithm.
    let workTable = this.getResultTable(graphTable),
      resultTable = workTable.slice(),
      sourceNode = workTable.find(node => node.city === sourceCity),
      currentNode = sourceNode
    sourceNode.distance = 0
    do {
      currentNode = this.dijskraAlgorithmStep(workTable, currentNode)
    }
    while (currentNode)
    return resultTable
  },

  dijskraAlgorithmStep (resultTable, nodeToProcess) {
    if (resultTable) {
      this.findAvailableRoads(resultTable, nodeToProcess).forEach(road => {
        let nextCity = resultTable.find(node => node.city.name === road.dest)
        this.setNextCity(road.distance, nodeToProcess, nextCity)
      })
      this.removeCityFromTable(resultTable, nodeToProcess)
      return this.findNearestNodeToVisit(resultTable, nodeToProcess)
    } else {
      return undefined
    }
  },

  getResultTable (graphTable) {
    return graphTable.map(city => {
      return {
        city: city,
        distance: undefined,
        prevNode: undefined
      }
    })
  },

  setNextCity (roadDistance, sourceNode, destNode) {
    let sourceNodeDistance = sourceNode.distance + roadDistance
    if (destNode.distance) {
      if (destNode.distance > sourceNode.distance + roadDistance) {
        destNode.distance = sourceNode.distance + roadDistance
        destNode.prevNode = sourceNode
      }
    } else {
      destNode.distance = sourceNodeDistance
      destNode.prevNode = sourceNode
    }
  },

  removeCityFromTable (resultTable, nodeToProcess) {
    let nodeToRemoveIndex = resultTable.indexOf(nodeToProcess)
    resultTable.splice(nodeToRemoveIndex, 1)
  },

  findAvailableRoads (nodesTable, sourceNode) {
    return sourceNode.city.roads.filter(
      road => nodesTable.find(node => node.city.name === road.dest))
  },

  findNearestNodeToVisit (nodesTable, sourceNode) {
    return nodesTable.sort(
      (nodeA, nodeB) => {
        return this.compareNodeDistances(nodeA, nodeB, sourceNode)
      })[0]
  },

  calculateDistance (nodeA, nodeB) {
    let distance = 0,
      currentNode = nodeB
    while (currentNode.prevNode && currentNode !== nodeA) {
      distance += currentNode.distance
      currentNode = currentNode.prevNode
    }
    return distance || undefined
  },

  compareNodeDistances (nodeA, nodeB, sourceNode) {
    let distA = this.calculateDistance(sourceNode, nodeA),
      distB = this.calculateDistance(sourceNode, nodeB)
    if (!isFinite(distA - distB)) {
      return !isFinite(distA) ? 1 : -1
    } else {
      return distA - distB
    }
  }
}
