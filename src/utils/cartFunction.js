export function loadCart() {
    const cart = localStorage.getItem("cart");
    if (cart != null) {
        return JSON.parse(cart)
    } else {
        return []
    }
}

export function addToCart(productId, qty) {
    const cart = loadCart()
    const index = cart.findIndex(
        (item) => {
            return item.productId == productId
            // item.productId = productId
        }
    )
    console.log(index)
    if (index == -1) {
        cart.push(
            { productId, qty }
        )
    } else {
        const newQty = cart[index].qty + qty
        if (newQty <= 0) {
            cart.splice(index, 1)
        } else {
            cart[index].qty = newQty
        }
    }
    saveCart(cart)
}

export function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart))
}

// export function saveCart(cart) {
//     console.log("📦 Saving cart to localStorage...");

//     // Save cart
//     localStorage.setItem("cart", JSON.stringify(cart));

//     // Retrieve and parse saved cart
//     const savedCart = JSON.parse(localStorage.getItem("cart"));

//     // Display full cart details
//     console.log("✅ Cart saved. Current cart items:");
//     savedCart.forEach((item, index) => {
//         console.log(`Item ${index + 1}: Product ID = ${item.productId}, Quantity = ${item.qty}`);
//     });

//     // Optional: log full array for reference
//     console.log("🧾 Full saved cart object:", savedCart);
// }

export function clearCart() {
    localStorage.removeItem("cart")
}

export function deleteItem(productId) {
    const cart = loadCart()
    const index = cart.findIndex(
        (item) => {
            return item.productId = productId
        }
    )
    if(index != -1){
        cart.splice(index,1)
    }
}