import './scss/pages/index.scss'

import { ProductFetch } from './request/ProductFetch'
import { config } from '../config/config'
import { bsAlert } from './utils/bs'
import { Card } from './card/Card'

const API_URL = config.API_URL
const product = new ProductFetch(API_URL, 'application/json')
const createCard = new Card

/**
* Fonction pour recevoir l'objet contenant tout les produits puis traiter les données
*/

async function getAllProducts() {
    try {

        const cameras = await product.load()
        cameras.map(camera => createCard.append(camera, {index: true}))

    } catch(error) {

        bsAlert('#main .container', 'Erreur lors du traitement des données', 'danger', false)
        console.error(error)

    }
}

export { getAllProducts }

getAllProducts()



