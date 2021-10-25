import { cart } from "../utils/storage"

function header() {
    const badge =  document.getElementById('cart-nb')

    if(cart.count() === 0 || cart.count() === null){

        badge.innerHTML = ""

    } else {

        badge.innerHTML = cart.count()

    }
    
}

export { header }