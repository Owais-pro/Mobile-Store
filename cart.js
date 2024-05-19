const Cart_Items = JSON.parse(localStorage.getItem('cartitem'));
console.log(Cart_Items);

const div = document.querySelector('#cart-item');

function renderItems(){
    if(Cart_Items != null  &&  Cart_Items.length > 0){
        for( let i=0; i<Cart_Items.length; i++ ){
            div.innerHTML += `
            <div class="card" style="width: 18rem;">
  <img src="${Cart_Items[i].image}" class="card-img-top" alt="...">
  <hr>
  <div class="card-body">
    <h4 class="card-title">${Cart_Items[i].brand + ' ' + Cart_Items[i].model}</h4>
    <h6 class="card-title">RAM: ${Cart_Items[i].ram}</h6>
    <h6 class="card-title">ROM: ${Cart_Items[i].rom}</h6>
    <h6 class="card-title">Quantity: ${Cart_Items[i].Quantity}</h6>
    <h5 class="card-title">Price: ${Cart_Items[i].price}</h5>
  </div>
</div>`
        }

    }
    else{
        div.innerHTML +=`
        <h3 class ="text-center">No Item Found.....</h3>`
    }
}
renderItems();