package math


//original code retrieved from: https://www.algorithms-and-technologies.com/a_star/java

object AStar {
    /**
     * Finds the shortest distance between two nodes using the A-star algorithm
     * @param graph an adjacency-matrix-representation of the graph where (x,y) is the weight of the edge or 0 if there is no edge.
     * @param heuristic an estimation of distance from node x to y that is guaranteed to be lower than the actual distance. E.g. straight-line distance
     * @param start the node to start from.
     * @param goal the node we're searching for
     * @return The shortest distance to the goal node. Can be easily modified to return the path.
     */
    fun aStar(graph: Array<IntArray>, heuristic: Array<DoubleArray>, start: Int, goal: Int): Double {

        //This contains the distances from the start node to all other nodes
        val distances = IntArray(graph.size)
        //Initializing with a distance of "Infinity"
        distances.fill(Int.MAX_VALUE)
        //The distance from the start node to itself is of course 0
        distances[start] = 0

        //This contains the priorities with which to visit the nodes, calculated using the heuristic.
        val priorities = DoubleArray(graph.size)
        //Initializing with a priority of "Infinity"
        priorities.fill( Int.MAX_VALUE.toDouble())
        //start node has a priority equal to straight line distance to goal. It will be the first to be expanded.
        priorities[start] = heuristic[start][goal]

        //This contains whether a node was already visited
        val visited = BooleanArray(graph.size)

        //While there are nodes left to visit...
        while (true) {

            // ... find the node with the currently lowest priority...
            var lowestPriority = Int.MAX_VALUE.toDouble()
            var lowestPriorityIndex = -1
            for (i in priorities.indices) {
                //... by going through all nodes that haven't been visited yet
                if (priorities[i] < lowestPriority && !visited[i]) {
                    lowestPriority = priorities[i]
                    lowestPriorityIndex = i
                }
            }
            if (lowestPriorityIndex == -1) {
                // There was no node not yet visited --> Node not found
                return (-1).toDouble()
            } else if (lowestPriorityIndex == goal) {
                // Goal node found
                println("Goal node found!")
                return distances[lowestPriorityIndex].toDouble()
            }
            println("Visiting node $lowestPriorityIndex with currently lowest priority of $lowestPriority")

            //...then, for all neighboring nodes that haven't been visited yet....
            for (i in 0 until graph[lowestPriorityIndex].size) {
                if (graph[lowestPriorityIndex][i] != 0 && !visited[i]) {
                    //...if the path over this edge is shorter...
                    if (distances[lowestPriorityIndex] + graph[lowestPriorityIndex][i] < distances[i]) {
                        //...save this path as new shortest path
                        distances[i] = distances[lowestPriorityIndex] + graph[lowestPriorityIndex][i]
                        //...and set the priority with which we should continue with this node
                        priorities[i] = distances[i] + heuristic[i][goal]
                        println("Updating distance of node " + i + " to " + distances[i] + " and priority to " + priorities[i])
                    }
                }
            }

            // Lastly, note that we are finished with this node.
            visited[lowestPriorityIndex] = true
            //System.out.println("Visited nodes: " + Arrays.toString(visited));
            //System.out.println("Currently lowest distances: " + Arrays.toString(distances));
        }
    }
}