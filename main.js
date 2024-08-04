class Animal{
    constructor(nome,idade){
        if(this.constructor === Animal){
            throw new error ("Classe abstrata animal não pode ser instaciada diretamente ");
        }
        this.nome = nome;
        this.idade = idade;
        
    }
    emitirSom(){
        throw new error("Metodo emitirSom () deve ser implementado")
}
    toString(){
        return `${this.nome}, ${this.idade} anos`;
    }
}
class Cachorro extends Animal{
    constructor(nome,idade, raca){
        super(nome,idade);
        this.raca = raça;
    }
    emitirSom(){
        return "latido";
    }
    toString(){
        return `${super.toString()}, Raça : ${this.raca}, Som: ${this.emitirSom}`;
    }
}
class Gato extends Animal{
    constructor(nome,idade, cor){
        super(nome,idade);
        this.cor = cor;
    }
    emitirSom(){
        return "Miau";
    }
    toString(){
        return `${super.toString()}, Cor : ${this.cor}, Som: ${this.emitirSom}`;
    }
}
const cachorro1 = new Cachorro("Rext", 5, "Labrador");
const cachorro2 = new Cachorro("Bolt", 3, "Pastor Alemão");
const gato = new Gato("Whiskers", 2, "cinza");

console.log(cachorro1.toString());
console.log(cachorro2.toString());
console.log(gato.toString());

   