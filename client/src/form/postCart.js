import { APIUtils } from '../utils/api'
import isValid from './formValidation'
import { cart, confirmation } from '../utils/storage'
import { modalConfirm } from './modalConfirm'
import { bsAlert } from '../utils/bs'

const product = new APIUtils(process.env.API_URL, {'Accept': 'application/json', 'Content-Type': 'application/json'})

/** Récuperer nom/valeur des inputs et les ajouter dans un objet {name: value} */
function formToJson(form) {
    var obj = {}
    var elements = form.querySelectorAll( "input" )

    elements.forEach(element => {
        var name = element.name // input.name
        var value = element.value // input.value

        if(name) { 
            obj[name] = value
        }
    })

    return obj
}

/** Créer un tableau avec uniquement l'id des produits qui sont dans le panier */
function pushProductIdToArr() {
    var products = []
    cart.get().forEach(product => {
        products.push(product._id)
    })
    //console.log(products)
    return products
}

/** Envoyer une réquète body sur le serveur et effectuer d'autre opérations avec la réponse du serveur */
function postCart(){
    //console.log(isValid)
    var form = document.getElementById("formToJson")
    if(form){
        
        form.addEventListener( "submit", function(e) {
            e.preventDefault()
            try{
                if (Object.values(isValid).every(item => item === true)){ // Si toutes les valeurs de isValid sont égales à true

                    var jsonData = {
                        contact: formToJson(this),
                        products: pushProductIdToArr()
                    }
                    //console.log(jsonData.contact)

                    product.post('/api/cameras/order', jsonData).then(response => {
                        //console.log(response)
                        modalConfirm(response)
                        confirmation.add(response) // copie de la reponse dans localStorage
                        cart.delAll()
                    })

                } else {

                    e.preventDefault()
                    e.stopPropagation()
                    form.classList.add('was-validated') // style bootstrap

                }

            } catch(error) {  

                bsAlert('#main .container', "Erreur lors de l'envoi des données", 'danger', false)
                console.error(error)

            }
        }, false)

    }

}

export { postCart }
