import isValid from './formValidation'
import { cart, confirmation } from '../utils/storage'
import { APIUtils } from '../utils/api'
//import { table } from '../table/Table'
import { modalConfirm } from './modalConfirm'
import { bsAlert } from '../utils/bs'

const product = new APIUtils(process.env.API_URL, {'Accept': 'application/json', 'Content-Type': 'application/json'})

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
    cart.get().forEach(product => {
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

                    var jsonData = {
                        contact: formToJson(this),
                        products: pushProductIdToArr()
                    }

                    //console.log(jsonData.contact)

                    product.post('/api/cameras/order', jsonData).then(response => {
                        //console.log(response)
                        modalConfirm(response)
                        confirmation.add(response)
                        cart.delAll()
                    })

                } else {

                    e.preventDefault()
                    e.stopPropagation()
                    form.classList.add('was-validated') 

                }

            } catch(error) {  

                bsAlert('#main .container', "Erreur lors de l'envoi des données", 'danger', false)
                console.error(error)

            }
        }, false)

    }

}

export { postProduct }
