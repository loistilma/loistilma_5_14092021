import { createTag } from './dom'
import { Tooltip } from 'bootstrap'

/** Fonction pour créer des alertes bootstrap */
function bsAlert(querySelector, inner, context, timeout){
    var btnAlert = createTag('div', {class: `alert alert-${context} animate__animated animate__bounceIn mt-3`, role: 'alert'})
    btnAlert.innerHTML = inner
    document.querySelector(querySelector).appendChild(btnAlert)
    if(timeout){
        setTimeout(function() { document.querySelector('.alert').remove()}, 2000)
    }
}

/** Fonction pour créer des tooltips bootstrap */
function bsTooltips(){
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        var tooltipInstance = new Tooltip(tooltipTriggerEl)
        tooltipTriggerEl.addEventListener('click', function () {
            tooltipInstance.hide()
        })
    })
}

export { bsAlert, bsTooltips }