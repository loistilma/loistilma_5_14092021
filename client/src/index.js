import './scss/pages/index.scss'

import { APIUtils } from "./utils/api"
import { bsAlert } from './utils/bs'
import { Card } from './card/Card'
import { header } from './header/header'

const product = new APIUtils(process.env.API_URL, 'application/json')
const card = new Card

/**
* Fonction pour recevoir l'objet contenant tout les produits puis traiter les données
*/

async function getAllProducts() {
    try {

        const cameras = await product.get('/api/cameras')
        cameras.map(camera => card.create(camera, {index: true}))
        header()

    } catch(error) {

        bsAlert('#main .container', 'Erreur lors du traitement des données', 'danger', false)
        console.error(error)

    }
}

//export { getAllProducts }

getAllProducts()



