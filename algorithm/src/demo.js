/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// m(i, j) = p(i) === s(j) || p (i) === '.'
// f(i, j) = f(i-1, j-1) & m(i, j)  if p(i) !== '*'
// f(i, j) = f(i-2, j) || f(i-1, j) || f(i, j-1) & m(i-1, j)  if p(i) === '*'
var isMatch = function(s, p) {
    if (s.length === 0 && p.length === 0) {
        return true;
    }
    if (p.length === 0) {
        return false;
    }
    if (p[0] === '*') {
        return false;
    }
    var res = {};
    res[`${-1}-${-1}`] = true;
    for (var z = 0 ; z < p.length ; z++) { // patten
        if (p[z] === '*') {
            res[`${z}-${0}`] = res[`${z-2}-${0}`];
        }
        for (var x = 0 ; x < s.length ; x++) { // string
            result [`${z}-${x}`] = f(z, x, s, p, result);
        }
    }
    function m(i, j, string, patten) {
        return string[i] === patten[i] || patten[i] === '.';
    }
    function f(i, j, string, patten, result) {
        if (patten[i] === '*') {
            return result[`${i-2}-${j}`]|| result[`${i-1}-${j}`] || (result[`${i}-${j-1}`]) && m(i-1, j, string, patten);
        } else {
            return result[`${i-1}-${j-1}`] && m(i, j, string, patten);
        }
    }
    return !!result[`${s.length - 1}-${p.length - 1}`];
};