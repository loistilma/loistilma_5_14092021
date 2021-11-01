import { numberToEUR } from '../utils/format'
import { CreateNode } from '../utils/dom'

class BodyTable extends CreateNode {

    quantitySelect(quantity) {
        var i = 1
        var arr = []

        while (i <= 10) {
            //console.log(i)
            arr.push(i)
            i++
        }
    
        let select = arr.map(value => {
            if(quantity === value){

                return `<option value="${value}" selected>${value}</option>`

            } else {

                return `<option value="${value}">${value}</option>`

            }
        }).join('')
      
        return select
    }

    trBody(product, i) {
        const inner = 
            `
                <th scope="row"><img src="${product.imageUrl}" class="img-fluid" alt="${product.name}"></th>
                <td>${product.name}</td>
                <td>${numberToEUR(product.price)}</td>
                <td class="text-center">
                    <label for="cartQuantity${i}">
                    <select class="form-select" data-id="${product._id}" id="cartQuantity${i}" aria-label="Selection quantité">
                        ${this.quantitySelect(product.quantity)}
                    </select>      
                    </label>
            
                </td>
                <td>${numberToEUR(product.price * product.quantity)}</td>
                <td class="text-center"><button class="btn btn-secondary btn-sm delProduct rounded-circle" data-id="${product._id}" data-bs-toggle="tooltip" data-bs-placement="left" title="Retirer du panier"><span class="fas fa-minus-circle"></span></button></td>
            `
        return inner
    }

    create(product, i) {
        this.createNode(this.trBody(product, i))
    }
}

class FootTable extends CreateNode {

    trFoot(cart) {
        const inner =
            `
                <th scope="row"><b>Total</b></th>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td id="totalProduct" class="text-center"><b>${cart.count()} articles</b></td>
                <td id="totalPrice"><b>${numberToEUR(cart.totalPrice())}</b></td>
                <td class="text-center"><button id="clearCart" class="btn btn-danger btn-sm rounded-circle" data-bs-toggle="tooltip" data-bs-placement="left" title="Vider le panier"><i class="fas fa-ban"></i></td> 
            `
        return inner
    }

    create(cart) {
        this.createNode(this.trFoot(cart))
    }

}

export { BodyTable, FootTable }
