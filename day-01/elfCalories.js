export function topElvesCalories(input) {
  let maxLoad = -1;
  let currentElfLoad = 0;
  let trimmedInput = input.split('\n').map((x) => x.trim())
  for (let i = 0; i <= trimmedInput.length; i++) {
    let currentItem = trimmedInput[i];
    if (currentItem === '') {
      if (currentElfLoad > maxLoad) {
        maxLoad = currentElfLoad;
      }
      currentElfLoad = 0;
    } else {
      currentElfLoad += parseInt(currentItem);
    }
  }
  return maxLoad;
};

export function topThreeElvesCalories(input) {
  let maxLoads = [];
  let currentElfLoad = 0;
  let trimmedInput = input.split('\n').map((x) => x.trim())
  for (let i = 0; i <= trimmedInput.length; i++) {
    let currentItem = trimmedInput[i];
    if (currentItem === '') {
      maxLoads.push(currentElfLoad)
      currentElfLoad = 0;
    } else {
      currentElfLoad += parseInt(currentItem);
    }
  }
  return maxLoads
    .sort()
    .reverse()
    .slice(0,3)
    .reduce((a, b) => a + b);
};

