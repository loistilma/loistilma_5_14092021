import { Cart } from '../utils/storage'
import { numberToEUR } from '../utils/format'
import { createTag, removeElement } from '../utils/dom'
import { cartEvent } from '../events/UserActions'
import { header } from '../header/header'

const cart = new Cart('cart')

/**
* Class pour créer le tableau html du panier
*/

class Table {

    createTr(selector, inner){
        let tr = createTag('tr')
        tr.innerHTML = inner
        selector.appendChild(tr)
    }

    quantitySelect(data) {
        var i = 1
        var arr = []

        while (i <= 10) {
            //console.log(i)
            arr.push(i)
            i++
        }
    
        var select = arr.map(value => {
            if(data === value){

                return `<option value="${value}" selected>${value}</option>`

            } else {

                return `<option value="${value}">${value}</option>`

            }
        })
      
        return select
    }

    trBody(product, i) {
        const inner = 
            `
                <th scope="row"><img src="${product.imageUrl}" class="img-fluid" width="300px" height="300px" alt="${product.name}"></th>
                <td>${product.name}</td>
                <td>${numberToEUR(product.price)}</td>
                <td class="text-center">
                    <label for="cartQuantity${i}">
                    <select data-id="${product._id}" id="cartQuantity${i} form-select" aria-label="Selection quantité">
                        ${this.quantitySelect(product.quantity)}
                    </select>      
                    </label>
            
                </td>
                <td>${numberToEUR(product.price * product.quantity)}</td>
                <td class="text-center"><button class="btn btn-secondary btn-sm delProduct rounded-circle" data-id="${product._id}" data-bs-toggle="tooltip" data-bs-placement="left" title="Retirer du panier"><i class="fas fa-minus-circle"></i></button></td>
            `
        return inner
    }

    trFoot(product) {
        const inner =
            `
                <th scope="row"><b>Total</b></th>
                <td scope="row">&nbsp;</td>
                <td scope="row">&nbsp;</td>
                <td class="text-center"><b> articles</b></td>
                <td><b>${numberToEUR(cart.totalPrice(product))}</b></td>
                <td class="text-center"><button id="clearCart" class="btn btn-danger btn-sm rounded-circle" data-bs-toggle="tooltip" data-bs-placement="left" title="Vider le panier"><i class="fas fa-ban"></i></td> 
            `
        return inner
    }

    create(){
        if(cart.get() === null || cart.get().data.length === 0){

            document.querySelector('#cartSection .container').innerHTML = 'Votre panier est vide'
            //removeElement('table')
            removeElement('form')
      
        } else {
      
            var tbody = document.querySelector('tbody')
            tbody.innerHTML = ""
        
            var tfoot = document.querySelector('tfoot')
            tfoot.innerHTML = ""

            var i = 1

            cart.get().data.forEach(product => {
                this.createTr(tbody, this.trBody(product, i))
                i++
            })
        
            this.createTr(tfoot, this.trFoot(cart.get().data))
            this.refresh()      
        }
    }

    refresh() {
        cartEvent(cart, this, header())
    }

}

export { Table }
