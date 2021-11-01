import { bsAlert } from './bs'

/** Class pour gérer localStorage */
class Storage {

	/** Paramètrer le nom de la clé localStorage */	
	constructor(name) {
		this.name = name
	}

	/** Check si localStorage n'est pas vide et l'initialise si vide  */
	init() {
		if (this.get() === null) {
			var arr = []
		} else {
			arr = this.get()
		}
		//console.log(obj)
		return arr
	}

	/** Sauvegarde la valeur dans localStorage */	
	set(product) {
		return localStorage.setItem(this.name, JSON.stringify(product))
	}

	/** Retourne ce que contient localStorage */	
	get() {
		return JSON.parse(localStorage.getItem(this.name))
	}

	find(id) {
		var productId = this.get().find(item => item._id === id)
		return productId
	}

	/** Modifie la quantité dans le panier */	
	updateQuantity(id, selector) {
		var items = this.get()
		var item = items.find(item => item._id === id) // Retourne l'id trouvé si trouvé
		var selectedQuantity = parseInt(selector.value)
		//console.log(selectedQuantity)

		if (item) { // si il y a un ID
			item.quantity = parseInt(selectedQuantity)
		}

		this.set(items)
	}

	/** Supprimer un objet de localStorage */	
	del(id) {
		// Retourne l'index de l'élement trouvée si l'ID match
		var index = this.get().findIndex(item => item._id === id)
		var arr = this.get()
		// Retire un seul élement du tableau à partir d'un index
		arr.splice(index, 1)
		this.set(arr)
	}

	/** Supprime entièrement localStorage */	
	delAll() {
		localStorage.removeItem(this.name);
	}

	/** Avoir le prix total */
	totalPrice() {
		let totalPrice = 0

		this.get().forEach(product => {

			totalPrice += product.price * product.quantity

		})

		return totalPrice
	}

	/** Vérifie si localStorage est vide ou si il existe */
	isEmpty() {
		if (this.get() === null || this.get().length === 0) return true
	}
	
}

/** Class pour créer localStorage pour un panier */
class Cart extends Storage {

	/** Ajoute un objet dans localStorage */
	add(product) {
		// Initialise un tableau vide ou reprend le localStorage si déja rempli 
		this.set(this.init()) 

		let products = this.get()
		let availableStock = 10

		var productFound = products.find(p => p._id === product._id)
		// Créer une clé quantité et ajoute la valeur de l'input 
		product.quantity = parseInt(document.getElementById('btnQuantity').value)
		// Si le produit existe déja dans localStorage, ne touche qu'à la quantité
		if (productFound) {

			if (productFound.quantity >= availableStock) {

				bsAlert('.card-body', `Il ne reste que ${availableStock} produits en stock`, 'danger', true)

			} else {

				productFound.quantity += parseInt(product.quantity)
				bsAlert('.card-body', 'Le produit a été ajouter au panier', 'success', true)

			}

		} else { // Sinon push un nouveau produit

			products.push({
				name: product.name,
				imageUrl: product.imageUrl,
				_id: product._id,
				quantity: product.quantity,
				price: product.price
			})

			bsAlert('.card-body', 'Le produit a été ajouter au panier', 'success', true)
		}

		this.set(products)
	}

	/** Compte le nombre d'element dans le localStorage */
	count() {

		var count
		if (this.get() === null || this.get() === 0) {

			count = null

		} else {

			count = 0

			this.get().forEach(item => {
				count += item.quantity
			})
			//console.log(count)
			return count
		}
	}
}

/** Class pour gérer le localStorage pour la page confirmation */
class Confirmation extends Storage {
	
	total() {
		let totalPrice = 0

		cart.get().forEach(product => {

			totalPrice += product.price * product.quantity

		})

		return totalPrice
	}

	add(product) {

		this.set(this.init())
		let response = this.get()
		let date = new Date

		response.push({
			contact: product.contact,
			orderId: product.orderId,
			products: product.products,
			date: date,
			totalPrice: this.total()
		})

		this.set(response)
	}

}

const cart = new Cart('cart')
const confirmation = new Confirmation('confirmation')

export { cart, confirmation }
