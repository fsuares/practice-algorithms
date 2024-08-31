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

const main = function(max){
    for(let i = 1; i <= max; i++){
        if(primeNumValidator(i)){
            console.log(`${i} é primo`);
        };
    };
};

main(100)

