var findTheDifference = function ( s, t){
    sortedS = s.split('').sort();
    sortedT = t.split(''). sort();

    result = ''

    for (let i = 0; i < sortedT.length;i++){
        if (sortedS[i] !==sortedT[i]){
            result += sortedT[i];
            return result;
        }
    }
}

console.log(findTheDifference("abcd", "abcde"))