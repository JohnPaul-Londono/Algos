//A = [1,2,3,4,5]
//k = 3
//output should be [3,4,5,1,2]
//everything to the right of indicated number and that number

function shiftRight(arr, num) {
    var firstArr = [];
    var secondArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            firstArr.push(arr[i])
        } else if (arr[i] == num) {
            firstArr.push(arr[i]);
        } else {
            secondArr.push(arr[i]);
        }
    }

    var finishedArr = firstArr.concat(secondArr)
    return finishedArr;
}
console.log(shiftRight([1, 2, 3, 4, 5], 3));
console.log(shiftRight([1, 2, 3, 4, 5, 5, 7, 8, 9, 10], 7));
console.log(shiftRight([4, 5, 6, 7, 8, 9], 5));



function rightShift(list, places) {
    const result = [];
    if (places > list.length) {
        places = places % list.length;
    }
    for (let i = 0; i < list.length; i++) {
        if (i + places > list.length - 1) {
            result[places - (list.length - i)] = list[i];
        } else {
            result[i + places] = list[i];
        }
    }
    return result;
}

console.log(rightShift([{ value: "" }, 8, "left"], 1));
console.log(rightShift([4, 3, 2, 10, 12, 1, 5, 6], 4));