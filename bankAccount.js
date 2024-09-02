class ContaBancaria{
    constructor(numeroConta, saldo){
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }
    depositar(valor){
        this.saldo += valor;
    }
    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
        } else {
            console.log('o saldo é insuficiente');
        }
    }
    consultarSaldo(){
        return this.saldo;
    }
}
