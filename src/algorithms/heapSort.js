var heapSort = function (array) {

    var swaps = [];

    var n = array.length;

    for (var i = n / 2 - 1; i >= 0; i--) {
        heapify(array, n, i, swaps);
    }

    for (i = n - 1; i >= 0; i--) {
        swap(array, 0, i, swaps);
        heapify(array, i, 0, swaps);
    }

    return swaps;
}


function heapify(array, n, i, swaps){ 
    var largest = i;
    var l = largest * 2 + 1;
    var r = largest * 2 + 2;

    if (n > l && array[l] > array[largest]) {
        largest = l;
    }
    if (n > r && array[r] > array[largest]) {
        largest = r;
    }

    if (i !== largest) {
        swap(array, largest, i, swaps);
        heapify(array, n, largest, swaps);
    }
}

function swap(arrayay, i, j, swaps) {
    var num = arrayay[i];
    arrayay[i] = arrayay[j];
    arrayay[j] = num;
    swaps.push([i, j]);
}

module.exports = { heapSort };
