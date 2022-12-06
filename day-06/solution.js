export function partOne(input, sequenceLength) {
    for (let i = 0; i < input.length - sequenceLength; i++) {
        let substring = input.substr(i, sequenceLength)
        let set = new Set(substring.split(''))
        if (set.size === sequenceLength) {
            return i + sequenceLength;
        }
    }
    throw "Start sequence not found"
}
