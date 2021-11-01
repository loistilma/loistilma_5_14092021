"use strict";(self.webpackChunkorinoco_frontend=self.webpackChunkorinoco_frontend||[]).push([[826],{773:(t,e,n)=>{n.d(e,{N:()=>i,I:()=>r});var s=n(558),a=n(880);class i extends s.gp{inner(t){return`\n            <a class="reset-a" href="/produit.html?id=${t._id}">\n                <div class="card mb-4 border-0">\n                    <img src="${t.imageUrl}" class="img-fluid" alt="Aperçu de la camera ${t.name}">\n                    <div class="card-body">\n                        <div class="d-flex justify-content-between">\n                            <div>\n                                <h2 class="card-title my-4">${t.name}</h2>\n                            </div>\n                            <div>\n                                <p class="my-4 card-text btn btn-primary rounded-pill">${(0,a.Y)(t.price)}</p>\n                            </div>\n                        </div>                            \n                        <p class="card-text mb-4">${t.description}</p>\n                    </div>\n                </div>\n            </a>\n            `}create(t){return this.createNode(this.inner(t))}}class r extends s.gp{inner(t){return`\n            <div class="card mb-4 border-0">\n                <div class="row g-0">\n                    <div class="col-sm-4">\n                        <img src="${t.imageUrl}" class="img-fluid" alt="Aperçu de la camera ${t.name}">\n                    </div>\n                    <div class="col-sm-8">\n                        <div class="card-body">\n                            <div class="d-flex justify-content-between">\n                            <div>\n                                <h2 class="card-title my-4">${t.name}</h2>\n                            </div>\n                            <div>\n                                <p class="my-4 card-text btn btn-primary rounded-pill">${(0,a.Y)(t.price)}</p>\n                            </div>\n                        </div>                            \n                        <p class="card-text mb-4">${t.description}</p>\n                        <div class="input-group mb-3">\n                            <label for="btnQuantity" class="input-group-text">Quantité</label>\n                            <span class="input-group-btn">\n                                <button type="button" id="minus" class="btn btn-default btn-number" disabled>\n                                    <span class="fas fa-minus"></span>\n                                </button>\n                            </span>\n                            <input type="text" id="btnQuantity" class="form-control" value="1">\n                            <span class="input-group-btn">\n                                <button type="button" id="plus" class="btn btn-default btn-number">\n                                    <span class="fas fa-plus"></span>\n                                </button>\n                            </span>\n                        </div>\n                        <div class="input-group mb-3">\n                            <label class="input-group-text" for="selectLenses">Lentilles</label>\n                            <select class="form-select" id="selectLenses">\n                                <option selected>Choisir...</option>\n                                ${t.lenses.map((t=>`<option>${t}</option>`)).join("")}\n                            </select>\n                        </div>\n                        <button class="btn btn-primary btn-md" id="addProduct">Ajouter au panier</button>\n                    </div>\n                </div>\n            </div>\n            `}btnQuantity(){var t=document.getElementById("btnQuantity"),e=document.getElementById("minus"),n=document.getElementById("plus");function s(){t.value>=10?n.setAttribute("disabled",""):n.removeAttribute("disabled"),t.value<=1?e.setAttribute("disabled",""):e.removeAttribute("disabled")}n.addEventListener("click",(()=>{t.value++,s()})),e.addEventListener("click",(()=>{t.value--,s()}))}create(t){this.createNode(this.inner(t)),this.btnQuantity()}}},102:(t,e,n)=>{n.d(e,{F:()=>a});var s=n(274);function a(){var t=document.getElementById("cart-nb");if(t&&0===s.N.count()||void 0===s.N.count())t.innerHTML="";else{let t=`\n            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">\n                ${s.N.count()}\n                <span class="visually-hidden">Articles du panier</span>\n            </span>\n            `;document.getElementById("cart-nb").innerHTML=t}}},138:(t,e,n)=>{var s=n(773),a=n(506),i=n(9),r=n(102);const d=new a._("http://localhost:3000");(0,r.F)(),async function(){try{const t=new s.N("div",{class:"col-sm-6"},"#cardSection");(await d.get("/api/cameras")).forEach((e=>t.create(e)))}catch(t){(0,i.j)("#main .container","Erreur lors du traitement des données","danger",!1),console.error(t)}}()},506:(t,e,n)=>{n.d(e,{_:()=>s});class s{constructor(t,e){this.baseURL=t,this.headers=e}async get(t){return(await fetch(this.baseURL+t,{method:"GET"})).json()}async post(t,e){return(await fetch(this.baseURL+t,{method:"POST",headers:this.headers,body:JSON.stringify(e)})).json()}}},880:(t,e,n)=>{function s(t){var e=t/100+".00";return Intl.NumberFormat("fr-FR",{style:"currency",currency:"EUR"}).format(e)}n.d(e,{Y:()=>s})},274:(t,e,n)=>{n.d(e,{N:()=>i,y:()=>r});var s=n(9);class a{constructor(t){this.name=t}init(){if(null===this.get())var t=[];else t=this.get();return t}set(t){return localStorage.setItem(this.name,JSON.stringify(t))}get(){return JSON.parse(localStorage.getItem(this.name))}find(t){return this.get().find((e=>e._id===t))}updateQuantity(t,e){var n=this.get(),s=n.find((e=>e._id===t)),a=parseInt(e.value);s&&(s.quantity=parseInt(a)),this.set(n)}del(t){var e=this.get().findIndex((e=>e._id===t)),n=this.get();n.splice(e,1),this.set(n)}delAll(){localStorage.removeItem(this.name)}totalPrice(){let t=0;return this.get().forEach((e=>{t+=e.price*e.quantity})),t}isEmpty(){if(null===this.get()||0===this.get().length)return!0}}const i=new class extends a{add(t){this.set(this.init());let e=this.get();var n=e.find((e=>e._id===t._id));t.quantity=parseInt(document.getElementById("btnQuantity").value),n?n.quantity>=10?(0,s.j)(".card-body","Il ne reste que 10 produits en stock","danger",!0):(n.quantity+=parseInt(t.quantity),(0,s.j)(".card-body","Le produit a été ajouter au panier","success",!0)):(e.push({name:t.name,imageUrl:t.imageUrl,_id:t._id,quantity:t.quantity,price:t.price}),(0,s.j)(".card-body","Le produit a été ajouter au panier","success",!0)),this.set(e)}count(){var t;if(null!==this.get()&&0!==this.get())return t=0,this.get().forEach((e=>{t+=e.quantity})),t;t=null}}("cart"),r=new class extends a{total(){let t=0;return i.get().forEach((e=>{t+=e.price*e.quantity})),t}add(t){this.set(this.init());let e=this.get(),n=new Date;e.push({contact:t.contact,orderId:t.orderId,products:t.products,date:n,totalPrice:this.total()}),this.set(e)}}("confirmation")}},t=>{var e;e=138,t(t.s=e)}]);