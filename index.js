import Blockchain from "./blockchain";
import Transacao from "./transacao";

const solCoin = new Blockchain();

const enderecoMinerador = 'endereco-leonardo';

const transacaoUm = new Transacao('endereco-ladelson', 'endereco-leandro', 5);

solCoin.adicionarTransacao(transacaoUm);
solCoin.minerarTransacoesPendentes(enderecoMinerador);

console.log('Recompensa Minerador #1:', solCoin.obterRecompensaDoMinerador(enderecoMinerador))

const transacaoDois = new Transacao(enderecoMinerador, 'endereco-leandro', 10);

solCoin.adicionarTransacao(transacaoDois);
solCoin.minerarTransacoesPendentes(enderecoMinerador);
solCoin.minerarTransacoesPendentes(enderecoMinerador);

console.log('Recompensa Minerador #2:', solCoin.obterRecompensaDoMinerador(enderecoMinerador))
console.log(solCoin.getChain());