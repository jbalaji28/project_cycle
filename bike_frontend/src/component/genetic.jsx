const Genetic = require('genetic-js');

// Define the list of cities
const cities = ['Marina Beach', 'Guindy National Park', 'Chennai Central Railway Station', 'Kapaleeshwarar Temple', 'Vadapalani Murugan Temple'];

// Distance matrix in kilometers (straight-line distance)
const distances = [
    [0, 12, 7, 9, 15],  // Distance from Marina Beach to other locations
    [12, 0, 11, 15, 6], // Distance from Guindy National Park to other locations
    [7, 11, 0, 8, 13],  // Distance from Chennai Central Railway Station to other locations
    [9, 15, 8, 0, 12],  // Distance from Kapaleeshwarar Temple to other locations
    [15, 6, 13, 12, 0]  // Distance from Vadapalani Murugan Temple to other locations
];

// Create a genetic algorithm instance
const genetic = Genetic.create();

// Define the fitness function
genetic.optimize = Genetic.Optimize.Minimize;

genetic.seed = function () {
    // Create a random permutation of cities
    return this.userData.initialRoute.slice().sort(() => Math.random() > 0.5 ? 1 : -1);
};

genetic.mutate = function (entity) {
    // Swap two random cities in the route
    const i = Math.floor(Math.random() * entity.length);
    const j = Math.floor(Math.random() * entity.length);
    [entity[i], entity[j]] = [entity[j], entity[i]];
    return entity;
};

genetic.crossover = function (mother, father) {
    // Partially mapped crossover (PMX)
    const start = Math.floor(Math.random() * mother.length);
    const end = Math.floor(Math.random() * (mother.length - start)) + start;

    const child = Array.from({ length: mother.length });
    const segment = mother.slice(start, end + 1);
    const mapping = new Map(segment.map((x, i) => [x, father[i + start]]));

    for (let i = start; i <= end; i++) {
        let gene = mother[i];
        while (mapping.has(gene)) {
            gene = mapping.get(gene);
        }
        child[i] = gene;
    }

    for (let i = 0; i < mother.length; i++) {
        if (i < start || i > end) {
            child[i] = mother[i];
        }
    }

    return child;
};

genetic.fitness = function (entity) {
    // Calculate the total distance of the route
    let distance = 0;
    for (let i = 0; i < entity.length - 1; i++) {
        distance += distances[entity[i]][entity[i + 1]];
    }
    distance += distances[entity[entity.length - 1]][entity[0]]; // Return to the starting point
    return distance;
};

// Define genetic algorithm parameters
genetic.generation = function* (pop) {
    // Run the genetic algorithm for a specified number of generations
    for (let i = 0; i < 100; i++) {
        yield* Genetic.generation.generationFunctions.mutate.call(this, pop);
    }
};

// Run the genetic algorithm
const userData = { initialRoute: [0, 1, 2, 3, 4] }; // Example initial route
const result = genetic.evolve(userData);

console.log("Best Route:", result.entity.map(index => cities[index]));
console.log("Total Distance:", result.fitness);
