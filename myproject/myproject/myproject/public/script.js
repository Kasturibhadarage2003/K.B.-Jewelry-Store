const products = {
    rings: [
        { id: 1, name: 'Ring One', price: 199, image: 'Rings/1.jpg' },
        { id: 2, name: 'Ring Two', price: 149, image: 'Rings/2.jpg' },
        { id: 3, name: 'Ring Three', price: 169, image: 'Rings/3.jpg' },
        { id: 4, name: 'Ring Four', price: 179, image: 'Rings/4.jpg' },
        { id: 5, name: 'Ring Five', price: 159, image: 'Rings/5.jpg' },
        { id: 6, name: 'Ring Six', price: 209, image: 'Rings/6.jpg' },
        { id: 7, name: 'Ring Seven', price: 219, image: 'Rings/7.jpg' },
        { id: 8, name: 'Ring Eight', price: 229, image: 'Rings/8.jpg' },
        { id: 9, name: 'Ring Nine', price: 239, image: 'Rings/9.jpg' },
        { id: 10, name: 'Ring Ten', price: 249, image: 'Rings/10.jpg' }
    ],
    necklaces: [
        { id: 11, name: 'Necklace One', price: 299, image: 'Necklace/1.jpg' },
        { id: 12, name: 'Necklace Two', price: 249, image: 'Necklace/2.jpg' },
        { id: 13, name: 'Necklace Three', price: 279, image: 'Necklace/3.jpg' },
        { id: 14, name: 'Necklace Four', price: 319, image: 'Necklace/4.jpg' },
        { id: 15, name: 'Necklace Five', price: 289, image: 'Necklace/5.jpg' },
        { id: 16, name: 'Necklace Six', price: 329, image: 'Necklace/6.jpg' },
        { id: 17, name: 'Necklace Seven', price: 339, image: 'Necklace/7.jpg' },
        { id: 18, name: 'Necklace Eight', price: 349, image: 'Necklace/8.jpg' },
        { id: 19, name: 'Necklace Nine', price: 359, image: 'Necklace/9.jpg' },
        { id: 20, name: 'Necklace Ten', price: 369, image: 'Necklace/10.jpg' }
    ],
    earrings: [
        { id: 21, name: 'Earrings One', price: 99, image: 'earrings/1.jpg' },
        { id: 22, name: 'Earrings Two', price: 79, image: 'earrings/2.jpg' },
        { id: 23, name: 'Earrings Three', price: 89, image: 'earrings/3.jpg' },
        { id: 24, name: 'Earrings Four', price: 109, image: 'earrings/4.jpg' },
        { id: 25, name: 'Earrings Five', price: 95, image: 'earrings/5.jpg' },
        { id: 26, name: 'Earrings Six', price: 119, image: 'earrings/6.jpg' },
        { id: 27, name: 'Earrings Seven', price: 129, image: 'earrings/7.jpg' },
        { id: 28, name: 'Earrings Eight', price: 139, image: 'earrings/8.jpg' },
        { id: 29, name: 'Earrings Nine', price: 149, image: 'earrings/9.jpg' },
        { id: 30, name: 'Earrings Ten', price: 159, image: 'earrings/10.jpg' }
    ],
    bracelets: [
        { id: 31, name: 'Bracelet One', price: 119, image: 'bracelet/1.jpg' },
        { id: 32, name: 'Bracelet Two', price: 129, image: 'bracelet/2.jpg' },
        { id: 33, name: 'Bracelet Three', price: 139, image: 'bracelet/3.jpg' },
        { id: 34, name: 'Bracelet Four', price: 149, image: 'bracelet/4.jpg' },
        { id: 35, name: 'Bracelet Five', price: 159, image: 'bracelet/5.jpg' },
        { id: 36, name: 'Bracelet Six', price: 169, image: 'bracelet/6.jpg' },
        { id: 37, name: 'Bracelet Seven', price: 179, image: 'bracelet/7.jpg' },
        { id: 38, name: 'Bracelet Eight', price: 189, image: 'bracelet/8.jpg' },
        { id: 39, name: 'Bracelet Nine', price: 199, image: 'bracelet/9.jpg' },
        { id: 40, name: 'Bracelet Ten', price: 209, image: 'bracelet/10.jpg' }
    ],
    anklets: [
        { id: 41, name: 'Anklet One', price: 79, image: 'anklets/1.jpg' },
        { id: 42, name: 'Anklet Two', price: 69, image: 'anklets/2.jpg' },
        { id: 43, name: 'Anklet Three', price: 89, image: 'anklets/3.jpg' },
        { id: 44, name: 'Anklet Four', price: 99, image: 'anklets/4.jpg' },
        { id: 45, name: 'Anklet Five', price: 85, image: 'anklets/5.jpg' },
        { id: 46, name: 'Anklet Six', price: 95, image: 'anklets/6.jpg' },
        { id: 47, name: 'Anklet Seven', price: 105, image: 'anklets/7.jpg' },
        { id: 48, name: 'Anklet Eight', price: 115, image: 'anklets/8.jpg' },
        { id: 49, name: 'Anklet Nine', price: 125, image: 'anklets/9.jpg' },
        { id: 50, name: 'Anklet Ten', price: 135, image: 'anklets/10.jpg' }
    ]
};




let cart = JSON.parse(localStorage.getItem('cart')) || [];

function showProducts(category) {
    const container = document.getElementById('products-container');
    container.innerHTML = '';
    products[category].forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3>${product.name}</h3>
            <p>Price: Rs.${product.price}</p>
            <button onclick="addToCart(${product.id}, '${category}')">Add to Cart</button>
        `;
        container.appendChild(productElement);
    });
}

function addToCart(productId, category) {
    const product = products[category].find(p => p.id === productId);
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
}

function showCart() {
    const cartItemsList = document.getElementById('cart-items');
    const totalAmountElement = document.getElementById('total-amount');
    cartItemsList.innerHTML = '';
    let totalAmount = calculateTotalAmount(); // Calculate total amount
    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${item.name} - Rs.${item.price}`;
        cartItemsList.appendChild(cartItem);
    });
    // Display total amount in the cart section
    totalAmountElement.textContent = `Total: Rs.${totalAmount}`;
}

function calculateTotalAmount() {
    let total = 0;
    cart.forEach(item => {
        total += item.price;
    });
    return total;
}

function proceedToCheckout() {
    // Example of navigating to a checkout page
    window.location.href = 'checkout.html';
}
function loadCartForCheckout() {
    const checkoutCartItemsList = document.getElementById('checkout-cart-items');
    const totalAmountElement = document.getElementById('total-amount');
    checkoutCartItemsList.innerHTML = '';
    let totalAmount = calculateTotalAmount(); // Calculate total amount
    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `

            <span>${item.name} - Rs.${item.price}</span>
        `;
        checkoutCartItemsList.appendChild(cartItem);
    });
    // Display total amount in the checkout page
    totalAmountElement.textContent = `Total: Rs.${totalAmount}`;
}

function showPaymentDetails() {
    const paymentMethod = document.getElementById('paymentMethod').value;
    const cardDetails = document.getElementById('cardDetails');
    const cashInstructions = document.getElementById('cashInstructions');

    if (paymentMethod === 'card') {
        cardDetails.style.display = 'block';
        cashInstructions.style.display = 'none';
    } else if (paymentMethod === 'cash') {
        cardDetails.style.display = 'none';
        cashInstructions.style.display = 'block';
    }
}

function submitOrder(event) {
    event.preventDefault();
    const paymentMethod = document.getElementById('paymentMethod').value;

    if (paymentMethod === 'card') {
        const cardNumber = document.getElementById('cardNumber').value;
        const expiryDate = document.getElementById('expiryDate').value;
        const cvv = document.getElementById('cvv').value;

        // Example: Send card details for payment processing
        console.log('Card Number:', cardNumber);
        console.log('Expiry Date:', expiryDate);
        console.log('CVV:', cvv);
        alert('Order placed successfully with card payment!');
    } else if (paymentMethod === 'cash') {
        // Example: Handle cash on delivery
        console.log('Cash on delivery');
        alert('Order placed successfully with cash on delivery!');
    }

    // Clear the cart
    cart = [];
    localStorage.removeItem('cart');

    // Redirect to a confirmation page or home page
    window.location.href = 'confirmation.html';
}
function calculateTotalWithShipping() {
    const standardShippingCost = 10; // Example cost for standard shipping
    const expressShippingCost = 20; // Example cost for express shipping
    const shippingMethod = document.querySelector('input[name="shippingMethod"]:checked').value;
    let shippingCost = 0;

    if (shippingMethod === 'Standard Shipping') {
        shippingCost = standardShippingCost;
    } else if (shippingMethod === 'Express Shipping') {
        shippingCost = expressShippingCost;
    }

    const totalAmountElement = document.getElementById('total-amount');
    let totalAmount = calculateTotalAmount(); // Assuming you have a function for total amount calculation
    totalAmount += shippingCost;

    // Display total amount with shipping in the cart section
    totalAmountElement.textContent = `Total (with ${shippingMethod}): Rs.${totalAmount}`;
}

