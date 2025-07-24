

const  cart = {
    
export let cart = JSON.parse(localStorage.getItem('cart'))
if (!cart) {
    cart = [
        { 
            productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            quantity: 1,
            deliveryOptionId: '1'
        },
        {
            productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
            quantity: 1,
            deliveryOptionId: '2'

        }
    ]
}

export function calculateTotal() {
    let totalItems = 0

    cart.forEach(cartItem => {
        totalItems += cartItem.quantity
        // console.log(totalItems) 
    });

    // renderMain()
    return totalItems

}


function saveToLocal() {
    localStorage.setItem('cart', JSON.stringify(cart))
}

export function addToCart(productId) {
    let matchingItem;

    const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`)
    let quantityValue = Number(quantitySelector.value)
    // console.log(quantityValue) 
    cart?.forEach((cartItem) => {
        if (cartItem.productId === productId) {
            matchingItem = cartItem
        }
    })
    if (matchingItem) {
        matchingItem.quantity += quantityValue
    }
    else {
        cart.push({
            productId,
            quantity: quantityValue,
            deliveryOptionId: '1'

        })
    }
    saveToLocal()
    // calculateTotal()
}

export function removeItem(productId) {
    let newCart = []

    cart?.forEach(cartItem => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem)
        }

    });
    cart = newCart
    saveToLocal()
    // calculateTotal()

}

export function cartShowing() {
    let cartQuantity = JSON.parse(localStorage.getItem('cartQuantity'))
    const cartQ = document.querySelector('.js-cart-quantity')

    cartQ.innerHTML = cartQuantity
    cart?.forEach((cartItem) => {
        cartQuantity += cartItem.quantity
    })
    cartQ.innerHTML = cartQuantity
    localStorage.setItem('cartQuantity', JSON.stringify(cartQuantity))

}

export function updateQuantity(productId, newQuantity) {
    cart.forEach((cartItem) => {
        if (productId == cartItem.productId) {
            cartItem.quantity = newQuantity
            saveToLocal()
            // let newQuantity = Number(inputQuantity.value)
            quantityLabel.innerHTML = newQuantity
        }
    })
}


export function updateDeliveryOptions(productId, deliveryOptionId) {
    let matchingItem
    cart.forEach((cartItem) => {
        if (cartItem.productId === productId) {
            matchingItem = cartItem
        }
    })
    // console.log(deliveryOptionId)
    matchingItem.deliveryOptionId = deliveryOptionId
    saveToLocal()
    // console.log( JSON.parse(localStorage.getItem('cart')))   

}
}