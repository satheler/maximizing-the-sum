const readline = require('readline-sync')
const greedy = require('./greedy')
const bruteForce = require('./brute-force')

function start() {
  const array_size = readline.question('')
  const array_content = readline.question('')

  const array = array_content.trim()
    .split(' ')
    .slice(0, array_size)
    .map(Number)

  const greedy_algorithm = greedy(array)
  console.log("Algoritmo Guloso", greedy_algorithm)
  
  const brute_force_algorithm = bruteForce(array)
  console.log("Algoritmo de Força Bruta", brute_force_algorithm)
}

start()