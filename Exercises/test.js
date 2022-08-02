// let basealary = 30;
// let overtime = 20;
// let allowance = 10;


// const getSalary = (a, b, c) => {
// 	return a+b+c;
// }

// let customeObj = {
// 	ac: 10,
// 	bc: 20,
// 	dc: 40,
// 	getSal: function() {
// 		return this;
// 	},
// }

// customeObj = "rohi";
// const objResult = customeObj.getSal();
// const result = getSalary(basealary, overtime, allowance);
// console.log(customeObj);

const array = [-5,-4,-3,-2,-1,0,1,2,4,6,8];

function SumPair(array) {

	let left=0;
	let right = array.length - 1;

	while(array[left] < array[right]) {
		let sum = array[left] + array[right];

		if(sum === 0) {
			return [array[left], array[right]];
		}
		else if(sum > 0) {
			console.log("right after",array[right])
			right--;
		}
		else {
			console.log("left after",array[left])
			left++;
		}
	}
}

const result = SumPair(array);
console.log(result);