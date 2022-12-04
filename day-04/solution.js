export function partOne(input) {
    input = input.split('\n')

    let fullyOverlap = 0
    for (let i = 0; i < input.length; i++) {
        let areaAssignmentPair = getExpandedAreaRanges(input[i])
        if (isEitherProperSubset(areaAssignmentPair[0], areaAssignmentPair[1])) {
            fullyOverlap++
        }
    }
    return fullyOverlap
}

function getExpandedAreaRanges(areaAssignmentPair){
    // input for a pair of elves area assignments looks like "10-15,15-20"
    return areaAssignmentPair.split(',').map(singleAssignment => {
        let range = singleAssignment.split('-').map(x => parseInt(x))
        let start = range[0]
        let length = range[1]-start+1
        return [...Array(length).keys()].map(x => x + start)
    })
}

const isEitherProperSubset = (a,b) =>
    a.filter(x => b.includes(x)).length === a.length ||
    b.filter(x => a.includes(x)).length === b.length

export function partTwo(input) {
    input = input.split('\n')

    let partialOverlap = 0
    for (let i = 0; i < input.length; i++) {
        let areaAssignmentPair = getExpandedAreaRanges(input[i])
        if (hasAnyCommonElement(areaAssignmentPair[0], areaAssignmentPair[1])) {
            partialOverlap++
        }
    }
    return partialOverlap
}

const hasAnyCommonElement = (a,b) =>
    a.filter(x => b.includes(x)).length > 0 ||
    b.filter(x => a.includes(x)).length > 0
