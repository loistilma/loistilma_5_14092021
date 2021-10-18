import { APIUtils } from "../utils/api"

/**
* Extension de la class APIUtils (permet d'effectuer des requètes http)
*/

class ProductFetch extends APIUtils{
  constructor(baseURL, json) {
    super({
      baseURL,
      headers: {
        'Accept': json,
        'Content-Type': json
      }
    })
  }


  load() {
    return this.get("/")
  }

  loadById(id) {
    return this.get(`/${id}`)
  }

  send(body) {
    return this.post('/order', body)
  }

}
  
export { ProductFetch }