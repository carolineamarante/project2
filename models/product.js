const fs = require('fs')
const path = require('path')

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
)

const getProductsFromFile = cb => {
 
    fs.readFile(p, (err, fileContent) => {
        if (err) {
         cb([])
        } else {
            cb(JSON.parse(fileContent))
        }
    })
}



module.exports = class Product {

    constructor(t) {
        this.title = t;  //this é o objeto que executa a função atual (no caso é um construtor que pega o titulo)
    }

    save(){
        getProductsFromFile(products => {
            products.push(this)
            fs.writeFile(p, JSON.stringify(products), (err) => {    //JSON.stringfy = transforma o conteudo JS em JSON
                console.log(err)
            })
        })
    }

    static fetchAll(cb) {
        getProductsFromFile(cb)
    }
}