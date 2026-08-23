function getBinarySearchSteps(arr, target) {
  const steps = []
  let low = 0
  let high = arr.length - 1

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    steps.push({ low, high, mid, found: arr[mid] === target })

    if (arr[mid] === target) break
    else if (arr[mid] < target) low = mid + 1
    else high = mid - 1
  }

  return steps
}

export default getBinarySearchSteps