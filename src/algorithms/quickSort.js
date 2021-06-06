var quickSort = function (array) {

    var swaps = [];

    quickSortHelper(array, 0, array.length - 1, swaps);

    return swaps;
}

function quickSortHelper(array, low, high, swaps) {
    if (low >= high) {
        return;
    }

    var pivotIdx = partition(array, low, high, swaps);

    if (low < pivotIdx) {
        quickSortHelper(array, low, pivotIdx - 1, swaps);
    }
    if (pivotIdx < high) {
        quickSortHelper(array, pivotIdx + 1, high, swaps);
    }
}

function partition(array, low, high, swaps) {
    var mid = Math.floor((low + high) / 2);

    var pivotVal = array[mid];
    swap(array, mid, high, swaps);

    var i = low;
    var j = high - 1;

    while (i <= j) {

        if (array[i] > pivotVal && array[j] < pivotVal) {
            swap(array, i, j, swaps);
        }

        if (array[i] <= pivotVal) {
            i++;
        }

        if (array[j] >= pivotVal) {
            j--;
        }
    }

    swap(array, i, high, swaps);

    return i;

}

function swap(array, i, j, swaps) {
    var num = array[i];
    array[i] = array[j];
    array[j] = num;
    swaps.push([i, j]);
}

module.exports = { quickSort };
