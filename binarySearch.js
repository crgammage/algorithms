

function binarySearch(arr, target, start = 0, stop = (arr.length - 1)) {
    let midPoint = (((start - stop)/2) + start)
    switch (true) {
        case arr[midPoint] === target:
            return true
        case  arr[midPoint] === 0:
            return false
        case arr[midPoint] < target:
            return binarySearch(arr, target, midPoint + 1, stop)
        case arr[midPoint] > target:
            return binarySearch(arr, target, start, midPoint)

    }
}
        