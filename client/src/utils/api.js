/**
* Classe
*/

class APIUtils{
  constructor(baseURL, headers) {
    this.baseURL = baseURL
    this.headers = headers
  }

  async get(endpoint){
    let res = await fetch(this.baseURL + endpoint, { method: 'GET' })
    return res.json()
  }

  async post(endpoint, body){
    let res = await fetch(this.baseURL + endpoint, { 
      method: 'POST', 
      headers: this.headers,
      body: JSON.stringify(body) 
    })
    return res.json()
  }
}

export { APIUtils }
