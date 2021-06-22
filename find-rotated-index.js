function findRotatedIndex(arr, num) {
    const pivot = findPivot(arr);
    if (num >= arr[0] && num <= arr[pivot - 1]) {
        return binarySearch(arr, 0, pivot - 1, num);
    } else {
        return binarySearch(arr, pivot, arr.length - 1, num);
    }

}

function findPivot(arr) {
    let ltIdx = 0;
    let rtIdx = arr.length - 1;
    while (ltIdx <= rtIdx) {
        let mdlIdx = Math.floor((ltIdx + rtIdx) / 2);
        if (arr[mdlIdx] > arr[mdlIdx + 1]) {
            return mdlIdx + 1;
        } else if (arr[mdlIdx] >= arr[ltIdx]) {
            ltIdx = mdlIdx + 1;
        } else {
            rtIdx = mdlIdx - 1;
        }
    }
    return 0;
}

function binarySearch(arr, ltIdx, rtIdx, num) {
    while (ltIdx <= rtIdx) {
        let mdlIdx = Math.floor((ltIdx + rtIdx) / 2);
        if (arr[mdlIdx] === num) {
            return mdlIdx;
        } else if (arr[mdlIdx] > num) {
            rtIdx = mdlIdx - 1;
        } else {
            ltIdx = mdlIdx + 1;
        }
    }
    return -1;
}

module.exports = findRotatedIndex