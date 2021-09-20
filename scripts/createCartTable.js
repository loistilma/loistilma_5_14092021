function getCart() {
    var cart = localStorage.getItem('cart');
    //console.log(cartItems)    
    return cart;
}

function createCartTable(cart){
    cart = JSON.parse(getCart())
    var table = createTag('table', {class: 'table'})
    var thead = createTag('thead')
    var trowh = createTag('tr')
    table.appendChild(thead)
    thead.appendChild(trowh)
    trowh.innerHTML = 
        `
        <th scope="col">#</th>
        <th scope="col">Article</th>
        <th scope="col">Quantité</th>
        <th scope="col">Prix</th>        
        `
    document.getElementById('cart').appendChild(table)
    var tbody = createTag('tbody')
    var trowb = createTag('tr')
    tbody.appendChild(trowb)
    trowb.innerHTML = 
        `
        <th scope="row">1</th>
        <td>${cart.products.name}</td>
        <td>X</td>
        <td>${numberToEUR(cart.products.price)}</td>      
        `
    table.appendChild(tbody)

    console.log(cart)
}
/*
<table class="table">
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">Article</th>
    <th scope="col">Quantité</th>
    <th scope="col">Prix</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th scope="row">1</th>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
  </tr>
</tbody>
</table>
*/
window.onload = () => {
    createCartTable()
}