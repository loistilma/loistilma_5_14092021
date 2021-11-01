import { createTag } from '../utils/dom'
import { Modal } from 'bootstrap'

/** Fonction pour l'ouverture d'un modal pour indiquant le numéro de commande */
function modalConfirm(data){
    var modalId = document.getElementById('modalConfirm')
    var modalDialog = createTag('div', {class: 'modal-dialog'})
    modalDialog.innerHTML = 
        `
        <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title">Votre commande</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>Merci ${data.contact.firstName} pour votre achat</p>
                <p>Votre commande est en cours de traitement</p>
            </div>
            <div class="modal-footer">
            <a href="/confirmation.html" class="btn btn-secondary">Voir mes commandes</a>
            </div>
        </div>
        `
    modalId.appendChild(modalDialog)

    var modalInstance = new Modal(modalId)
    modalInstance.show()
    modalId.addEventListener('hidden.bs.modal', function () {
        modalId.innerHTML = ""
    })
    let div = createTag('div')
    div.innerHTML = 
        `
        <label for="orderId">Votre numéro de commande : </label>
        <input class="form-control" type="text" value="${data.orderId}" aria-label="Entrée désactiver" disabled>
        `
    document.querySelector('.modal-body').appendChild(div)
}

export { modalConfirm }