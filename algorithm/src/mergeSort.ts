/**
 * @description 归并排序（稳定排序）。
 * 此方法会改变原数组，如果不想破坏原数组，调用者自己创建数组副本作为参数。
 */
function mergeSort<T>(arr: T[], compare: (a: T, b: T) => -1 | 0 | 1): T[] {
    if (!Array.isArray(arr)) {
        throw new Error('mergeSort的参数必须为数组');
    }
    _ms(arr, compare, 0, arr.length);
    return arr;
}

/**
 * @description 排序范围：[begin, end)
 */
function _ms<T>(arr: T[], compare: (a: T, b: T) => -1 | 0 | 1, begin: number, end: number): void {
    const size = end - begin;
    if (size <= 1) { return; }
    // tslint:disable-next-line: no-bitwise
    const middle = (end + begin) >> 1;
    _ms(arr, compare, begin, middle);
    _ms(arr, compare, middle, end);
    if (compare(arr[middle - 1], arr[middle]) <= 0) { return; } // 顺序已经正确
    const merged = [];
    let leftIndex = begin, rightIndex = middle;
    while (merged.length < size) {
        if (leftIndex === middle) {
            merged.push(arr[rightIndex++]);
        } else if (rightIndex === end) {
            merged.push(arr[leftIndex++]);
        } else {
            const c = compare(arr[leftIndex], arr[rightIndex]);
            if (c <= 0) {
                merged.push(arr[leftIndex++]);
            } else {
                merged.push(arr[rightIndex++]);
            }
        }
    }
    arr.splice(begin, size, ...merged);
}
