function findFloor(arr, num) {
    let ltIdx = 0;
    let rtIdx = arr.length - 1;
    if (arr[rtIdx] < num) {
        return arr[rtIdx];
    }
    while (ltIdx <= rtIdx) {
        let mdlIdx = Math.floor((ltIdx + rtIdx) / 2);
        if (arr[mdlIdx] < num && arr[mdlIdx + 1] >= num) {
            return arr[mdlIdx];
        } else if (arr[mdlIdx] <= num) {
            ltIdx = mdlIdx + 1;
        } else {
            rtIdx = mdlIdx - 1;
        }
    }
    return -1;
}

module.exports = findFloor