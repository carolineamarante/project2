const fs = require('fs')
const path = require('path')

module.exports = class Product {

    constructor(t) {
        this.title = t;  //this é o objeto que executa a função atual (no caso é um construtor que pega o titulo)
    }
    save(){
        const p = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'products.json'
          )
        fs.readFile(p, (err, fileContent) => {
            let products = [];
            if (!err) {
                products = JSON.parse(fileContent)  //JSON.parse = transforma arq. JSON em JS pra poder ler
            }
            products.push(this)
            fs.writeFile(p, JSON.stringify(products), (err) => {    //JSON.stringfy = transforma o conteudo JS em JSON
                console.log(err)
            })         
        })
    }

    static fetchAll(cb) {
        const p = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'products.json'
        )
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                cb([])
            }
            cb(JSON.parse(fileContent))
        })
    }
}