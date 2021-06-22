function findRotationCount(arr) {
    const pivot = findPivot(arr);
    return pivot;
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
module.exports = findRotationCount