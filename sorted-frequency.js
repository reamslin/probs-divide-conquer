function sortedFrequency(arr, val) {
    const first = findFirst(arr, val);
    if (first === -1) {
        return -1;
    }
    const last = findLast(arr, val);
    return last - first + 1;
}

function findFirst(arr, val) {
    let ltIdx = 0;
    if (arr[ltIdx] === val) {
        return 0;
    }
    let rtIdx = arr.length - 1;
    while (ltIdx <= rtIdx) {
        let mdlIdx = Math.floor((ltIdx + rtIdx) / 2);
        if (arr[mdlIdx] === val && arr[mdlIdx - 1] !== val) {
            return mdlIdx;
        } else if (arr[mdlIdx] >= val) {
            rtIdx = mdlIdx - 1;
        } else {
            ltIdx = mdlIdx + 1;
        }
    }
    return -1;
}

function findLast(arr, val) {
    let rtIdx = arr.length - 1;
    if (arr[rtIdx] === val) {
        return rtIdx;
    }
    let ltIdx = 0;
    while (ltIdx <= rtIdx) {
        let mdlIdx = Math.floor((ltIdx + rtIdx) / 2);
        if (arr[mdlIdx] === val && arr[mdlIdx + 1] !== val) {
            return mdlIdx;
        } else if (arr[mdlIdx] <= val) {
            ltIdx = mdlIdx + 1;
        } else {
            rtIdx = mdlIdx - 1;
        }
    }
    return -1;
}

module.exports = sortedFrequency