"use strict";(self.webpackChunkorinoco_frontend=self.webpackChunkorinoco_frontend||[]).push([[18],{176:(t,e,n)=>{n.d(e,{v:()=>a});const a={API_URL:"http://localhost:3000/api/cameras"}},773:(t,e,n)=>{n.d(e,{Z:()=>r});var a=n(558),s=n(880);class r{selector(){return document.querySelector("#cards > .container > .row")}indexPage(t){return`\n            <a class="reset-a" href="/produit.html?id=${t._id}">\n                <div class="card my-2 rounded border-0">\n                    <img src="${t.imageUrl}" class="img-fluid" alt="Aperçu de la camera ${t.name}">\n                    <div class="card-body rounded">\n                        <div class="d-flex justify-content-between">\n                            <div>\n                                <h2 class="card-title my-4">${t.name}</h2>\n                            </div>\n                            <div>\n                                <p class="my-4 card-text btn btn-primary rounded-pill">${(0,s.Y)(t.price)}</p>\n                            </div>\n                        </div>                            \n                        <p class="card-text mb-4">${t.description}</p>\n                    </div>\n                </div>\n            </a>\n            `}productPage(t){return`\n            <div class="card my-2 rounded border-0">\n                <div class="row g-0">\n                    <div class="col-sm-4">\n                        <img src="${t.imageUrl}" class="img-fluid" alt="Aperçu de la camera ${t.name}">\n                    </div>\n                    <div class="col-sm-8">\n                        <div class="card-body rounded">\n                            <div class="d-flex justify-content-between">\n                            <div>\n                                <h2 class="card-title my-4">${t.name}</h2>\n                            </div>\n                            <div>\n                                <p class="my-4 card-text btn btn-primary rounded-pill">${(0,s.Y)(t.price)}</p>\n                            </div>\n                        </div>                            \n                        <p class="card-text mb-4">${t.description}</p>\n                        <div class="input-group mb-3">\n                            <label for="btnQuantity" class="input-group-text">Quantité</label>\n                            <span class="input-group-btn">\n                                <button type="button" id="minus" class="btn btn-default btn-number" disabled>\n                                    <span class="fas fa-minus"></span>\n                                </button>\n                            </span>\n                            <input type="text" id="btnQuantity" class="form-control" value="1">\n                            <span class="input-group-btn">\n                                <button type="button" id="plus" class="btn btn-default btn-number">\n                                    <span class="fas fa-plus"></span>\n                                </button>\n                            </span>\n                        </div>\n                        <div class="input-group mb-3">\n                            <label class="input-group-text" for="selectLenses">Lentilles</label>\n                            <select class="form-select" id="selectLenses">\n                                <option selected>Choisir...</option>\n                                ${t.lenses.map((t=>`<option>${t}</option>`)).join("")}\n                            </select>\n                        </div>\n                        <button class="btn btn-primary btn-md" id="addProduct">Ajouter au panier</button>\n                    </div>\n                </div>\n            </div>\n            `}btnQuantity(){var t=document.getElementById("btnQuantity"),e=document.getElementById("minus"),n=document.getElementById("plus");function a(){t.value>1?e.removeAttribute("disabled"):t.value<2&&e.setAttribute("disabled",""),t.value>9?n.setAttribute("disabled",""):t.value<10&&n.removeAttribute("disabled")}n.addEventListener("click",(async()=>{t.value++,a()})),e.addEventListener("click",(async()=>{t.value--,a()}))}append(t,e={index:!1,product:!1}){const n=e.index?"col-sm-6":"col",s=(0,a.l)("div",{class:n});if(e.index)var r=this.indexPage(t);else if(e.product)r=this.productPage(t);s.innerHTML=r,this.selector().appendChild(s),e.product&&this.btnQuantity()}}},64:(t,e,n)=>{n.d(e,{wv:()=>s,s9:()=>r});n(102);function a(t={},e,n){if(t.el)document.querySelector(t.el).addEventListener(e,n);else if(t.els){document.querySelectorAll(t.els).forEach((t=>{t.addEventListener(e,n)}))}}function s(t,e,n){a({el:"#addProduct"},"click",(()=>{t.add(e)}))}function r(t,e,n){a({els:"button[data-id]"},"click",(n=>{let a=n.target.dataset.id;console.log(a),t.del(a),e.create()})),a({els:"[id^=cartQuantity]"},"change",(a=>{let s=a.target.dataset.id;t.updateQuantity(s,a.target),e.create(),n()})),a({el:"#clearCart"},"click",(()=>{t.delAll(),e.create(),n()}))}},102:(t,e,n)=>{n.d(e,{F:()=>s});const a=new(n(274).A)("cart");function s(){const t=document.getElementById("cart-nb");void 0===a.count()?t.innerHTML="":t.innerHTML=a.count()}},628:(t,e,n)=>{var a=n(956),s=n(176),r=n(773),i=n(64),d=n(274),c=n(102);const l=s.v.API_URL,o=new a.r(l,"application/json"),u=new d.A("cart"),p=new r.Z;!async function(){const t=window.location.href,e=new URL(t).searchParams.get("id");try{const t=await o.loadById(e);p.append(t,{product:!0}),(0,i.wv)(u,t,(0,c.F)())}catch(t){console.error(t)}}()},956:(t,e,n)=>{n.d(e,{r:()=>a});class a extends class{constructor(t={}){this._baseURL=t.baseURL||"",this._headers=t.headers||{}}async _fetchJSON(t,e={}){const n=await fetch(this._baseURL+t,{...e,headers:this._headers});if(!n.ok)throw new Error(n.statusText);if(!1!==e.parseResponse&&204!==n.status)return n.json()}setHeader(t,e){return this._headers[t]=e,this}getHeader(t){return this._headers[t]}get(t,e={}){return this._fetchJSON(t,{...e,method:"GET"})}post(t,e,n={}){return this._fetchJSON(t,{...n,body:e?JSON.stringify(e):void 0,method:"POST"})}}{constructor(t,e){super({baseURL:t,headers:{Accept:e,"Content-Type":e}})}load(){return this.get("/")}loadById(t){return this.get(`/${t}`)}send(t){return this.post("/order",t)}}},880:(t,e,n)=>{function a(t){var e=t/100+".00";return Intl.NumberFormat("fr-FR",{style:"currency",currency:"EUR"}).format(e)}n.d(e,{Y:()=>a})},274:(t,e,n)=>{n.d(e,{A:()=>r,T:()=>d});var a=n(9);class s{constructor(t){this.name=t||""}check(){if(null===this.get())var t={data:[]};else t=this.get();return t}set(t){return localStorage.setItem(this.name,JSON.stringify(t))}get(){return JSON.parse(localStorage.getItem(this.name))}updateQuantity(t,e){var n=this.get(),a=n.data.find((e=>e._id===t)),s=parseInt(e.value);a&&(a.quantity=parseInt(s)),this.set(n)}del(t){var e=this.get().data.findIndex((e=>e._id===t)),n=this.get();n.data.splice(e,1),this.set(n)}delAll(){localStorage.removeItem(this.name)}}class r extends s{add(t){this.set(this.check());var e=this.get(),n=e.data.find((e=>e._id===t._id));t.quantity=parseInt(document.getElementById("btnQuantity").value),n?n.quantity>=10?(0,a.j)(".card-body","Il reste 10 produits en stock","danger",!0):(n.quantity+=parseInt(t.quantity),(0,a.j)(".card-body","Le produit a été ajouter au panier","success",!0)):(e.data.push({name:t.name,imageUrl:t.imageUrl,_id:t._id,quantity:t.quantity,price:t.price}),(0,a.j)(".card-body","Le produit a été ajouter au panier","success",!0)),this.set(e)}totalPrice(){let t=0;return this.get().data.forEach((e=>{t+=e.price*e.quantity})),t}count(){var t;if(null!==this.get()&&0!==this.get().data){let e=this.get().data;return t=0,e.forEach((e=>{t+=e.quantity})),console.log(t),t}t=null}}const i=new r("cart");class d extends s{add(t){this.set(this.check());var e=this.get(),n=new Date;e.data.push({contact:t.contact,orderId:t.orderId,products:t.products,date:n,totalPrice:this.totalPrice(i.get().data)}),this.set(e)}totalPrice(){let t=0;return this.get().data.forEach((e=>{t+=e.price*e.quantity})),t}}}},t=>{var e;e=628,t(t.s=e)}]);