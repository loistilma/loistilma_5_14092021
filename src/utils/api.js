/**
* Visiter {@link https://dev.to/stroemdev/make-fetch-better-and-your-api-request-methods-easier-to-implement-e9i}
*/

class APIUtils{
  constructor(options = {}) {
    this._baseURL = options.baseURL || "";
    this._headers = options.headers || {};
  }

  async _fetchJSON(endpoint, options = {}) {
    const res = await fetch(this._baseURL + endpoint, {
      ...options,
      headers: this._headers
    });

    if (!res.ok) throw new Error(res.statusText);

    if (options.parseResponse !== false && res.status !== 204)
      return res.json();

    return undefined;
  }

  setHeader(key, value) {
    this._headers[key] = value;
    return this;
  }

  getHeader(key) {
    return this._headers[key];
  }

  get(endpoint, options = {}) {
    return this._fetchJSON(endpoint, {
      ...options,
      method: "GET"
    });
  }

  post(endpoint, body, options = {}) {
    return this._fetchJSON(endpoint, {
      ...options,
      body: body ? JSON.stringify(body) : undefined,
      method: "POST"
    });
  }

}

export { APIUtils }
