/*navbar burger*/
const navbar = document.querySelector(".navbar")
const hamburger = document.querySelector('.hamburger');
const shoppingCart = document.querySelector(".shopping-cart")

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

/* header grid*/

const four = document.querySelector(".four");
const overlayFour = four.querySelector(".overlayFour");

four.addEventListener("mouseover", function () {
  overlayFour.style.opacity = 1;
});
four.addEventListener("mouseout", function () {
  overlayFour.style.opacity = 0;
});

const two = document.querySelector(".two");
const overlayTwo = two.querySelector(".overlayTwo");

two.addEventListener("mouseover", function () {
  overlayTwo.style.opacity = 1;
});
two.addEventListener("mouseout", function () {
  overlayTwo.style.opacity = 0;
});

const five = document.querySelector(".five");
const overlayFive = five.querySelector(".overlayFive");

five.addEventListener("mouseover", function () {
  overlayFive.style.opacity = 1;
});
five.addEventListener("mouseout", function () {
  overlayFive.style.opacity = 0;
});
/* end of header grid*/


/*horizontal scroll*/

document.addEventListener("DOMContentLoaded", () => {
  const productsContainer2 = document.querySelector(".con-2-pics")
  const prevButton = document.querySelector(".prev")
  const nextButton = document.querySelector(".next")

  let productWidth = document.querySelector(".con-2-pic").offsetWidth;
  let productsVisible = 2;
  let productsTotal = document.querySelectorAll(".con-2-pic").length;
  let productsMove = productsTotal - productsVisible;
  let productIndex = 0;

  prevButton.addEventListener("click", ()=>{
      if(productIndex>0){
          productIndex--;
          productsContainer2.style.transform = `translateX(-${productIndex*productWidth}px)`;
      }
  });

  nextButton.addEventListener("click",()=>{
      if(productIndex <productsMove){
          productIndex++;
          productsContainer2.style.transform = `translateX(-${productIndex*productWidth}px)`;
      }
  });
});

/*end of horizontal scroll*/

/* flowers animation con-4*/
//first flower
const firstFlower = document.querySelector(".con-4-pic1");
const overlayFirstFlower = document.querySelector(".overlayFlOne");

firstFlower.addEventListener("mouseover", function () {
  overlayFirstFlower.style.opacity = 1;
});

firstFlower.addEventListener("mouseout", function () {
  overlayFirstFlower.style.opacity = 0;
});
//second flower
const secondFlower = document.querySelector(".con-4-pic2");
const overlaySecondFlower = document.querySelector(".overlayFlTwo");

secondFlower.addEventListener("mouseover", function () {
  overlaySecondFlower.style.opacity = 1;
});

secondFlower.addEventListener("mouseout", function () {
  overlaySecondFlower.style.opacity = 0;
});
//third flower
const thirdFlower = document.querySelector(".con-4-pic3");
const overlayThirdFlower = document.querySelector(".overlayFlThree");

thirdFlower.addEventListener("mouseover", function () {
  overlayThirdFlower.style.opacity = 1;
});

thirdFlower.addEventListener("mouseout", function () {
  overlayThirdFlower.style.opacity = 0;
});
//fourth flower
const fourFlower = document.querySelector(".con-4-pic4");
const overlayFourFlower = document.querySelector(".overlayFlFour");

fourFlower.addEventListener("mouseover", function () {
  overlayFourFlower.style.opacity = 1;
});

fourFlower.addEventListener("mouseout", function () {
  overlayFourFlower.style.opacity = 0;
});
/* end of flowers animation con-4*/


/*basket */

let con2Pics = document.getElementById("con-2-pics");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateCon2Pics = () => {
  return (con2Pics.innerHTML = con2PicsItemsData
    .map((x) => {
      let { id, name, price, desc, img } = x;
      let search = basket.find((x)=>x.id === id) || [];
      return `

<div id="${id}" class="con-2-pic con-2-pic1">
    <img src="${img}" alt="">
    <div class="con-2-pic1-name pic1">
        <p>${name}</p>
        <p>$${price}</p>
    </div>
    <div class="con-2-pic1-info picinfo1">
        <div class="con-2-pic1-info-desc">
            <p>${desc}</p>
        </div>
        <button onclick="increment(${id})" class="add-to-basket" data-product-id="1" type="button">Buy</button>
    </div>
    </div>
`;
    })
    .join(""));
};

generateCon2Pics();

let increment = (id) => {
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

  

  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
let search = basket.find((x) => (x.id === id));
let cartAmount = (document.querySelector(".cart-amount").innerHTML = basket
    .map((x) => x.item)
    .reduce((x, y) => x + y, 0));
};

update();

/*end of basket */
