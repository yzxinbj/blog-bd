let reg = /.*/img
let reg1 = /[\s\S]*/img
// reg 匹配不到换行 reg1 可以





// m*n

function getResult(m, n) {
    let res = {};
    if (typeof n === 'number' && typeof m === 'number') {
        if (m < 0 || n < 0) {
            return Error('请写正数');
        }
        if (m < 2) {
            return n - 1;
        }
        if (n < 2) {
            return m - 1;
        }
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (i === 0 || j === 0) {
                    res[`${i}*${j}`] = 1;
                } else {
                    res[`${i}*${j}`] = res[`${i - 1}*${j}`] + res[`${i}*${j - 1}`];
                }
            }
        }
        return res[`${m - 1}*${n - 1}`];
    } else {
        return new Error('type error')
    }
}

// console.log(getResult(3, 3));

// 给你一个字符串 string 和一个字符规律 pattern，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。
/**
 * 首先找规律，就是能通过 f(1) 推出 f(2) 然后 推出 f(3) 直到 f(n)
 * 这道题可以通过 f(1,1) ===> f(2,2) ===> f(i,j)
 * 什么意思呢 f(1,1) 代表 pattern 的第一个字符 与 string 的第一个字符的匹配结果，所以我们能根据 f(1,1) 推出 f(2,2)
 * 即我们只需要知道 m(2,2),m(2,2) 表示单个字符，pattern第2个字符和string的第二个字符的匹配结果
 * f(i,j) = f(i-1,j-1)&m(i,j) if pattren 最后一个不是*
 * f(i,j) = f(i-2, j)|f(i-1, j)|f(i, j-1)&m(i-1, j)                  if pattern 最后一个是*
 */

function f(pattern, i, string, j, result) {
    if (pattern[i] == '*') {
        let m_ij = pattern[i-1] === string[j];
        return result[`${i-2},${j}`] || result[`${i-1},${j}`] || result[`${i},${j-1}`]&& m_ij;
    } else {
        let m_ij = pattern[i] === string[j];
        return result[`${i-1},${j-1}`] && m_ij;
    }
}

function match(pattern, string) {
    let result = {};
    let patternLen = pattern.length;
    let stringLen = string.length;

    for (let i = 0; i < patternLen; i++) {
        for (let j = 0; j < stringLen; j++) {
            if (i === 0 || j === 0) {
                result[`${i},${j}`] = true;
            } else {
                result[`${i},${j}`] = f(pattern, i, string, j, result);
            }
        }
    }
    return result[`${patternLen - 1},${stringLen - 1}`];
}

console.log(match('c*a*b', 'aab'))