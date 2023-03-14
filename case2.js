class Screen{
    constructor(name,price,quantity) {
        this.name = name
        this.price = price
        this.quantity = quantity
    }
    getName(){
        return this.name
    }
    getPrice(){
        return this.price
    }
    getQuantity(){
        return this.quantity
    }
    setName(name){
        this.name = name
    }
    setPrice(price){
        this.price = price
    }
    setQuantity(quantity){
        this.quantity = quantity
    }
}
let screenshortArray = []
function add(){
    let valueName = document.getElementById('name').value
    let valueQuantity = document.getElementById('quantity').value
    let valuePrice = document.getElementById('price').value
    let screenshort = new Screen( valueName,valueQuantity,valuePrice)
    screenshortArray.push(screenshort)
    display()
}
function display(){
    let display = `<tr>
    <th>stt</th>
    <th>ten</th>
    <th>gia</th>
    <th>so luong</th>
    <th>xoa</th>
    <th>sua</th>
</tr>`
    // console.log(screenshortArray)
    for (let i = 0; i <screenshortArray.length ; i++) {
        display += `<tr>
    <td>${i+1}</td>
    <td>${screenshortArray[i].name}</td>
    <td>${screenshortArray[i].quantity}</td>
    <td>${screenshortArray[i].price}</td>
    <td>xoa</td>
    <td>sua</td>
</tr>`
    }
    document.getElementById('div').innerHTML = `<table>${display}</table>`
    // console.log(display)
}