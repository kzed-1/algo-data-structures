// Given an undirected graph ↴ with maximum degree ↴ DD, find a graph coloring ↴ using at most D + 1D + 1 colors.

// For example:

// First described by Robert Frucht in 1939, the Frucht graph is a 3 - regular graph with 12 vertices, 18 edges, and no nontrivial symmetries.
// This graph's maximum degree (DD) is 3, so we have 4 colors (D+1D+1). Here's one possible coloring:

// The Frucht graph with legal coloring.
// Graphs are represented by an array of NN node objects, each with a label, a set of neighbors, and a color:

class GraphNode {
    constructor(label) {
        this.label = label;
        this.neighbors = new Set();
        this.color = null;
    }
}

const a = new GraphNode('a');
const b = new GraphNode('b');
const c = new GraphNode('c');

a.neighbors.add(b);
b.neighbors.add(a);
c.neighbors.add(b);
b.neighbors.add(c);

const graph = [a, b, c];

//go through each node in the graph, and give it a color
// once color is assigned, move color pointer to the next color in list
// 

function colorNode(graph, colors) {

    graph.forEach(node => {

        if (node.neighbors.has(node)) {
            return new Error(`Legal coloring impossible for node with loop: ${node.label}`)
        }

        const illegalColors = new Set()

       node.neighbors.forEach(neighbor => {

           if (!illegalColors.has(neighbor.color)) {
               illegalColors.add(neighbor.color)
           }
       })

       colors.forEach(color => {
            if (!illegalColors.has(color)) {
                node.color = color;
                break;
            } 
       })
        
    })

}