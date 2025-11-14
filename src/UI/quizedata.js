const quizData = [
  // 🔸 Section A: Advanced Output-Based Coding
  {
    question: "What is the output of Python code: print([i for i in range(3)] * 2)?",
    options: ["[0, 1, 2, 0, 1, 2]", "[0, 1, 2][0, 1, 2]", "Error", "[0, 1, 2] * 2"],
    answer: "[0, 1, 2, 0, 1, 2]"
  },
  {
    question: "JavaScript output: console.log([] == ![]);",
    options: ["true", "false", "undefined", "Error"],
    answer: "true"
  },
  {
    question: "What is the output of: print({1,2,3} == {3,2,1}) in Python?",
    options: ["True", "False", "Error", "None"],
    answer: "True"
  },
  {
    question: "Java output: System.out.println(10 + 20 + \"30\" + 40);",
    options: ["303040", "3030", "30304040", "303040"],
    answer: "303040"
  },
  {
    question: "What is the output of Python: print('abc' * 0 + 'xyz')?",
    options: ["abcxyz", "xyz", "abc", "Error"],
    answer: "xyz"
  },

  // 🔸 Section B: Complex Data Structure MCQs
  {
    question: "Which data structure is best for implementing LRU Cache?",
    options: ["HashMap + Doubly Linked List", "Stack", "Queue", "Heap"],
    answer: "HashMap + Doubly Linked List"
  },
  {
    question: "Which tree always maintains height O(log n)?",
    options: ["Binary Search Tree", "AVL Tree", "Ternary Tree", "Splay Tree"],
    answer: "AVL Tree"
  },
  {
    question: "Which graph algorithm is used for detecting negative weight cycles?",
    options: ["Dijkstra", "Prim", "Bellman-Ford", "Kruskal"],
    answer: "Bellman-Ford"
  },
  {
    question: "Which of the following is the correct inorder traversal of a BST?",
    options: ["Sorted order", "Reverse sorted", "Random order", "Preorder first"],
    answer: "Sorted order"
  },
  {
    question: "Which algorithm is used in topological sorting?",
    options: ["DFS", "Prim’s", "Kruskal’s", "Binary Search"],
    answer: "DFS"
  },

  // 🔸 Section C: Time & Space Complexity (Advanced)
  {
    question: "Time complexity of building a heap from an array?",
    options: ["O(n)", "O(n log n)", "O(log n)", "O(n²)"],
    answer: "O(n)"
  },
  {
    question: "Time complexity of searching in a Trie?",
    options: ["O(n)", "O(m)", "O(log n)", "O(1)"],
    answer: "O(m)"
  },
  {
    question: "Average-case complexity of QuickSort?",
    options: ["O(n log n)", "O(n²)", "O(log n)", "O(n)"],
    answer: "O(n log n)"
  },
  {
    question: "Space complexity of DFS (recursive)?",
    options: ["O(V)", "O(E)", "O(log V)", "O(1)"],
    answer: "O(V)"
  },
  {
    question: "Which algorithm requires extra space proportional to number of vertices?",
    options: ["DFS", "Binary Search", "Selection Sort", "Heap Sort"],
    answer: "DFS"
  },

  // 🔸 Section D: Advanced Programming Concepts
  {
    question: "Which feature is used to handle asynchronous operations in JavaScript?",
    options: ["Promises", "Polymorphism", "Interfaces", "Constructors"],
    answer: "Promises"
  },
  {
    question: "In Python, what does the 'yield' keyword do?",
    options: ["Creates a generator", "Stops iteration", "Returns multiple values", "Creates a list"],
    answer: "Creates a generator"
  },
  {
    question: "Which Java feature allows one interface with multiple implementations?",
    options: ["Abstraction", "Final classes", "Static binding", "Object slicing"],
    answer: "Abstraction"
  },
  {
    question: "Which JavaScript method is used to create a deep copy?",
    options: ["structuredClone()", "slice()", "map()", "parseInt()"],
    answer: "structuredClone()"
  },
  {
    question: "Which Python module is used for multithreading?",
    options: ["threading", "asyncio", "multiprocessing", "os"],
    answer: "threading"
  },

  // 🔸 Section E: Logical Advanced Coding MCQs
  {
    question: "Which sorting algorithm is stable?",
    options: ["Merge Sort", "Quick Sort", "Heap Sort", "Selection Sort"],
    answer: "Merge Sort"
  },
  {
    question: "Which hashing collision technique uses linked lists?",
    options: ["Chaining", "Linear Probing", "Quadratic Probing", "Double Hashing"],
    answer: "Chaining"
  },
  {
    question: "Which operation on a Red-Black tree may cause recoloring?",
    options: ["Insertion", "Traversal", "Searching", "Deletion only"],
    answer: "Insertion"
  },
  {
    question: "Which of the following is NOT a characteristic of DP problems?",
    options: ["Optimal substructure", "Overlapping subproblems", "Greedy choice works", "Memoization possible"],
    answer: "Greedy choice works"
  },
  {
    question: "Which algorithm is used in detecting strongly connected components?",
    options: ["Kosaraju", "Dijkstra", "Prim", "Heapify"],
    answer: "Kosaraju"
  }
];

export default quizData;
