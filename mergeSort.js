/**
 * @author Adão Dias <adahox@gmail.com>
 */
Array.prototype.mergeSort = function () {
  const merge = function (left, right) {
    let result = [];
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }

	while (left.length) 
		result.push(left.shift());
	while (right.length) 
		result.push(right.shift());
    return result;
  };

  if (this.length < 2) return this;
  let middle = Math.floor(this.length / 2);
  let left = this.slice(0, middle);
  let right = this.slice(middle, this.length);
  return merge(left.mergeSort(), right.mergeSort());
};

let arr = [5, 4, 300, 2, 9, 10, 500];
console.log(arr.mergeSort());
