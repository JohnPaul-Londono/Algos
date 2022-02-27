var longestCommonPrefix = function(strs) {
    let prefix = ""

    for (let i=0; i < strs[0].length; i++){ 
        let chars = strs[0][i]

        for (let j = 1; j < strs.length; j++){ 
            if(strs[j][i] !== chars)
            return prefix
        }
        prefix += chars 
    }

    return  prefix
}


console.log(longestCommonPrefix  (["flower", "flow", "flight"]))
console.log(longestCommonPrefix  (["dog", "racecar", "car"]))
console.log(longestCommonPrefix  (["dog", "does", "dont"]))