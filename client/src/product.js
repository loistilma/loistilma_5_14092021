// Import de SCSS pour webpack
import './scss/pages/product.scss'

// Import de ES6 Module pour webpack
import { APIUtils } from './utils/api'
import { ProductCard } from './card/Card'
import { addProductEvent } from './events/userActions'
import { bsAlert } from './utils/bs'
import { header } from './header/header'

const product = new APIUtils(process.env.API_URL)

/** Fonction pour recevoir un produit par l'id puis traiter les données */
async function getProductById() {
    const rawURL = window.location.href
    const url = new URL(rawURL)
    const idParams = url.searchParams.get("id") // Extrait le paramètre id de l'url

    try {
        const card = new ProductCard('div', {class: 'col'}, '#cardSection')
        const camera = await product.get(`/api/cameras/${idParams}`)
        card.create(camera)
        addProductEvent(camera) // Ajoute l'event listener sur le bouton "Ajouter au panier"
    } catch(error) {
        bsAlert('#main .container', 'Erreur lors du traitement des données', 'danger', false)
        console.error(error)
    }
}

header()
getProductById()

