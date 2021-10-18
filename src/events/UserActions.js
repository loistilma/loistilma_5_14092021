import { bsAlert } from '../utils/bs'

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

function productEvent(cart, camera, header) {
    userListener({ el: '#addProduct' }, 'click', () => {
        try {

            cart.add(camera)
            header

        } catch (error) {

            bsAlert('#main .container', "Erreur lors de l'ajout d'un article au panier", 'danger', false)
            console.error(error)

        }
    })
}

/**
* Ecouteur d'évenement sur la page panier
*/

function cartEvent(cart, table, header) {

    userListener({ els: 'button[data-id]' }, 'click', (e) => {
        
            let id = e.target.dataset.id
            console.log(id)
            cart.del(id)
            table.create()
            header

    })

    userListener({ els: '[id^=cartQuantity]' }, 'change', (e) => {

            let id = e.target.dataset.id
            ///console.log(id)
            cart.updateQuantity(id, e.target)
            table.create()
            header()

    })

    userListener({ el: '#clearCart' }, 'click', () => {


            cart.delAll()
            table.create()
            header()


    })

}

export { productEvent, cartEvent, userListener }