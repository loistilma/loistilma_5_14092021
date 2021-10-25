import { confirmation } from './utils/storage'
import { createTag } from './utils/dom'
import { numberToEUR } from './utils/format'
import { header } from './header/header'

function createTr(selector, inner){
    let tr = createTag('tr')
    tr.innerHTML = inner
    selector.appendChild(tr)
}


/**
* Fonction pour créer le html de la page confirmation
*/

function confirmBlock(i){
    let div = createTag('div', {class: 'container border border-1 border-dark rounded my-3'})
    let block =
        `
        <div class="d-flex flex-column justify-content-center align-items-center my-4" id="order-heading">
            <div class="text-uppercase">
                <p>Détail de la commande</p>
            </div>
            <div id="date${i}"></div>
            <div class="pt-1">
                <p id="orderId${i}"></p>
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
                        <p id="name${i}" class="text-justify pt-2"></p>
                        <p id="address${i}" class="text-justify pt-2"></p>
                        <p id="city${i}" class="text-justify"></p>
                    </div>
                </div>
            </div>
        </div>
        `
        div.innerHTML = block
    document.getElementById('confirmationSection').appendChild(div)
}

function createConfirm(){

    const trBody = (data) =>
    `
      <th scope="row"><img src="${data.imageUrl}" class="img-fluid" width="300px" height="300px" alt="${data.name}"></th>
      <td>${data.name}</td>
    `
    const trFoot = (data) =>
    `
      <th scope="row">Total</th>
      <td>${numberToEUR(data.totalPrice)}</td>
    `
    if(confirmation.get() === null || confirmation.get().length === 0){
        document.getElementById('confirmationSection').innerHTML = "Aucune commande n'a été passée"
    } else {
        var i = 1
        confirmation.get().forEach(item => {
            confirmBlock(i)
            let dateEl = document.getElementById(`date${i}`)
            let orderIdEl = document.getElementById(`orderId${i}`)
            let nameEl = document.getElementById(`name${i}`)
            let addressEl = document.getElementById(`address${i}`)
            let cityEl = document.getElementById(`city${i}`)
            var tfoot = document.getElementById(`tfoot${i}`)

            createTr(tfoot, trFoot(item))
            var tbody = document.getElementById(`tbody${i}`)
            dateEl.innerHTML = item.date
            orderIdEl.innerHTML = `La commande ${item.orderId} est en cours de <b class="text-dark"> traitement</b>`
            nameEl.innerHTML = `${item.contact.firstName} ${item.contact.lastName}`
            addressEl.innerHTML = item.contact.address
            cityEl.innerHTML = item.contact.city
            item.products.forEach(product => {
                createTr(tbody, trBody(product))  
            })

            i++
        })
    }
}

createConfirm()
header()