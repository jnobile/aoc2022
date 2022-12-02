export function totalScorePartOne(input) {
    let score = 0;
    let trimmedInput = input.split('\n').map((x) => x.split(' '))
    for (let i = 0; i <= trimmedInput.length; i++) {
        if (trimmedInput[i] !== undefined) {
            score += scoreRoundPartOne(trimmedInput[i][0], trimmedInput[i][1])
        }
    }
    return score
}

export function totalScorePartTwo(input) {
    let score = 0;
    let trimmedInput = input.split('\n').map((x) => x.split(' '))
    for (let i = 0; i <= trimmedInput.length; i++) {
        if (trimmedInput[i] !== undefined) {
            score += scoreRoundPartTwo(trimmedInput[i][0], trimmedInput[i][1])
        }
    }
    return score
}

function scoreRoundPartOne(a, b){
    let score = 0
    if (b === 'X') { // Rock
        score += 1
    } else if (b === 'Y') { // Paper
        score += 2
    } else if (b === 'Z') { // Scissors
        score += 3
    }

    if (a === 'A') { // Rock
        if (b === 'X') { // Rock
            score += 3
        } else if (b === 'Y') { // Paper
            score += 6
        } else if (b === 'Z') { // Scissors
            score += 0
        }
    } else if (a === 'B') { // Paper
        if (b === 'X') { // Rock
            score += 0
        } else if (b === 'Y') { // Paper
            score += 3
        } else if (b === 'Z') { // Scissors
            score += 6
        }
    } else if (a === 'C') { // Scissors
        if (b === 'X') { // Rock
            score += 6
        } else if (b === 'Y') { // Paper
            score += 0
        } else if (b === 'Z') { // Scissors
            score += 3
        }
    }
    return score;
}

function scoreRoundPartTwo(a, b){
    // Rock=1, Paper=2, Scissors=3
    // Lose=0, Draw=3,  Win=6
    if (a === 'A') { // Rock
        if (b === 'X') { // Lose: Scissors
            return 0 + 3
        } else if (b === 'Y') { // Draw: Rock
            return 3 + 1
        } else if (b === 'Z') { // Win: Paper
            return 6 + 2
        }
    } else if (a === 'B') { // Paper
        if (b === 'X') { // Lose: Rock
            return 0 + 1
        } else if (b === 'Y') { // Draw: Paper
            return 3 + 2
        } else if (b === 'Z') { // Win: Scissors
            return 6 + 3
        }
    } else if (a === 'C') { // Scissors
        if (b === 'X') { // Lose: Paper
            return 0 + 2
        } else if (b === 'Y') { // Draw: Scissors
            return 3 + 3
        } else if (b === 'Z') { // Win: Rock
            return 6 + 1
        }
    }
}
