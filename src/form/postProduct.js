import isValid from './formValidation.js'
import { Cart, Confirmation } from '../utils/storage'
import { ProductFetch } from '../request/ProductFetch'
import { config } from '../../config/config'
import { Table } from '../table/Table'
import { modalConfirm } from './modalConfirm'


const API_URL = config.API_URL
const product = new ProductFetch(API_URL, 'application/json')
const cart = new Cart('cart')
const confirmation = new Confirmation('confirmation')
const table = new Table

/**
* Fonction pour récuperer la valeur de tout les inputs en les ajoutant dans un objet
*/

function formToJson(form) {
    var obj = {}
    var elements = form.querySelectorAll( "input" )

    elements.forEach(element => {
        var name = element.name
        var value = element.value

        if(name) {
            obj[name] = value
        }
    })

    return obj
}

/**
* Fonction pour créer un tableau avec uniquement l'id des produits qui sont dans le panier
*/

function pushProductIdToArr() {
    var products = []
    cart.get().data.forEach(product => {
        products.push(product._id)
    })
    //console.log(products)
    return products
}

/**
* Fonction pour envoyer des données sur le serveur et effectuer d'autre opérations avec les donées reçu
*/

function postProduct(){
    //console.log(isValid)
    var form = document.getElementById("formToJson")
    if(form){
        
        form.addEventListener( "submit", function(e) {
            e.preventDefault()
            
            try{
                if (Object.values(isValid).every(item => item === true)){
                    console.log('ok')
                    var jsonData = {
                        contact: formToJson(this),
                        products: pushProductIdToArr()
                    }

                    console.log(jsonData.contact)
                    product.send(jsonData).then(response => {
                        //console.log(response)
                        modalConfirm(response)
                        confirmation.add(response)
                        cart.delAll()
                        table.create()
                    })
                }

            } catch(error) {   
                console.error(error)
                e.preventDefault()
                e.stopPropagation()
                form.classList.add('was-validated')
                
            }
        }, false)

    }

}

export { postProduct }
