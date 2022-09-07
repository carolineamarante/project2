const products = []
module.exports = class Product {

    constructor(t) {
        this.title = t;  //this é o objeto que executa a função atual (no caso é um construtor que pega o titulo)
    }
    save(){
        products.push(this)
    }

}