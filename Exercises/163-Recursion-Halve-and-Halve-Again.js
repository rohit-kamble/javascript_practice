// halveCount(4666, 544) ➞ 3
// (4666 -> 2333 -> 1166.5 -> 583.25)
// halveCount(466, 54) ➞ 3
// (466 -> 233 -> 116.5 -> 58.25)
// halveCount(1324, 98) ➞ 3
// (1324 -> 662 -> 331 -> 165.5)
// halveCount(624, 8) ➞ 6
// (624 -> 312 -> 156 -> 78 -> 39 -> 19.5 -> 9.75)
// halveCount(1000, 3) ➞ 8
// (1000 -> 500 -> 250 -> 125 -> 62.5 -> 31.25 -> 15.625 -> 7.8125 -> 3.90625)

function halveCount(num, halve, count = 0) {
  if (num < halve) {
    return count - 1;
  } else {
    count++;
    return halveCount(num / 2, halve, count);
  }
}

console.log("---", halveCount(1000, 3));
