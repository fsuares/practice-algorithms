class WordCounter{
    constructor(){

    }
    countWords(str){
        if(!str) return 0;
        let arr = str.trim().split(/\s+/);
        return arr.length;
    }
}

let teste = new WordCounter()
console.log(teste.countWords('iae felipe'))
