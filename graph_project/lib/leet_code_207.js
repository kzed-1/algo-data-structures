// View the full problem and run the test cases at:
//  https://leetcode.com/problems/course-schedule/


// There are a total of n courses you have to take, labeled from 0 to n - 1.

// Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0, 1]

// Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses ?

//     Example 1:

// Input: 2, [[1, 0]]
// Output: true
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0. So it is possible.

//     Example 2:

// Input: 2, [[1, 0], [0, 1]]
// Output: false
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0, and to take course 0 you should
// also have finished course 1. So it is impossible.

//     Note:

// The input prerequisites is a graph represented by a list of edges, not adjacency matrices.Read more about how a graph is represented.
// You may assume that there are no duplicate edges in the input prerequisites.


function buildGraph(list) {
    let graph = {}

    list.forEach( prerequisite => {
        let [course, pre] = prerequisite.map(String)

        if (course in graph) {
            graph[course].push(pre)
        } else {
            graph[course] = [pre]
        }

        if (!(pre in graph)) {
            graph[pre] = []
        }
    })

    return graph
}

function canFinish(numCourses, prerequisites) {
    let prereqs = buildGraph(prerequisites)
    let totalCourses = Object.keys(prereqs)
    let takenCourses = new Set();

    let eligibleCoursesExist = true

    while (eligibleCoursesExist) {
        eligibleCoursesExist = false
        
        for (let course in prereqs) {
            let everyPreBeenMet = prereqs[course].every(pre => takenCourses.has(pre))
            if (!takenCourses.has(course) && everyPreBeenMet) {
                eligibleCoursesExist = true;
                takenCourses.add(course);
            }
        }

    }

    return totalCourses.length === takenCourses.size
}



