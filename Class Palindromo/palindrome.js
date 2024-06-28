function revert(word){
  return word.split("").reverse().join("")
}

console.log(revert("hello"))

function isPalindrome(word){
  // true: word is palindrome - false: word is not
  if(word == revert(word)){
    return true
  }else if(word != revert(word)){
    return false
  }else{
    return 0
  }
}

console.log(isPalindrome("hello"))
console.log(isPalindrome("AsdffdsA"))
//console.log(isPalindrome(88))
