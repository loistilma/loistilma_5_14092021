import { confirmation } from './utils/storage'
import { numberToEUR } from './utils/format'
import { header } from './header/header'
import { CreateNode } from './utils/dom'

class ConfirmationBase extends CreateNode {

    base(response, i) {
        let inner = 
            `
            <div class="d-flex flex-column justify-content-center align-items-center my-4" id="order-heading">
                <div class="text-uppercase">
                    <p>Détail de la commande</p>
                </div>
                <div id="date${i}">${response.date}</div>
                <div class="pt-1">
                    <p id="orderId${i}">La commande ${response.orderId} est en cours de <b class="text-dark"> traitement</b></p>
                </div>
            </div>
            <div class="container">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr class="text-uppercase text-muted">
                                <th scope="col">&nbsp;</th>
                                <th scope="col" class="text-right">produit</th>
                            </tr>
                        </thead>
                        <tbody id="tbody${i}"></tbody>
                        <tfoot id="tfoot${i}"></tfoot>
                    </table>
                </div>
                <div class="row rounded p-1 my-3">
                    <div class="col-md-6 py-3">
                        <div class="d-flex flex-column align-items start"> <b>Adresse de livraison</b>
                            <p id="name${i}" class="text-justify pt-2">${response.contact.firstName} ${response.contact.lastName}</p>
                            <p id="address${i}" class="text-justify pt-2">${response.contact.address}</p>
                            <p id="city${i}" class="text-justify">${response.contact.city}</p>
                        </div>
                    </div>
                </div>
            </div>
            `
        return inner
    }

    create(response, i) {
        this.createNode(this.base(response, i))
    }

}

class ConfirmationBody extends CreateNode {

    tbody(product) {
        let inner = 
            `
            <th scope="row"><img src="${product.imageUrl}" class="img-fluid" width="300px" height="300px" alt="${product.name}"></th>
            <td>${product.name}</td>
            `
        return inner
    }

    create(product) {
        this.createNode(this.tbody(product))
    }

}

class ConfirmationFoot extends CreateNode {

    tfoot(product) {
        let inner = 
            `
            <th scope="row">Total</th>
            <td>${numberToEUR(product.totalPrice)}</td>
            `
        return inner
    }

    create(product) {
        this.createNode(this.tfoot(product))
    }

}

if (confirmation.isEmpty()) {

    document.querySelector('.table-responsive').innerHTML = "Aucune commande n'a été passée"

} else {
    const confirmationBase = new ConfirmationBase('div', {class: 'container border border-1 border-dark rounded my-3'}, '.table-responsive')

    var i = 1
    confirmation.get().forEach(item => {
        confirmationBase.create(item, i)

        const confirmationBody = new ConfirmationBody('tr', {}, `#tbody${i}`)
        const confirmationFoot = new ConfirmationFoot('tr', {}, `#tfoot${i}`)

        confirmationFoot.create(item)

        item.products.forEach(product => {
            confirmationBody.create(product)
        })

        i++
    })
}

header()