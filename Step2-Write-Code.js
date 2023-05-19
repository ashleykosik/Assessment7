// 1) Sum Zero
// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

function addToZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return true
            } 
        } 
    }
    return false
}
// runtime O(n^2)


// 2) Unique Characters
// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

function hasUniqueChars(word) {
    let array = word.split('')
    for (let i = 0; i < word.length; i++) {
        for (let j = i + 1; j < word.length; j++) {
            if (word[i] === word[j]) {
                return false
            }
        }
    }
    return true
}

// runtime O(n^2)


//3) Pangram Sentence (uses every letter in the alphabet at least once)

function siPangram(sen) {
   if (sen.includes('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z')) {
    return true
   } else {
    return false
   }
}
//runtime constant O(26)


// 4) Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

function findLongestWord(list) {
    let arr = list.map(a => a.length) 
    arr.sort((a, b) => b - a)
    return arr[0] 
}
//runtime O(n)
