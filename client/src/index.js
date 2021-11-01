// Import de SCSS pour webpack
import './scss/pages/index.scss'

// Import de ES6 Module pour webpack
import { IndexCard } from './card/Card'
import { APIUtils } from "./utils/api"
import { bsAlert } from './utils/bs'
import { header } from './header/header'

// Instanciation de la classe avec l'url de base (http://localhost:3000)
const product = new APIUtils(process.env.API_URL)

/** Fonction pour recevoir tout les produits puis traiter les données */
async function getAllProducts() {
    try {
        const card = new IndexCard('div', {class: 'col-sm-6'}, '#cardSection')
        const cameras = await product.get('/api/cameras')
        cameras.forEach(camera => card.create(camera)) // Itération des données
    } catch(error) {
        bsAlert('#main .container', 'Erreur lors du traitement des données', 'danger', false)
        console.error(error)
    }
}

header() // Appel de la fonction pour avoir le nombre d'article au panier
getAllProducts()





