import { bsAlert } from '../utils/bs'
import { getParentNode } from '../utils/dom'
import { numberToEUR } from '../utils/format'
import { cart } from '../utils/storage'
import { header } from '../header/header'
import { animateCSS } from '../utils/animate'

/** Fonction pour écouter des évènement */
function userListener(options = {}, ev, doThat) {
    if (options.el) {

        var element = document.querySelector(options.el)
        element.addEventListener(ev, doThat)

    } else if (options.els) {

        var elements = document.querySelectorAll(options.els)

        elements.forEach(element => {
            element.addEventListener(ev, doThat)
        })
    }
}

/** Ecouter l'évènement click ajouter au panier sur la page product */
const addProductEvent = (camera) => userListener({ el: '#addProduct' }, 'click', () => {

    try {
        cart.add(camera)
        header()
    } catch (error) {
        bsAlert('#error', "Erreur lors de l'ajout d'un article au panier", 'danger', false)
        console.error(error)
    }

})


/** Ecouter l'évènement click  supprimer (bouton minus) sur la page panier */
const delProductEvent = () => userListener({ els: '.delProduct' }, 'click', (e) => {

    try {
        let id = e.target.closest('button').dataset.id
        //console.log(id)
        cart.del(id)
        refreshTotal() // Change la valeur du prix total
        e.target.style.setProperty('--animate-duration', '1s') // animate.css
        delZoomOut(e.target.closest('button'), 2) // Retire l'element du dom
        header() // Badge Count
    } catch (error) {
        bsAlert('#error', "Erreur lors de la suppression d'un produit", 'danger', false)
        console.error(error)
    }

})

/** Ecouter l'évènement change sur select quantité (liste déroulante de nombre) sur la page panier */
const changeQuantityEvent = () => userListener({ els: '[id^=cartQuantity]' }, 'change', (e) => {

    try {
        let id = e.target.dataset.id
        ///console.log(id)
        cart.updateQuantity(id, e.target)
        refreshPriceQuantity(e.target, id) // Change la valeur du prix total d'un article suivant la quantité
        refreshTotal()
        header()
    } catch (error) {
        bsAlert('#error', "Erreur lors du changement de quantité", 'danger', false)
        console.error(error)
    }

})

/** Ecouter l'évènement click  vider le panier (bouton ban) sur la page panier */
const clearCartEvent = () => userListener({ el: '#clearCart' }, 'click', (e) => {

    try {
        cart.delAll()
        delZoomOut(e.target.closest('button'), 4)
        header()
    } catch (error) {
        bsAlert('#error', "Erreur lors de la suppression du panier", 'danger', false)
        console.error(error)
    }

})

function refreshPriceQuantity(element, id) {
    let product = cart.find(id)

    let priceEl = getParentNode(element, 2).nextElementSibling
    priceEl.style.setProperty('--animate-duration', '0.3s')

    animateCSS(priceEl, 'fadeOut').then(() => {
        animateCSS(priceEl, 'fadeIn')
        priceEl.innerHTML = numberToEUR(product.price * product.quantity)
    })
}

function refreshTotal() {
    let totalPriceEl = document.getElementById('totalPrice')
    let totalProductEl = document.getElementById('totalProduct')

    totalProductEl.style.setProperty('--animate-duration', '0.65s')   
    totalPriceEl.style.setProperty('--animate-duration', '0.65s')

    animateCSS(totalPriceEl, 'fadeOut').then(() => {
        animateCSS(totalPriceEl, 'fadeIn')
        totalPriceEl.innerHTML = `<b>${numberToEUR(cart.totalPrice())}</b>`
    })

    animateCSS(totalProductEl, 'fadeOut').then(() => {
        animateCSS(totalProductEl, 'fadeIn')
        totalProductEl.innerHTML = `<b>${cart.count()} articles</b>`
    })

}

function delZoomOut(element, parentN) {

    let tabEl = getParentNode(element, parentN)
    tabEl.style.setProperty('--animate-duration', '1s')

    animateCSS(tabEl, 'bounceOut').then(() => {
        tabEl.remove()

        if (cart.isEmpty()) {

            document.querySelector('.table-responsive').innerHTML = 'Votre panier est vide'
            document.querySelector('#formSection').remove()

        }
    })

}

export { addProductEvent, delProductEvent, clearCartEvent, changeQuantityEvent }