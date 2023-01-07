import sha256 from 'crypto-js/sha256'

export default class Bloco {
    constructor(timestamp, transacoes, hashBlocoAnterior) {
        this.timestamp = timestamp;
        this.transacoes = transacoes;
        this.hashBlocoAnterior = hashBlocoAnterior;
        this.contador = 0;
        this.hash = this.calcularHash()
    }

    calcularHash() {
        return sha256(this.hashBlocoAnterior + this.timestamp + this.contador).toString();
    }

    minerarBloco(dificuldade) {
        let pedacoDoHash = this.hash.substring(0, dificuldade);
        let hashAserMinerado = Array(dificuldade + 1).join('0');
        //console.log(pedacoDoHash, hashAserMinerado);
        while(pedacoDoHash !== hashAserMinerado){
            this.contador++;
            this.hash = this.calcularHash();
            pedacoDoHash = this.hash.substring(0, dificuldade);
            //console.log(pedacoDoHash, hashAserMinerado);
        }

        console.log('Bloco minerado:', this.hash);
    }
}

