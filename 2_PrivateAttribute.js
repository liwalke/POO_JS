//Atributos e métodos privados
/*
    *   A declaração 
*/

class Carro {
    #velocidade                                         //Declaração do atributo privado
    constructor(nome) {
        this.nome = nome
        this.#velocidade = 0                            //Inicialização do atributo privado
    }

    acelerar () {
        if(this.#velocidade >= 100) return;
        this.#velocidade++
    }
    freiar () {
        if(this.#velocidade <= 0) return;
        this.#velocidade--
    }
    get velocidade(){ return this.#velocidade}
}

const c1 = new Carro("fusca")
c1.acelerar()
c1.acelerar()
c1.acelerar()
c1.nome = 'Chevete'                                     // Atributos públicos aceitam escrita
console.log(c1)
c1.velocidade = 5                                       // Atributos privados NÃO aceitam escrita
console.log(c1.velocidade)