function operation_1(array) {
    const last = array.pop()
    return { value: last, new_array: array }
}

function operation_2(array) {
    const last = array.pop()
    const penultimate = array.pop()
    const value = penultimate * last

    return { value, new_array: array }
}

function operation_3(array) {
    return operation_1(array.reverse())
}

function operation_4(array) {
    return operation_2(array.reverse())
}

function possibilities(array) {
    const simulation_1 = operation_1([...array])
    const simulation_2 = operation_2([...array])
    const simulation_3 = operation_3([...array])
    const simulation_4 = operation_4([...array])

    return array.length === 1
        ? [simulation_1, simulation_3]
        : [simulation_1, simulation_2, simulation_3, simulation_4]
}

module.exports = possibilities