const API_URL = 'http://localhost:3000/api'

class APIHelper {
  constructor(_baseURL) {
    this._baseURL = _baseURL;
  }

  async _fetchJSON(endpoint, options = {}) {
    const res = await fetch(this._baseURL + endpoint);

    if (!res.ok) throw new Error(res.statusText);

    if (options.parseResponse !== false && res.status !== 204)
      return res.json();
  }

  get(endpoint) {
    return this._fetchJSON(endpoint, {
        method: "GET"});
  }

  post(endpoint, body) {
    return this._fetchJSON(endpoint, {
      body: body ? JSON.stringify(body) : undefined,
      method: "POST"
    });
  }

}

const serverAPI = new APIHelper(API_URL)
//cameraAPI.get("/cameras")