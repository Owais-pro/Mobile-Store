const phones = [
    {
        brand: 'Samsung',
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000
    },
    {
        brand: 'Xiomi',
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel',
        price: 15000
    },
    {
        brand: 'Infinix',
        model: 'z10',
        ram: 2,
        rom: 16,
        camera: '5 megapixel',
        price: 15000
    },
    {
        brand: 'Tecno',
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel',
        price: 15000
    },
    {
        brand: 'Iphone',
        model: '14',
        ram: 4,
        rom: 1024,
        camera: '30 megapixel',
        price: 15000
    },
    {
        brand: 'Oppo',
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000
    },
    {
        brand: 'Vivo',
        model: 'y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        price: 15000
    },
    {
        brand: 'Samsung',
        model: 's50',
        ram: 50,
        rom: 1024,
        camera: '60 megapixel',
        price: 300000
    },

];

const cartArr = [];
const div = document.querySelector('#display');
const message = document.querySelector('#message')
for(let i=0; i<phones.length; i++)
    {
        div.innerHTML += `
        <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
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
                cartArr.push(phones[index])
                phones[index].Quantity = 1;
            }  
           
            message.style.display = 'block';

    };
   
    
    