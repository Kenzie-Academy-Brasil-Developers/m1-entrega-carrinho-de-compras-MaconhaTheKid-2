let body = document.body
let main = document.createElement('main')
body.appendChild(main)

let title = document.createElement('p')
title.innerText='Virtual Market'
title.className=('title')
main.appendChild(title)

let topList = document.createElement('div')
topList.className=('topList')
main.appendChild(topList)

let nameTop = document.createElement('p')
nameTop.className=('nameTop')
nameTop.innerText='item'
topList.appendChild(nameTop)

let valueTop = document.createElement('p')
valueTop.className=('valueTop')
valueTop.innerText='Price'
topList.appendChild(valueTop)

let total=[]

let listProducts = document.createElement("ul")
listProducts.className=('list_products')
main.appendChild(listProducts)

let produtos = [
    {
        name:'Uva Crimson',
        value:44.99
    },
    {
        name:'Vinho Canção',
        value:17.98
    },
    {
        name:'Agua de coco',
        value: 8.99
    },
    {
        name:'Mamão',
        value:9.98
    },
    {
        name:'Água tônica',
        value:17.98
    }


]

function item(name, value) {
    let product = document.createElement('li')
    let nameProduct = document.createElement('p')
    nameProduct.className=('nameProduct')
    nameProduct.innerText= name
    product.appendChild(nameProduct)
    
    let valueProduct = document.createElement('p')
    valueProduct.className=('valueProduct')
    valueProduct.innerText=(`R$ ${value}`)
    product.appendChild(valueProduct)
    listProducts.appendChild(product)
    total.push(value)
}
for (i=0; i<produtos.length;i++){
    item(produtos[i].name, produtos[i].value)
}
let soma = 0
for (i=0;i<listProducts.childElementCount;i++){
    soma += total[i]
}

let bottonList = document.createElement('div')
bottonList.className=('bottonList')
main.appendChild(bottonList)

let nameBotton = document.createElement('p')
nameBotton.className=('nameBotton')
nameBotton.innerText='Total'
bottonList.appendChild(nameBotton)

let valueBotton = document.createElement('p')
valueBotton.className=('valueBotton')
valueBotton.innerText=(`R$ ${soma}`)
bottonList.appendChild(valueBotton)

let button = document.createElement('button')
button.className=('button')
button.innerText='Finalizar Compra'
main.appendChild(button)