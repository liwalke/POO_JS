/*
    *   Não precisa separar os métodos e atributos por virgulas;
    *   Precisa usar o this;
    *   Precisa usar o new para instanciar o novo objeto;
    *   O nome da classe deve começar com letra maiúscula
    *   E é isso
*/

class Pessoa {
    constructor (nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    //Métodos públicos que serão adicionados ao prototype da classe
    falar() {
        console.log(`${this.nome} está falando!`)
    }
    comer() {
        console.log(`${this.nome} está comendo!`)
    }
    beber() {
        console.log(`${this.nome} está bebendo!`)
    }
}

const p1 = new Pessoa('First', 'Last Name')
console.log(p1)
p1.beber()