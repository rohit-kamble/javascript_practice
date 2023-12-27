// commonElements([-1, 3, 4, 6, 7, 9], [1, 3]) ➞ [3]
// commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]) ➞ [1, 3, 4, 7]
// commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]) ➞ [1, 2, 4, 5]
// commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]) ➞ []

function commonElements(ar1, ar2) {
  const common = [...ar1, ...ar2];
  let obj = {};
  const t = [];
  for (let x of common) {
    if (obj[x]) {
      t.push(obj[x]);
    } else {
      obj[x] = x;
    }
  }
  return [...new Set(t)];
}
console.log("---", commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]));
