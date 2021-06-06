var mergeSort = function (array) {

    var swaps = [];

    mergeSortHelper(array, 0, array.length - 1, swaps);

    return swaps;
}


function mergeSortHelper(arr, low, high, swaps) {

    if (low < high) {
        var mid =Math.floor( low + (high - low) / 2);

        mergeSortHelper(arr, low, mid,swaps);
        mergeSortHelper(arr, mid + 1, high,swaps);

        merge(arr, low, mid, high, swaps);
    }
}

function merge(arr, low, mid, high, swaps) {
    var rightStart = mid + 1;

    if (arr[mid] <= arr[rightStart]) {
        return;
    }

    while (low <= mid && rightStart <= high) {

        if (arr[low] <= arr[rightStart]) {
            low++;
        } else {
            var value = arr[rightStart];
            var index = rightStart;

            while (index !== low) {
                arr[index] = arr[index - 1];
                swaps.push([index, index-1])
                index--;
            }
            arr[low] = value;
            low++;
            mid++;
            rightStart++;
        }
    }
}

module.exports = { mergeSort };
