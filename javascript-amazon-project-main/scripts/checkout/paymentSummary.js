import { cart, calculateTotal } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { convertMoney } from "../utils/money.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";

export function renderPaymentSummary() {
    const totalItems = calculateTotal()
    let productPrice = 0
    let shippingPrice = 0


    cart.forEach(cartItem => {

        const product = getProduct(cartItem.productId)
        productPrice += (product.priceCents) * cartItem.quantity
        const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId)
        shippingPrice += Number(deliveryOption.priceCents)
    })

    const totalBeforeTax = productPrice + shippingPrice

    const totalTax = totalBeforeTax * 0.1

    const total = convertMoney(totalBeforeTax + totalTax)
    // console.log(total)

    const paymentHtml = `
        <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (${totalItems}):</div>
            <div class="payment-summary-money">$${convertMoney(productPrice)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${convertMoney(shippingPrice)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${convertMoney(totalBeforeTax)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${convertMoney(totalTax)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${total}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
    `
    const paymentSummary = document.querySelector('.js-payment-summary')
    paymentSummary.innerHTML = paymentHtml

}