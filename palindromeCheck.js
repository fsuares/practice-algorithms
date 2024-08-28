function isPalindrome(word){
    let wordArr = word.split("");
    let reverseWordArr = [...wordArr].reverse();

    if(JSON.stringify(wordArr) === JSON.stringify(reverseWordArr)){
        return true;
    }
    return false;
};
