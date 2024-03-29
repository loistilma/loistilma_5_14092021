
/** Objet pour gérer la validation du formulaire */
const isValid = {
    firstName: false,
    lastName: false,
    address: false,
    city: false,
    email: false,
}

/** Fonction pour écouter et vérifier si les inputs match avec les regex */
export function formValidation(){
    const inputs = document.querySelectorAll('input') // Retourne un tableau de tout les input

    // Objet contenant les regex (la clé doit avoir même nom de l'id de l'input)
    const patterns = {
        firstName: /^[a-zA-Z\d]{1,20}$/,
        lastName: /^[a-zA-Z\d]{1,20}$/,
        address: /[a-z0-9]$/,
        city: /^(?:[0-8]\d|9[0-8])\d{3} [a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/,
        email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
        quantity: /\b([1-9]|10)\b/,
    };

    inputs.forEach((input) => {
        input.addEventListener('keyup', (e) => {
            // la clé doit avoir même nom de l'id de l'input
            validate(e.target, patterns[e.target.attributes.id.value])
        })
    })



    function validate(field, regex) {
        if (regex.test(field.value)) { // Si la regex match avec la valeur dans l'input

            field.className = 'form-control is-valid' // style bootstrap
            isValid[`${field.id}`] = true // Modification de l'id concerné dans l'object isValid
            
        } else {

            field.className = 'form-control is-invalid'
            isValid[`${field.id}`] = false

        }
    }
}

export default isValid