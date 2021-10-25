import { bsAlert } from './bs'

/**
* Class pour gérer le localStorage
*/

class Storage {
    constructor(name) {
        this.name = name || ""
    }

    init() {

      if(this.get() === null){

        var arr = []

      } else {

        arr = this.get()

      }

      //console.log(obj)
      return arr
    }

    set(product) {
      return localStorage.setItem(this.name, JSON.stringify(product))
    }

    get() {
      return JSON.parse(localStorage.getItem(this.name))
    }

    find(id){
      var index = this.get().find(item => item._id === id)
      return index
    }

    updateQuantity(id, selector) {

      var items = this.get()
      var item = items.find(item => item._id === id)
      var selectedQuantity = parseInt(selector.value)
      //console.log(selectedQuantity)

      if(item){
        item.quantity = parseInt(selectedQuantity)
      }

      this.set(items)
    }

    del(id){
      var index = this.get().findIndex(item => item._id === id)
      var arr = this.get()

      arr.splice(index, 1)
      this.set(arr)
    }

    delAll(){
      localStorage.removeItem(this.name);
    }

    totalPrice(){
      let totalPrice = 0
  
      this.get().forEach(product => {
  
        totalPrice += product.price * product.quantity
  
      })
    
      return totalPrice
    }

}

/**
* Class pour gérer le localStorage pour le panier
*/

class Cart extends Storage{
  
  isEmpty() {
    if (this.get() === null || this.get().length === 0) return true
  }

  add(product) {

    this.set(this.init())

    let products = this.get()
    let availableStock = 10

    var productFound = products.find(p => p._id === product._id)
    product.quantity = parseInt(document.getElementById('btnQuantity').value)

    if(productFound) {
      
      if(productFound.quantity >= availableStock){

        bsAlert('.card-body', `Il reste ${availableStock} produits en stock`, 'danger', true)

      }else{

        productFound.quantity += parseInt(product.quantity)
        bsAlert('.card-body', 'Le produit a été ajouter au panier', 'success', true)

      }
    
    }else{

      products.push({
        name: product.name,
        imageUrl: product.imageUrl,
        _id: product._id,
        quantity: product.quantity,
        price: product.price
      })

      bsAlert('.card-body', 'Le produit a été ajouter au panier', 'success', true)
    }

    this.set(products)
  }

  count() {

    var count
    if(this.get() === null || this.get() === 0){

      count = null

    } else {

      count = 0

      this.get().forEach(item => {
          count += item.quantity
      })
      //console.log(count)
      return count
    }
  }
}

/**
* Class pour gérer le localStorage pour la page confirmation
*/

class Confirmation extends Storage{

  add(product){

    this.set(this.init())
    let response = this.get()
    let date = new Date

    response.push({
      contact: product.contact,
      orderId: product.orderId,
      products: product.products,
      date: date,
      totalPrice: this.totalPrice(cart.get().data)
    })

    this.set(response)
  }

}

const cart = new Cart('cart')
const confirmation = new Confirmation('confirmation')

export { cart, confirmation }
