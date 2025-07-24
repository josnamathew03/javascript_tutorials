import { cart,addToCart } from '../data/cart.js'
import { products } from '../data/products.js'
import {convertMoney} from './utils/money.js'

let productshtml = ''

// calculateTotal()

products.forEach(product => {
    productshtml += `
      <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src=${product.image}>
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}                                                   
            </div>                                                               
          </div>

          <div class="product-price">
            $${convertMoney(product.priceCents)}
          </div>                  
            
          <div class="product-quantity-container ">
            <select class="js-quantity-selector-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart js-added-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id ='${product.id}'>
            Add to Cart
          </button>        
        </div>
    `
});

const proGrid = document.querySelector('.js-product-grid')
proGrid.innerHTML = productshtml

const addBtn = document.querySelectorAll('.js-add-to-cart')
let isActive = null



function addedMessage(productId){
    const added = document.querySelector(`.js-added-${productId}`)
        added.classList.add('added')
        if (isActive) {
            clearTimeout(isActive)
        }

        isActive = setTimeout(() => {
            added.classList.remove('added')
        }, 2000
        )
     
}

function cartShowing(){
       let cartQuantity = 0
        cart.forEach((cartItem) => {
            cartQuantity += cartItem.quantity
        })
        const cartQ = document.querySelector('.js-cart-quantity')
        cartQ.innerHTML = cartQuantity

}

addBtn.forEach((button) => {
    button.addEventListener('click', () => {
        const { productId } = button.dataset

        addedMessage(productId)

        addToCart(productId)

        cartShowing()

    })

})




