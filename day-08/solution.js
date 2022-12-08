export function partOne(input) {
    let rows = getForest(input)
    let countVisible = 0
    for(let i = 0; i < rows.length; i++) {
        for(let j = 0; j < rows[i].length; j++) {
             if (isVisibleOver(rows, i, j)) {
                rows[i][j][1] = 'V'
                countVisible++
            }
        }
    }

    return countVisible
}

function isVisibleOver(rows, i, j) {
    if (i === 0 || j === 0 || i === rows.length-1 || j === rows[i].length-1) {
        return true
    }

    let here = rows[i][j]

    let heights = []
    for (let goingUp = i-1; goingUp >= 0; goingUp--) {
        heights.push(rows[goingUp][j][0])
    }
    if (heights.sort().reverse()[0] < here[0]) {
        return true
    }

    heights = []
    for (let goingDown = i+1; goingDown < rows.length; goingDown++) {
        heights.push(rows[goingDown][j][0])
    }
    if (heights.sort().reverse()[0] < here[0]) {
        return true
    }

    heights = []
    for (let goingLeft = j-1; goingLeft >= 0; goingLeft--) {
        heights.push(rows[i][goingLeft][0])
    }
    if (heights.sort().reverse()[0] < here[0]) {
        return true
    }

    heights = []
    for (let goingRight = j+1; goingRight < rows[i].length; goingRight++) {
        heights.push(rows[i][goingRight][0])
    }
    if (heights.sort().reverse()[0] < here[0]) {
        return true
    }
}

export function partTwo(input) {
    let rows = getForest(input)
    let maxScore = 0
    for(let i = 0; i < rows.length; i++) {
        for(let j = 0; j < rows[i].length; j++) {
            let currentScore = getScore(rows, i, j)
            if (currentScore > maxScore) {
                maxScore = currentScore
            }
        }
    }
    return maxScore
}

function getScore(rows, i, j) {
    let here = rows[i][j]

    let up = 0
    for (let goingUp = i-1; goingUp >= 0; goingUp--) {
        up++
        if (here[0] <= rows[goingUp][j][0]) {
            break
        }

    }

    let down = 0
    for (let goingDown = i+1; goingDown < rows.length; goingDown++) {
        down++
        if (here[0] <= rows[goingDown][j][0]) {
            break
        }
    }

    let left = 0
    for (let goingLeft = j-1; goingLeft >= 0; goingLeft--) {
        left++
        if (here[0] <= rows[i][goingLeft][0]) {
            break
        }
    }

    let right = 0
    for (let goingRight = j+1; goingRight < rows[i].length; goingRight++) {
        right++
        if (here[0] <= rows[i][goingRight][0]) {
            break
        }
    }

    return up * down * left * right
}

function getForest(input) {
    input = input.split('\n')

    let rows = new Array(input.length);
    for(let i = 0; i < input.length; i++) {
        let line = input[i].split('')
        let columns = new Array(line.length)
        for(let j = 0; j < line.length; j++) {
            columns[j] = [line[j], '-']
        }
        rows[i] = columns
    }

    return rows
}
