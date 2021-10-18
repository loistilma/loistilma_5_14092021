import { bsAlert } from './bs'

/**
* Class pour gérer le localStorage
*/

class Storage {
    constructor(name) {
        this.name = name || ""
    }

    check() {

      if(this.get() === null){

        var obj = {}
        obj['data'] = []

      } else {

        obj = this.get()

      }

      //console.log(obj)
      return obj
    }

    set(data) {
      return localStorage.setItem(this.name, JSON.stringify(data))
    }

    get(){
      return JSON.parse(localStorage.getItem(this.name))
    }

    updateQuantity(id, selector) {

      var items = this.get()
      var item = items.data.find(item => item._id === id)
      var selectedQuantity = parseInt(selector.value)
      //console.log(selectedQuantity)

      if(item){
        item.quantity = parseInt(selectedQuantity)
      }

      this.set(items)
    }

    del(id){
      var index = this.get().data.findIndex(item => item._id === id)
      var arr = this.get()

      arr.data.splice(index, 1)
      this.set(arr)
    }

    delAll(){
      localStorage.removeItem(this.name);
    }

}

/**
* Class pour gérer le localStorage pour le panier
*/

class Cart extends Storage{

  add(el){

    this.set(this.check())

    var items = this.get()
    //console.log(items.data)

    var availableStock = 10

    var item = items.data.find(item => item._id === el._id)
    el.quantity = parseInt(document.getElementById('btnQuantity').value)

    if(item){
      
      if(item.quantity >= availableStock){

        bsAlert('.card-body', `Il reste ${availableStock} produits en stock`, 'danger', true)

      }else{

        item.quantity += parseInt(el.quantity)
        bsAlert('.card-body', 'Le produit a été ajouter au panier', 'success', true)

      }
    
    }else{

      items.data.push({
        name: el.name,
        imageUrl: el.imageUrl,
        _id: el._id,
        quantity: el.quantity,
        price: el.price
      })

      bsAlert('.card-body', 'Le produit a été ajouter au panier', 'success', true)
    }

    this.set(items)
  }

  totalPrice(){
    let totalPrice = 0

    this.get().data.forEach(product => {

      totalPrice += product.price * product.quantity

    })
  
    return totalPrice
  }

  count(){
    var count
    if(this.get() === null || this.get().data === 0){

      count = null

    } else {

      let data = this.get().data
      count = 0

      data.forEach(item => {
          count += item.quantity
      })
      console.log(count)
      return count
    }
  }
}

const cart = new Cart('cart')

/**
* Class pour gérer le localStorage pour la page confirmation
*/

class Confirmation extends Storage{

  add(el){

    this.set(this.check())
    var resItems = this.get()
    var date = new Date

    resItems.data.push({
      contact: el.contact,
      orderId: el.orderId,
      products: el.products,
      date: date,
      totalPrice: this.totalPrice(cart.get().data)
    })

    this.set(resItems)
  }

  totalPrice(){
    let totalPrice = 0

    this.get().data.forEach(product => {

      totalPrice += product.price * product.quantity

    })
  
    return totalPrice
  }
}

export { Cart, Confirmation }
