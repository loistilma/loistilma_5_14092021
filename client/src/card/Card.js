import { CreateNode } from "../utils/dom"
import { numberToEUR } from "../utils/format"

class IndexCard extends CreateNode {
    inner(product) {
        let node = 
            `
            <a class="reset-a" href="/produit.html?id=${product._id}">
                <div class="card mb-4 border-0">
                    <img src="${product.imageUrl}" class="img-fluid" alt="Aperçu de la camera ${product.name}">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <div>
                                <h2 class="card-title my-4">${product.name}</h2>
                            </div>
                            <div>
                                <p class="my-4 card-text btn btn-primary rounded-pill">${numberToEUR(product.price)}</p>
                            </div>
                        </div>                            
                        <p class="card-text mb-4">${product.description}</p>
                    </div>
                </div>
            </a>
            `
        return node
    }

    create(product) {
        return this.createNode(this.inner(product))
    }

}

class ProductCard extends CreateNode {

    inner(product) {
        const node = 
            `
            <div class="card mb-4 border-0">
                <div class="row g-0">
                    <div class="col-sm-4">
                        <img src="${product.imageUrl}" class="img-fluid" alt="Aperçu de la camera ${product.name}">
                    </div>
                    <div class="col-sm-8">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                            <div>
                                <h2 class="card-title my-4">${product.name}</h2>
                            </div>
                            <div>
                                <p class="my-4 card-text btn btn-primary rounded-pill">${numberToEUR(product.price)}</p>
                            </div>
                        </div>                            
                        <p class="card-text mb-4">${product.description}</p>
                        <div class="input-group mb-3">
                            <label for="btnQuantity" class="input-group-text">Quantité</label>
                            <span class="input-group-btn">
                                <button type="button" id="minus" class="btn btn-default btn-number" disabled>
                                    <span class="fas fa-minus"></span>
                                </button>
                            </span>
                            <input type="text" id="btnQuantity" class="form-control" value="1">
                            <span class="input-group-btn">
                                <button type="button" id="plus" class="btn btn-default btn-number">
                                    <span class="fas fa-plus"></span>
                                </button>
                            </span>
                        </div>
                        <div class="input-group mb-3">
                            <label class="input-group-text" for="selectLenses">Lentilles</label>
                            <select class="form-select" id="selectLenses">
                                <option selected>Choisir...</option>
                                ${product.lenses.map(item => `<option>${item}</option>`).join('')}
                            </select>
                        </div>
                        <button class="btn btn-primary btn-md" id="addProduct">Ajouter au panier</button>
                    </div>
                </div>
            </div>
            `
        return node
    }

    btnQuantity(){

        var count = document.getElementById('btnQuantity')
        var minus = document.getElementById('minus')
        var plus = document.getElementById('plus')
        plus.addEventListener("click", () => {
                count.value ++
                limit() 
        })
        minus.addEventListener("click", () => {    
                count.value --
                limit()
        })

        function limit(){
            count.value >= 10 ? plus.setAttribute("disabled", '') : plus.removeAttribute("disabled")
            count.value <= 1 ? minus.setAttribute("disabled", '') : minus.removeAttribute("disabled")
        }
    }

    create(product) {
        this.createNode(this.inner(product))
        this.btnQuantity()
    }

}

export { IndexCard, ProductCard }