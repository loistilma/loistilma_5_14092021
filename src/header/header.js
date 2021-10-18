import { Cart } from "../utils/storage"

const cart = new Cart('cart')

function header() {
    const badge =  document.getElementById('cart-nb')

    if(cart.count() === undefined){

        badge.innerHTML = ""

    } else {

        badge.innerHTML = cart.count()

    }
    
}

export { header }