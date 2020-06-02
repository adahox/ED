Array.prototype.bubbleSort = function () {
  let enumerable = this.length;
  let aux = 0;
  let finished;
  do {
    finished = false;
    for (let x = 0; x < enumerable; x++) {
      let actual = this[x];
      let next = this[x + 1];
      if (actual > next) {
        [this[x], this[x + 1]] = [this[x + 1], this[x]];
        finished = true;
      }
    }
    enumerable--;
  } while (finished);
  return this;
};

let data = [5, 3, 1, 2, 4];
console.log(data.bubbleSort());
