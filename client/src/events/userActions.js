import { bsAlert } from '../utils/bs'
import { getParentNode } from '../utils/dom'
import { numberToEUR } from '../utils/format'
import { cart } from '../utils/storage'
import { header } from '../header/header'
import { animateCSS } from '../utils/animate'

/**
* Fonction pour écouter des évenement
*/

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

/**
* Ecouteur d'évenement sur la page product
*/


const addProductEvent = (camera) => userListener({ el: '#addProduct' }, 'click', () => {
    try {

        cart.add(camera)
        header()

    } catch (error) {

        bsAlert('#error', "Erreur lors de l'ajout d'un article au panier", 'danger', false)
        console.error(error)

    }
})


/**
* Ecouteur d'évenement sur la page panier
*/


const delProductEvent = () => userListener({ els: '.delProduct' }, 'click', (e) => {
    try {

        let id = e.target.closest('button').dataset.id
        //console.log(id)
        cart.del(id)
        refreshTotal()
        e.target.style.setProperty('--animate-duration', '1s')
        delZoomOut(e.target.closest('button'))
        header()

    } catch (error) {

        bsAlert('#error', "Erreur lors de la suppression d'un produit", 'danger', false)
        console.error(error)

    }
})

const changeQuantityEvent = () => userListener({ els: '[id^=cartQuantity]' }, 'change', (e) => {
    try {

        let id = e.target.dataset.id
        ///console.log(id)
        cart.updateQuantity(id, e.target)
        refreshPriceQuantity(e.target, id)
        refreshTotal()
        header()

    } catch (error) {

        bsAlert('#error', "Erreur lors du changement de quantité", 'danger', false)
        console.error(error)
    }
})

const clearCartEvent = () => userListener({ el: '#clearCart' }, 'click', () => {

    try {

        cart.delAll()
        header()

        if (cart.isEmpty()) {

            document.querySelector('.table-responsive').innerHTML = 'Votre panier est vide'
            document.querySelector('#formSection').remove()

        }

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

function delZoomOut(element) {

    let tabEl = getParentNode(element, 2)
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