function reverseString(string){
    let stringArr = string.split("");
    let reverseStringArr = [...stringArr].reverse();
    return reverseStringArr.join('');
};
