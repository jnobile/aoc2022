export function partOne(input) {
    let root = createDirectoryTree(input)
    return getAllDirectories(root)
        .filter(x => x.size() <= 100000)
        .map(x => x.size())
        .reduce((a,b) => a + b)
}

export function partTwo(input) {
    let root = createDirectoryTree(input)

    let requiredSpace = 30000000
    let totalSpace = 70000000
    let usedSpace = root.size()
    let freeSpace = totalSpace - usedSpace
    let additionRequiredSpace = requiredSpace - freeSpace

    return getAllDirectories(root)
        .filter(x => x.size() >= additionRequiredSpace)
        .map(x => x.size())
        .sort((a, b) => a - b)[0]
}

function createDirectoryTree(input) {
    input = input.split('\n')

    let root = new Directory('/', null)
    let currentDir = root

    for (let i = 0; i < input.length; i++) {
        let line = input[i].split(' ')
        if(line[0] === '$') {
            let c = line[1]
            if (c === 'ls') {
                // add dirs and files to currentDir
                for (let j = i+1; j < input.length; j++) {
                    let lsLine = input[j].split(' ')
                    if (lsLine[0] === '$') {
                        break
                    } else if (lsLine[0] === 'dir') {
                        currentDir.addDir(new Directory(lsLine[1], currentDir))
                    } else {
                        currentDir.addFile(new File(lsLine[1], parseInt(lsLine[0])))
                    }
                }
            } else if (c === 'cd') {
                let dir = line[2]
                if (dir === '..') {
                    currentDir = currentDir.parentDir
                } else if (dir !== '/') {
                    currentDir = currentDir.directories.filter(x => x.name === dir)[0]
                }
            }
        }
    }

    return root
}

function getAllDirectories(dir) {
    let directories = [dir]
    for (let i = 0; i < dir.directories.length; i++) {
        directories = directories.concat(getAllDirectories(dir.directories[i]))
    }
    return directories
}

function Directory(name, parentDir) {
    this.name = name
    this.parentDir = parentDir
    this.directories = []
    this.files = []

    this.size = function() {
        let fileSizes = this.files.map(x => x.size) ?? []
        let dirSizes = this.directories.map(x => x.size()) ?? []
        return fileSizes.concat(dirSizes).reduce((a, b) => a + b)
    }

    this.addDir = function(dir) {
        this.directories.push(dir)
    }

    this.addFile = function(file) {
        this.files.push(file)
    }

    this.print = function(indentCount) {
        let indent = [...Array(indentCount).keys()].map(x => ' ').join('')

        console.log(indent + "- " + this.name + " (dir)")
        for (let i = 0; i < this.directories.length; i++) {
            this.directories[i].print(indentCount + 2)
        }
        for (let i = 0; i < this.files.length; i++) {
            let file = this.files[i]
            console.log(indent + "  - " + file.name + " (file, size=" + file.size + ")")
        }
    }
}

function File(name, size) {
    this.name = name
    this.size = size
}
