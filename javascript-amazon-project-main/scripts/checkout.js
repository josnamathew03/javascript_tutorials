import { cart, addToCart, removeItem, updateQuantity, updateDeliveryOptions } from '../data/cart.js'
import { products } from '../data/products.js'
import { convertMoney } from './utils/money.js'
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js'
import { deliveryOptions } from '../data/deliveryOptions.js'


function renderOrderSummary() {


  let checkouthtml = ''

  // calculateTotal()

  // hello()

  // const today = dayjs()
  // const delivery = today.add(7,'days')
  // console.log(delivery.format('dddd, MMMM, D'))





  cart.forEach(cartItem => {
    const proId = cartItem.productId


    let deliveryOption
    deliveryOptions.forEach((delivery) => {
      if (delivery.id === cartItem.deliveryOptionId) {
        deliveryOption = delivery

      }
    })

    const today = dayjs();
    const deliveryDate = today.add(
      deliveryOption.deliveryDays,
      'days'
    )
    const dateString = deliveryDate.format('dddd, MMMM, D')


    products.forEach(product => {
      if (product.id === proId) {
        checkouthtml += `  <div class="cart-item-container js-cart-container-${product.id}">
            <div class="delivery-date">
              Delivery date: ${dateString}
            </div>
             
            <div class="cart-item-details-grid">
              <img class="product-image"
                src=${product.image}>

              <div class="cart-item-details">
                <div class="product-name">
                  ${product.name}
                </div>
                <div class="product-price">
                  $${convertMoney(product.priceCents)}

                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label js-quantity-label-${product.id}">1</span>
                  </span>
                  <span class="update-quantity-link link-primary js-update-link" data-product-id = ${product.id}>
                    Update
                  </span>
                  <input class="quantity-input">
                  <span class="save-quantity-link link-primary" data-product-id=${product.id}>save</span>
                  <span class="delete-quantity-link link-primary js-delete-link" data-product-id=${product.id}>
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">           
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                ${deliveryOptionsHtml(product.id, cartItem)}
                
             
              </div>
            </div>
          </div>`
      }
    });




  });




  const orderSummary = document.querySelector('.order-summary')
  orderSummary.innerHTML = checkouthtml


  const deleteLink = document.querySelectorAll('.js-delete-link')
  deleteLink.forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId
      // console.log(productId)
      removeItem(productId)
      console.log(cart)

      const container = document.querySelector(`.js-cart-container-${productId}`)
      container.remove()


    })

  })


  const updateLink = document.querySelectorAll('.js-update-link')
  updateLink.forEach((link) => {

    link.addEventListener('click', () => {
      const productId = link.dataset.productId
      // console.log(productId)
      const container = document.querySelector(`.js-cart-container-${productId}`)
      console.log(container)
      container.classList.add('is-editing-quantity')
      link.classList.add('is-updating')

      document.querySelector(` .js-quantity-label-${productId}`).classList.add('is-updating')
    })

  })


  const saveLink = document.querySelectorAll('.save-quantity-link')
  saveLink.forEach((link) => {

    link.addEventListener('click', () => {
      const productId = link.dataset.productId
      // console.log(productId)
      const container = document.querySelector(`.js-cart-container-${productId}`)
      // console.log(container)
      container.classList.remove('is-editing-quantity')
      link.classList.remove('is-updating')

      const quantityLabel = document.querySelector(` .js-quantity-label-${productId}`)
      quantityLabel.classList.remove('is-updating')

      const inputQuantity = document.querySelector(".quantity-input")



      updateQuantity(productId, newQuantity)


    })

  })

  function deliveryOptionsHtml(productId, cartItem) {
    let deliveryhtml = ''

    deliveryOptions.forEach((delivery) => {


      const priceString = delivery.priceCents === 0 ? 'FREE' : `$${convertMoney(delivery.priceCents)} -`

      const today = dayjs();
      const deliveryDate = today.add(
        delivery.deliveryDays,
        'days'
      )
      const dateString = deliveryDate.format('dddd, MMMM, D')

      const isChecked = delivery.id === cartItem.deliveryOptionId

      deliveryhtml += `   <div class="delivery-option js-delivery-option" data-product-id = ${productId} data-delivery-option-id = ${delivery.id}>
                  <input type="radio"
                    ${isChecked ? 'checked' : ''}
                    class="delivery-option-input"
                    name=${productId}>
                  <div>
                    <div class="delivery-option-date">
                      ${dateString}
                    </div>
                    <div class="delivery-option-price">
                      ${priceString} - Shipping
                    </div>
                  </div>
                </div>`
    })
    return deliveryhtml
  }


  const deliveryInput = document.querySelectorAll('.js-delivery-option')
  deliveryInput.forEach((radio) => {
    radio.addEventListener('click', () => {
      const { productId, deliveryOptionId } = radio.dataset //shorthand property
      console.log(deliveryOptionId)

      updateDeliveryOptions(productId, deliveryOptionId)
      renderOrderSummary()
      // const deliveryOptionDiv = radio.closest('.delivery-option');

    })
  })


}

renderOrderSummary()

