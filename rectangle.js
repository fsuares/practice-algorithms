class Retangulo{
    constructor(altura, largura){
        this.altura = altura;
        this.largura = largura;
    };
    calcularArea(){
        if(this.altura > 0 && this.largura > 0){
            return this.largura * this.altura
        };
    };
    calcularPerimetro(){
        if(this.altura > 0 && this.largura > 0){
            return  2 * (this.largura + this.altura);
        };
    };
};
