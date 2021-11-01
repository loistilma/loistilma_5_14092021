import './scss/pages/cart.scss'

import { cart } from './utils/storage'
import { BodyTable, FootTable } from './table/Table'
import { postCart } from './form/postCart'
import { formValidation } from './form/formValidation'
import { delProductEvent, changeQuantityEvent, clearCartEvent } from './events/userActions'
import { header } from './header/header'

function createTable() {
    if (cart.isEmpty()) {

        document.querySelector('.table-responsive').innerHTML = 'Votre panier est vide'
        document.querySelector('#formSection').remove()

    } else {

        const tBody = new BodyTable('tr', {}, 'tbody')
        const tFoot = new FootTable('tr', {}, 'tfoot')
        
        var i = 1
        cart.get().forEach(product => {
            tBody.create(product, i)
            i++
        })

        tFoot.create(cart)

        delProductEvent()
        changeQuantityEvent()
        clearCartEvent()

    }
}

createTable()
postCart()
formValidation()
header()