const getPossibilities = require('./operations')

function locallyOptimalChoice(possibilities) {
    return possibilities.reduce((prev, current) => (prev.value > current.value) ? prev : current)
}

function execute(array) {
    let P = []
    let A = array

    while (A.length > 0) {
        const possibilities = getPossibilities(A)
        const { value, new_array } = locallyOptimalChoice(possibilities)

        P = [...P, value]
        A = new_array
    }

    return P.reduce((total, partial) => total + partial, 0)
}

module.exports = execute