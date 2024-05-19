const phones = [
    {
        brand: 'Samsung',
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000,
        image: "s20.webp"
    },
    {
        brand: 'Xiomi',
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel',
        price: 15000,
        image: "xiaomi.webp"
    },
    {
        brand: 'Infinix',
        model: 'z10',
        ram: 2,
        rom: 16,
        camera: '5 megapixel',
        price: 15000,
        image:"infinix.webp"

    },
    {
        brand: 'Tecno',
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel',
        price: 15000,
        image:"tecno.webp"

    },
    {
        brand: 'Iphone',
        model: '14',
        ram: 4,
        rom: 1024,
        camera: '30 megapixel',
        price: 15000,
        image:"apple-iphone-14.webp"

    },
    {
        brand: 'Oppo',
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000,
        image:"oppo-f11.webp"

    },
    {
        brand: 'Vivo',
        model: 'y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        price: 15000,
        image:"vivo-y20.webp"

    },
    {
        brand: 'Samsung',
        model: 'A34',
        ram: 16,
        rom: 1024,
        camera: '60 megapixel',
        price: 300000,
        image:"samsung-galaxy-a34.webp"
    },

];

let cartArr ;
let items = JSON.parse(localStorage.getItem('cartitem'));
if(items === null)
    {
        cartArr = [];
    }
    else{
        cartArr = items;
    }


const div = document.querySelector('#display');
const message = document.querySelector('#message');
const cartItem = document.querySelector('#cart-item');
for(let i=0; i<phones.length; i++)
    {
        div.innerHTML += `
        <div class="card" style="width: 18rem;">
  <img src="${phones[i].image}" class="card-img-top" alt="..." id ="imageset">
  <div class="card-body" id="cardContent">
    <h4 class="card-title">${phones[i].brand + ' ' + phones[i].model}</h4>
    <h6 class="card-title">RAM: ${phones[i].ram}</h6>
    <h6 class="card-title">ROM: ${phones[i].rom}</h6>
    <h5 class="card-title">Price: ${phones[i].price}</h5>
    <a href="#" onclick="AddCart(${i})" class="btn btn-primary">Add To Cart</a>
  </div>
</div>
        `

    }
    function AddCart(index){
        
        if(cartArr.includes(phones[index]))
            {
                phones[index].Quantity += 1;
            }
            else{
                
                phones[index].Quantity = 1;
                cartArr.push(phones[index])
            }  
           
            message.style.display = 'block';
            console.log(cartArr[index]);
           const abc = localStorage.setItem('cartitem' , JSON.stringify(cartArr));

    };

   function gotoCart(){
    window.location = 'cart.html';

   };
    
    