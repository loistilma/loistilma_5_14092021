"use strict";(self.webpackChunkorinoco_frontend=self.webpackChunkorinoco_frontend||[]).push([[826],{176:(t,e,n)=>{n.d(e,{v:()=>s});const s={API_URL:"http://localhost:3000/api/cameras"}},773:(t,e,n)=>{n.d(e,{Z:()=>r});var s=n(558),a=n(880);class r{selector(){return document.querySelector("#cards > .container > .row")}indexPage(t){return`\n            <a class="reset-a" href="/produit.html?id=${t._id}">\n                <div class="card my-2 rounded border-0">\n                    <img src="${t.imageUrl}" class="img-fluid" alt="Aperçu de la camera ${t.name}">\n                    <div class="card-body rounded">\n                        <div class="d-flex justify-content-between">\n                            <div>\n                                <h2 class="card-title my-4">${t.name}</h2>\n                            </div>\n                            <div>\n                                <p class="my-4 card-text btn btn-primary rounded-pill">${(0,a.Y)(t.price)}</p>\n                            </div>\n                        </div>                            \n                        <p class="card-text mb-4">${t.description}</p>\n                    </div>\n                </div>\n            </a>\n            `}productPage(t){return`\n            <div class="card my-2 rounded border-0">\n                <div class="row g-0">\n                    <div class="col-sm-4">\n                        <img src="${t.imageUrl}" class="img-fluid" alt="Aperçu de la camera ${t.name}">\n                    </div>\n                    <div class="col-sm-8">\n                        <div class="card-body rounded">\n                            <div class="d-flex justify-content-between">\n                            <div>\n                                <h2 class="card-title my-4">${t.name}</h2>\n                            </div>\n                            <div>\n                                <p class="my-4 card-text btn btn-primary rounded-pill">${(0,a.Y)(t.price)}</p>\n                            </div>\n                        </div>                            \n                        <p class="card-text mb-4">${t.description}</p>\n                        <div class="input-group mb-3">\n                            <label for="btnQuantity" class="input-group-text">Quantité</label>\n                            <span class="input-group-btn">\n                                <button type="button" id="minus" class="btn btn-default btn-number" disabled>\n                                    <span class="fas fa-minus"></span>\n                                </button>\n                            </span>\n                            <input type="text" id="btnQuantity" class="form-control" value="1">\n                            <span class="input-group-btn">\n                                <button type="button" id="plus" class="btn btn-default btn-number">\n                                    <span class="fas fa-plus"></span>\n                                </button>\n                            </span>\n                        </div>\n                        <div class="input-group mb-3">\n                            <label class="input-group-text" for="selectLenses">Lentilles</label>\n                            <select class="form-select" id="selectLenses">\n                                <option selected>Choisir...</option>\n                                ${t.lenses.map((t=>`<option>${t}</option>`)).join("")}\n                            </select>\n                        </div>\n                        <button class="btn btn-primary btn-md" id="addProduct">Ajouter au panier</button>\n                    </div>\n                </div>\n            </div>\n            `}btnQuantity(){var t=document.getElementById("btnQuantity"),e=document.getElementById("minus"),n=document.getElementById("plus");function s(){t.value>1?e.removeAttribute("disabled"):t.value<2&&e.setAttribute("disabled",""),t.value>9?n.setAttribute("disabled",""):t.value<10&&n.removeAttribute("disabled")}n.addEventListener("click",(async()=>{t.value++,s()})),e.addEventListener("click",(async()=>{t.value--,s()}))}append(t,e={index:!1,product:!1}){const n=e.index?"col-sm-6":"col",a=(0,s.l)("div",{class:n});if(e.index)var r=this.indexPage(t);else if(e.product)r=this.productPage(t);a.innerHTML=r,this.selector().appendChild(a),e.product&&this.btnQuantity()}}},138:(t,e,n)=>{var s=n(956),a=n(176),r=n(773);const d=a.v.API_URL,i=new s.r(d,"application/json"),c=new r.Z;!async function(){try{(await i.load()).map((t=>c.append(t,{index:!0})))}catch(t){console.error(t)}}()},956:(t,e,n)=>{n.d(e,{r:()=>s});class s extends class{constructor(t={}){this._baseURL=t.baseURL||"",this._headers=t.headers||{}}async _fetchJSON(t,e={}){const n=await fetch(this._baseURL+t,{...e,headers:this._headers});if(!n.ok)throw new Error(n.statusText);if(!1!==e.parseResponse&&204!==n.status)return n.json()}setHeader(t,e){return this._headers[t]=e,this}getHeader(t){return this._headers[t]}get(t,e={}){return this._fetchJSON(t,{...e,method:"GET"})}post(t,e,n={}){return this._fetchJSON(t,{...n,body:e?JSON.stringify(e):void 0,method:"POST"})}}{constructor(t,e){super({baseURL:t,headers:{Accept:e,"Content-Type":e}})}load(){return this.get("/")}loadById(t){return this.get(`/${t}`)}send(t){return this.post("/order",t)}}},880:(t,e,n)=>{function s(t){var e=t/100+".00";return Intl.NumberFormat("fr-FR",{style:"currency",currency:"EUR"}).format(e)}n.d(e,{Y:()=>s})}},t=>{var e;e=138,t(t.s=e)}]);