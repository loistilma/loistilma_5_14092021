import './scss/pages/product.scss'

import { APIUtils } from './utils/api'
import { Card } from './card/Card'
import { addProductEvent } from './events/userActions'
import { header } from './header/header'
import { bsAlert } from './utils/bs'

const product = new APIUtils(process.env.API_URL, 'application/json')
const card = new Card


/**
* Fonction pour recevoir l'objet contenant un produit par l'id puis traiter les données
*/

async function getProductById() {
    const rawURL = window.location.href
    const url = new URL(rawURL)
    // Extrait le paramètre id de l'url
    const idParams = url.searchParams.get("id")

    try {

        const camera = await product.get(`/api/cameras/${idParams}`)
        card.create(camera, {product: true})
        addProductEvent(camera)
        header()
        
    } catch(error) {

        bsAlert('#main .container', 'Erreur lors du traitement des données', 'danger', false)
        console.error(error)

    }
}

//export { getProductById }

getProductById()

