function sumUniqueNumbers(arr){
    let hash = {};
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] in hash) hash[arr[i]] ++;
        else hash[arr[i]] = 1;
    };
    for(let key in hash){
        if(hash[key] == 1) sum += parseInt(key);
    };
    return sum;
};
console.log(sumUniqueNumbers([1, 1, 1, 2, 2, 3, 3, 4, -2, -2]));
