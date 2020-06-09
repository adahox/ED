/**
 * Selection Sort Data Structure
 * @author Adão Dias
 */
Array.prototype.selectionSort = function() {
    const n = this.length ;
    let menor = 0;
    for(let i=0; i<n; i++) {
        menor = i;
        for(let j=i+1; j<n; j++) {
            if(this[menor] > this[j])
                menor = j
        }
        [this[menor], this[i]] = [this[i], this[menor]];
    }

    return this;
}

let sorted = [5,9,7,4,2,3].selectionSort();
console.log(sorted);