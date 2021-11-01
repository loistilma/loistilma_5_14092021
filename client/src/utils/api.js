/** Class pour utiliser fetch avec des endpoints */
class APIUtils {
	
	/** Paramètre la réquète Fetch */
	constructor(baseURL, headers) {
		this.baseURL = baseURL
		this.headers = headers
	}

	/** Requete GET */
	async get(endpoint) {
		let res = await fetch(this.baseURL + endpoint, { method: 'GET' })
		return res.json()
	}

	/** Requete POST */
	async post(endpoint, body) {
		let res = await fetch(this.baseURL + endpoint, {
			method: 'POST',
			headers: this.headers,
			body: JSON.stringify(body)
		})
		return res.json()
	}
}

export { APIUtils }
