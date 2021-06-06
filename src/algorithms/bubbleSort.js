var bubbleSort = function (array) {

    var swaps = [];

    for (var i = 0; i < array.length - 1; i++) {
        var isSwappingDone = false;

        for (var j = 0; j < array.length- i - 1; j++) {
            if (array[j] > array[j+1]) {
                swap(array, j, j+1, swaps);
                isSwappingDone =true;
            }
        }
        if(!isSwappingDone){
            break;
        }
    }
    return swaps;
}

function swap(array, i, j, swaps) {
    var num = array[i];
    array[i] = array[j];
    array[j] = num;
    swaps.push([i, j]);
}

module.exports = { bubbleSort};
