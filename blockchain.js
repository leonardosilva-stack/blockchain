import Bloco from "./bloco";
import Transacao from "./transacao";

export default class Blockchain {
    constructor() {
        this.chain = [];
        this.chain.push(this.criarBlocoGenesis());
        this.transacoesPendentes = [];
        this.dificuldade = 5;
        this.recompensaMinerador = 0.5;
    }

    criarBlocoGenesis() {
        return new Bloco(Date.now(), 'Bloco Genesis', '0');
    }

    adicionarTransacao(transacao){
        this.transacoesPendentes.push(transacao);
    }

    getChain() {
        return this.chain;
    }

    getHashUltimoBloco() {
        return this.chain[this.chain.length -1].hash;
    }

    minerarTransacoesPendentes(enderecoMinerador){
        console.log("Iniciando mineração...");
        const novoBloco = new Bloco(Date.now(), this.transacoesPendentes,this.getHashUltimoBloco());
        novoBloco.minerarBloco(this.dificuldade);
        console.log("Bloco minerado com sucesso");
        this.chain.push(novoBloco);
        this.transacoesPendentes = [new Transacao(null, enderecoMinerador, this.recompensaMinerador )];
    }

    obterRecompensaDoMinerador(enderecoMinerador) {
        let valorRecompensa = 0;

        for (const bloco of this.chain) {  //forof
            for (const transacao of bloco.transacoes) {
                if(transacao.enderecoRemetente === enderecoMinerador){
                    valorRecompensa -= transacao.valor;
                }

                if(transacao.enderecoDestinatario === enderecoMinerador){
                    valorRecompensa += transacao.valor;
                }
            }
        }
        return valorRecompensa;     
    }
}