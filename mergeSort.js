Array.prototype.intercalate = function (left, right) {

	let result = [];

	while(left.length && right.length) {
		if(left[0] <= right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}

	while(left.length) 
		result.push(left.shift());
	while(right.length) 
		result.push(right.shift());

	return result;
};

Array.prototype.mergeSort = function() {
	if(this.length < 2) return this;
	let middle = Math.floor(this.length / 2);
	let left = this.slice(0, middle);
	let right = this.slice(middle, this.length);
	return this.intercalate(left.mergeSort(), right.mergeSort());
};

let arr = [5,4,2,9];

console.log(arr.mergeSort());