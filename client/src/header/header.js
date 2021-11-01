import { cart } from "../utils/storage"

function header() {
    var badgeN = document.getElementById('cart-nb')
    //console.log(cart.count())

    if(badgeN && cart.count() === 0 || cart.count() === undefined){
        badgeN.innerHTML = ""
    } else {
        let badge = 
            `
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                ${cart.count()}
                <span class="visually-hidden">Articles du panier</span>
            </span>
            `
        document.getElementById('cart-nb').innerHTML = badge        
    }
    
}

export { header }