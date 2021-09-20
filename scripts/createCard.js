function lenseSelect(data, querySelector){
    var label = createTag('label', {for: 'lense-select'})
    var select = createTag('select', {name: 'lenses', id: 'lense-select'})
    label.appendChild(select)
    select.innerHTML = data.map(item => `<option>${item}</option>`).join('')

    document.querySelector(querySelector).appendChild(label);
    //console.log(label);
}

function orderBtn(querySelector){
    var button = createTag('button', {class: 'btn btn-primary btn-md', id: 'addItem'})
    btnText = document.createTextNode('Ajouter au panier')
    button.appendChild(btnText)
    document.querySelector(querySelector).appendChild(button)
}

function createCard(data){
    var cardContainer = document.createElement('div');
    cardContainer.className = 'col-sm-6';
    cardContainer.innerHTML = 
        `
        <div class="card my-2">
            <img src="${data.imageUrl}" class="img-fluid rounded-start" alt="${data.name}">
            <div class="card-body">
                <h2 class="card-title">${data.name}</h2>
                <p class="card-text">${data.description}</p>
                <p class="card-text">Prix: ${numberToEUR(data.price)}</p>
            </div>
            <a href="/produit.html?id=${data._id}">
                <span class="card-url"></span>
            </a>
        </div>
        `
    document.querySelector('#cards > .container > .row').appendChild(cardContainer)

    if (idParams){
        lenseSelect(data.lenses, ".card-body")
        orderBtn(".card-body")
        removeElement(".card a")
        var cartItem = getProductArray(data)
        addToCart(cartItem)

    }
}

function getProductArray(data){
    var product = {}
    product = data
    return product
}