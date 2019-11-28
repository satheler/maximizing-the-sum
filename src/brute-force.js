const getPossibilities = require('./operations')
const { max } = Math

function execute(A, P = []) {
    if (A.length === 0) {
        return P.reduce((total, partial) => total + partial, 0);
    }

    const possibilities = getPossibilities(A)
    return possibilities.reduce((previous_value, { value, new_array }) => {
        sum = execute(new_array, [...P, value])
        return max(previous_value, sum)
    }, 0)
}

module.exports = execute