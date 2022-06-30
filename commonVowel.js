//should make a counter var to keep track of count
//im getting every vowel with the 3rd example, im trying to figure out how to only show the the highest vowel count
//i could probably give each individual vowel it's own count
//counting multiple vowels as well in the console log
//could make a dictionary with key value pairs

// define what a vowel is
const vowels = ["a", "e", "i", "o", "u"];

function solution(S) {
    //example shown was "SAMPLE".. maybe use the lowercase built in function
    S = S.toLowerCase();
    var count = 0;
    //should probably add a remove duplicate function
    var vowel = "";
    //running through string and logs every vowel found with count
    for (var i = 0; i < S.length; i++) {
        if (vowels.includes(S[i])) {
            vowel += S[i];
            ++count;
        }
    }

    return console.log(`${vowel} appears ${count} time(s)`);
}

solution("lexicon")
solution("SAMPLE")
solution("e should be the most common vowel in this sentence")


// const vowels ="aeiou";
// // const vowels = ["a", "e", "i", "o", "u"];

// function solution(S) {
//     S = S.toLowerCase();
//     var count = 0;
//     var vowel = "";
//     //running through string and logs every vowel found with count
//     for (var i = 0; i < S.length; i++) {
//         if (vowels.includes(S[i])) {
//             ++count
//             vowel += S[i];
//         }
//     }
//     return console.log(`${vowel} appears ${count} time(s)`);
// }

// solution("lexicon")
// solution("SAMPLE")
// solution("e should be the most common vowel in this sentence")