/*navbar burger*/
const navbar = document.querySelector(".navbar")
const hamburger = document.querySelector('.hamburger');


hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  shoppingCart.classList.toggle('appear')
  navbar.classList.toggle('widen')
  
});

function toggleHamburger(){
  let menuLinks = document.querySelector('.menu-links');
  if (menuLinks.style.display === "flex"){
    menuLinks.style.display = "none"
  } else{
    menuLinks.style.display = "flex"
  }
}
/*end of navbar burger*/

/*main*/

let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart");


let basket = JSON.parse(localStorage.getItem("data")) || [];
let update = (id) => {
  let search = basket.find((x) => (x.id === id));
  let cartAmount = (document.querySelector(".cart-amount").innerHTML = basket
    .map((x) => x.item)
    .reduce((x, y) => x + y, 0));
};

update();

let combinedData = [...con2PicsItemsData, ...con2PicsItemsDataLive, ...con2PicsItemsDataAcc];

let generateCartItems = () => {
  if (basket.length !== 0) {
    return (shoppingCart.innerHTML = basket.map((x)=>{
      console.log(x)
 let {id,item} = x;
 let search = combinedData.find((y)=>y.id === id) || [];
      return `
      <div class="cart-item">

      <img src=${search.img} alt="" class="img-main"/>
      
      <div class="details">

      
      <div class="name-total">
      <p>${search.name}<p/>
      <p class="cart-item-price">$ ${search.price}</p>
      
      </div>

      <div class="buttons">
            <i onclick="decrementFinal(${id})" class="bi bi-dash-lg"></i>
            <div id=${id} class="quantity">${item}</div>
            <i onclick="incrementFinal(${id})" class="bi bi-plus-lg"></i>
      </div>
      <div class="total-item-price">
      $ ${item * search.price}</div>
      </div>
      <i onclick="removeItem(${id})"class="bi bi-trash3"></i>
      </div>        
      `
    }).join(""));

  } else {
    shoppingCart.innerHTML = ``;
    label.innerHTML = `
    <div class="clear-all-section">
      <h2>Cart is Empty</h2>
      <a href="malva.html">
      <button class="homeButton">Back to Home</button>
      </a>
      </div>
      `;
  }
};
generateCartItems();


let incrementFinal = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  generateCartItems()
  updateFinal(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};

/*used to decrease the selected product item quantity by 1 */

let decrementFinal = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }

  updateFinal(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  generateCartItems()
  localStorage.setItem("data", JSON.stringify(basket));
};

/*To update the digits of picked items on each item card*/

let updateFinal = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calculation();
  totalAmount();
};

/* To calculate total amount of selected Items */

let calculation = () => {
  let cartIcon = document.querySelector(".cart-amount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

let removeItem = (id)=>{
let selectedItem = id;
basket = basket.filter((x)=>x.id !== selectedItem.id);
generateCartItems();
totalAmount();
calculation();
localStorage.setItem("data", JSON.stringify(basket));
}

let clearCart = ()=>{
basket=[];
generateCartItems();
calculation();
localStorage.setItem("data", JSON.stringify(basket));
}

let totalAmount = ()=>{
  if(basket.length !== 0){
    let amount = basket.map((x)=>{
      let {item,id} = x;
      let search = combinedData.find((y)=>y.id === id) || [];
   
      return item * search.price;

    }).reduce((x,y)=>x+y,0)
    label.innerHTML = `
    <div class="totalBill">
    <h2>Total Bill: $ ${amount}</h2>
    <div class="totalButtons">
    <button class="checkout">Checkout</button>
    <button onclick="clearCart()"class="removeAll">Remove All</button>
    </div>
    </div>`
  }
  else return
}

totalAmount()