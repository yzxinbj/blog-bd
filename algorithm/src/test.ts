const Integer = {
    MIN_VALUE: -Math.pow(2, 31),
    MAX_VALUE: Math.pow(2, 31) - 1
}
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    let m: number = nums1.length;
    let n: number = nums2.length;
    let left = 0, right = m, ansi = -1;
    // median1：前一部分的最大值
    // median2：后一部分的最小值
    let median1 = 0, median2 = 0;

    console.log(1111)
    debugger
    while (left <= right) {
        // 前一部分包含 nums1[0 .. i-1] 和 nums2[0 .. j-1]
        // 后一部分包含 nums1[i .. m-1] 和 nums2[j .. n-1]
        let i = (left + right) / 2;
        let j = (m + n + 1) / 2 - i;

        // nums_im1, nums_i, nums_jm1, nums_j 分别表示 nums1[i-1], nums1[i], nums2[j-1], nums2[j]
        let nums_im1 = (i == 0 ? Integer.MIN_VALUE : nums1[i - 1]);
        let nums_i = (i == m ? Integer.MAX_VALUE : nums1[i]);
        let nums_jm1 = (j == 0 ? Integer.MIN_VALUE : nums2[j - 1]);
        let nums_j = (j == n ? Integer.MAX_VALUE : nums2[j]);

        if (nums_im1 <= nums_j) {
            ansi = i;
            median1 = Math.max(nums_im1, nums_jm1);
            median2 = Math.min(nums_i, nums_j);
            left = i + 1;
        }
        else {
            right = i - 1;
        }
    }

    return (m + n) % 2 == 0 ? (median1 + median2) / 2.0 : median1;
}

findMedianSortedArrays([1, 2], [3])