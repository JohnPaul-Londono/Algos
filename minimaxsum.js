function miniMaxSum(arr) {
    let sum = arr.reduce((a, b) => a + b);
    let maxVal = Math.max(...arr);
    let minVal = Math.min(...arr);
    console.log((sum - maxVal) + ' ' + (sum - minVal));
}


miniMaxSum([1,2,3,4,5])

function miniMaxSum(arr) {
    var sum = 0;
    for ( var i =0; i < arr.length; i++){
        sum +=arr[i]
    }
    var maxVal = Math.max(...arr);
    var minVal = Math.min(...arr);

    console.log((sum - maxVal) + ' ' + (sum - minVal));
}
miniMaxSum([1,2,3,4,5])