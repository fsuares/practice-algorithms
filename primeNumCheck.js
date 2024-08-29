function primeNumValidator(num){
    let control = 0
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i == 0){
            control++;
        };
        if(control > 0) return false;
    };
    return true;
};
