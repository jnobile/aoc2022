export function partOne(input) {
    input = input.split('\n')
    let stacks = getStacks(input)

    // rearrange stacks
    for (let i = 0; i < input.length; i++) {
        if (input[i].substr(0,5) !== "move ") {
            continue
        }

        let moveParts = input[i].split(' ')
        let moveCount = parseInt(moveParts[1])
        let from = parseInt(moveParts[3]) - 1
        let to = parseInt(moveParts[5]) - 1

        for (let j = 0; j < moveCount; j++) {
            stacks[to].push(stacks[from].pop())
        }
    }

    return getTopCrates(stacks)
}

export function partTwo(input) {
    input = input.split('\n')
    let stacks = getStacks(input)

    // rearrange stacks
    for (let i = 0; i < input.length; i++) {
        if (input[i].substr(0,5) !== "move ") {
            continue
        }

        let moveParts = input[i].split(' ')
        let moveCount = parseInt(moveParts[1])
        let from = parseInt(moveParts[3]) - 1
        let to = parseInt(moveParts[5]) - 1

        let holding = []
        for (let j = 0; j < moveCount; j++) {
            holding.push(stacks[from].pop())
        }

        for (let j = 0; j < moveCount; j++) {
            stacks[to].push(holding.pop())
        }
    }

    return getTopCrates(stacks)
}

function getTopCrates(stacks) {
    let topCrates = '';
    for (let i = 0; i < stacks.length; i++) {
        topCrates += stacks[i].pop()
    }

    return topCrates
}

function getStacks(input) {
    // construct stacks in proper order
    let stacks = [...Array(9).keys()].map(x => [])
    for (let i = 0; i < input.length; i++) {
        if (input[i].substr(0,1) === " ") {
            break
        }

        let row = input[i].split('')
        for (let j = 1; j < row.length; j += 4) {
            if (row[j] !== ' ') {
                stacks[(j+3)/4 - 1].push(row[j])
            }
        }
    }

    for (let i = 0; i < stacks.length; i++) {
        stacks[i] = stacks[i].reverse()
    }

    return stacks
}
