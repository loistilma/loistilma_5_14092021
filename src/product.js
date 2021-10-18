import './scss/pages/product.scss'

import { ProductFetch } from './request/ProductFetch'
import { config } from '../config/config'

import { Card } from './card/Card'
import { productEvent } from './events/UserActions'
import { Cart } from './utils/storage'
import { header } from './header/header'
import { bsAlert } from './utils/bs'

const API_URL = config.API_URL
const product = new ProductFetch(API_URL, 'application/json')
const cart = new Cart('cart')
const createCard = new Card


/**
* Fonction pour recevoir l'objet contenant un produit par l'id puis traiter les données
*/

async function getProductById() {
    const rawURL = window.location.href
    const url = new URL(rawURL)
    const idParams = url.searchParams.get("id")

    try {

        const camera = await product.loadById(idParams)
        createCard.append(camera, {product: true})
        productEvent(cart, camera, header())
        
    } catch(error) {

        bsAlert('#main .container', 'Erreur lors du traitement des données', 'danger', false)
        console.error(error)

    }
}

export { getProductById }

getProductById()
