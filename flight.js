class Voo{
    constructor(codigoVoo, origem, destino, assentosDisponiveis){
        this.codigoVoo = codigoVoo,
        this.origem = origem
        this.destino = destino
        this.assentosDisponiveis = assentosDisponiveis
    };
    reservarAssento(){
        if(this.assentosDisponiveis == 0) {
            console.log('Não há assentos disponíveis para reserva.');
            return 0;
        };
        this.assentosDisponiveis--;
    };
    consultarAssentosDisponiveis(){
        return this.assentosDisponiveis;
    };
};
