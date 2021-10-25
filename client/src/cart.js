import './scss/pages/cart.scss'

import { cart } from './utils/storage'
import { table } from './table/Table'
import { postProduct } from './form/postProduct'
import { formValidation } from './form/formValidation'
import { header } from './header/header'
import { delProductEvent, changeQuantityEvent, clearCartEvent } from './events/userActions'

table.create(cart.get())
postProduct()
formValidation()
header()

if (cart.isEmpty()) {

    document.querySelector('.table-responsive').innerHTML = 'Votre panier est vide'
    document.querySelector('#formSection').remove()

} else {

    delProductEvent()
    changeQuantityEvent()
    clearCartEvent()

}