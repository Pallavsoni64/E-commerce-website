const cart = (image,price,title)=>{
    let cartBox = `<div class="cart">
    <h2> ${title}gey</h2>
    <img class="cartImage" src=${image} alt="">
   <h2 class="cartPrice"> Price: ${price}</h2>

</div>`
// console.log(data);
document.querySelector('.mainContainer2').insertAdjacentHTML('beforeend',cartBox)
}


async function getData() {
    const apiData = await fetch('https://fakestoreapi.com/products');
    const data = await apiData.json();
console.log(data);
    data.map((curData, index) => {
        let container = `<div class="product" value='${index}'>
        <div class="productColor">
            <span>Category : ${curData.category}</span>
            <span>Rating : ${curData.rating.rate}</span>
        </div>
        <img src=${curData.image} alt="">
        <div class="title listing">
          ${curData.title}
        </div>
        <div class="description listing">
           ${curData.description}
        </div>
        <div class="cost listing " >
            Cost : ${curData.price} $ 
        </div>
        
        <a class="headerItem btn1" onclick="${cart(curData.image,curData.price,curData.title)}" href="/cart.html" >Add to cart 🛒</a>
    </div>`
        document.querySelector('.mainContainer').insertAdjacentHTML('beforeend', container);
        
    });
   
}

getData();




window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        getData();

    }
})
