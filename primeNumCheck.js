function primeNumValidator(num){
    let control = 0
    for(let i = 1; i <= num; i++){
        if(num % i == 0){
            control++;
        };
    };
    if(control > 2) return false;
    else return true;
};
