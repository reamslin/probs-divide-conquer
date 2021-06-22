function countZeroes(arr) {
    let ltIdx = 0;
    let rtIdx = arr.length - 1;
    if (arr[rtIdx] === 1) {
        return 0;
    }
    if (arr[ltIdx] === 0) {
        return arr.length;
    }
    while (ltIdx <= rtIdx) {
        let mdlIdx = Math.floor((ltIdx + rtIdx) / 2);
        if (arr[mdlIdx] === 1) {
            if (arr[mdlIdx + 1] === 0) {
                return arr.length - (mdlIdx + 1);
            } else {
                ltIdx = mdlIdx + 1;
            }
        } else {
            rtIdx = mdlIdx - 1;
        }
    }
}

module.exports = countZeroes