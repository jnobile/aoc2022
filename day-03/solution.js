export function partOne(input) {
    let rucksacks = input
        .split('\n')
        .map((x) => [
            x.substr(0, x.length / 2),
            x.substr(x.length / 2, x.length / 2)
        ])

    return rucksacks
        .map(x => findCommonItemType(x[0], x[1]))
        .map(getPriority)
        .reduce((a, b) => a + b);
}

function getPriority(a) {
    if(a === a.toUpperCase()) {
        return a.charCodeAt(0) - 38;
    } else {
        return a.charCodeAt(0) - 96;
    }
}

function findCommonItemType(a, b) {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                return a[i];
            }
        }
    }
    throw "Failed to find common item type"
}

export function partTwo(input) {
    input = input.split('\n');

    let commonTypes = []
    for (let i = 0; i < input.length; i += 3) {
        let a = input[i+0].split('')
        let b = input[i+1].split('')
        let c = input[i+2].split('')
        let commonType = a.filter(x => b.includes(x) && c.includes(x))[0]
        commonTypes.push(commonType)
    }
    
    return commonTypes
        .map(getPriority)
        .reduce((a, b) => a + b);
}
