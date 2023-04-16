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
/*navbar burger*/

/*basket*/

let con2Pics = document.getElementById("con-2-pics");
let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateCon2Pics = () => {
  con2Pics.innerHTML = con2PicsItemsDataLive
    .map((x) => {
      let { id, name, price, desc, img,deskb } = x;
      let search = basket.find((x)=>x.id === id) || [];
      return `
        <div id="${id}" class="con-2-pic con-2-pic1 con-2-pic-pr">
            <div class="image-container">
              <img class="main-img" src="${img}" alt="">
              <div class="image-text">${deskb}</div>
            </div>
            <div class="con-2-pic1-name pic1">
                <p>${name}</p>
                <p>$${price}</p>
            </div>
            <div class="con-2-pic1-info picinfo1">
                <div class="con-2-pic1-info-desc">
                    <p class="read-more">Read More</p>
                </div>
                <button onclick="increment(${id})" class="add-to-basket" data-product-id="1" type="button">Buy</button>
            </div>
        </div>
      `;
    })
    .join("");

  const imageContainers = document.querySelectorAll('.image-container');
  const readMores = document.querySelectorAll('.read-more');

  readMores.forEach((readMore, index) => {
    readMore.addEventListener('click', function() {
      imageContainers[index].classList.toggle('flip');

      if (imageContainers[index].classList.contains('flip')) {
        imageContainers[index].querySelector('.image-text').style.display = 'block';
      } else {
        imageContainers[index].querySelector('.image-text').style.display = 'none';
      }
    });
  });
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