export default {
  findShortestPath(sourceCity, destCity, graphTable) {
    // Finding best ways using Dijskra algorithm.
    let resultTable = this.getResultTable(graphTable),
      sourceNode = resultTable.find(node => node.city === sourceCity),
      currentNode = sourceNode,
      destNode = resultTable.find(node => node.city === destCity)
      sourceNode.distance = 0
    do {
      currentNode = this.dijskraAlgorithmStep(resultTable, currentNode)
    }
    while (currentNode && currentNode !== destNode)
    return destNode.distance
  },

  dijskraAlgorithmStep (resultTable, nodeToProcess) {
    let nodesToVisit = this.findNodesToVisit(resultTable)
    if (nodesToVisit) {
      this.findAvailableRoads(nodesToVisit, nodeToProcess).forEach(road => {
        let nextCity = resultTable.find(node => node.city.name === road.dest)
        this.setNextCity(road.distance, nodeToProcess, nextCity)
      })
      this.setCityVisited(nodeToProcess)
      return this.findNearestNodeToVisit(nodesToVisit, nodeToProcess)
    } else {
      return undefined
    }
  },

  getResultTable (graphTable) {
    return graphTable.map(city => {
      return {
        city: city,
        distance: undefined,
        visited: false,
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

  setCityVisited (city) {
    city.visited = true
  },

  findAvailableRoads (nodesTable, sourceNode) {
    return sourceNode.city.roads.filter(
      road => nodesTable.find(node => node.city.name === road.dest))
  },

  findNodesToVisit (resultTable) {
    return resultTable.filter(
      node => !node.visited)
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
    return distance ? distance : undefined
  },

  compareNodeDistances (nodeA, nodeB, sourceNode) {
    let distA = this.calculateDistance(sourceNode, nodeA),
      distB = this.calculateDistance(sourceNode, nodeB)
    if (!isFinite(distA - distB)) {
      return !isFinite(distA) ? 1 : -1;
    } else {
      return distA - distB
    }
  }
}
