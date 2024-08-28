function countVowels(string){
    let strLower = string.toLowerCase();
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for(let i = 0; i <= strLower.length; i++){
        if(vowels.includes(strLower.charAt(i))) count++;
    };
    return count;
};
