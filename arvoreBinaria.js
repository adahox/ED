/**
 * Definições
 * @author Adão Dias <adahox@gmail.com>
 * 
 * ARVORE BINÁRIA
 * 
 * - Cada nó possui no máximo 2 filhos
 * - Nós sem filhos são chamados de Folha.
 * - Nós com filhos são chamados de Nó Interno.
 * - A altura da arvore é medida do ultimo nó até a raiz. 
 * - O nível do nó e baseado em sua posição hierárquica na arvore.Array
 * 
 * ARVORE BINÁRIA DE PESQUISA:
 * 
 * - O nó da esquerda sempre menor que o nó da direita e vice-versa.
 * 
 * ARVORE BINÁRIA COMPLETA:
 *  
 * - Cada nó tem exatamente 0 ou 2 filhos. nunca 1.
 * - Todos os nós folhas estão no mesmo nivel.
 * - O número de nós internos é 2^h - 1
 * - O número de nós folhas é 2^h
 * - o número total de nós é (2^h - 1) + (2^h) = 2^(h + 1) - 1 
 */

class Node {
    value = null;
    left = null;
    right = null;
    constructor(value) {
        this.value = value;
        return this;
    }
}


class ArvoreBinaria {
    raiz = null;    
    constructor() {}

    inserir(v) {
        this.raiz = this._insere(v, this.raiz);
    }

    _insere(value, raiz) {
       
        if(raiz == null) {
            console.log(`inserindo na raiz ${raiz}`);
            raiz = new Node(value);
        } else if(value > raiz.value) {
            console.log(`inserindo no node right ${raiz}`);
            raiz.right = this._insere(value, raiz.right);
        } else if(value < raiz.value) {
            console.log(`inserindo no node left ${raiz}`);
            raiz.left = this._insere(value, raiz.left);
        }
        return raiz;
    }
}

let three = new ArvoreBinaria();

three.inserir(3);
three.inserir(2);
three.inserir(1);
three.inserir(4);
three.inserir(5);


console.dir(three);


