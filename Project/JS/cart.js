document.addEventListener('DOMContentLoaded', () => {
    renderCart();
});

function renderCart() {
    const container = document.getElementById('cart-items-render');
    const totalItemsText = document.getElementById('total-items');
    const finalTotalText = document.getElementById('final-total-price');
    const wrapper = document.querySelector('.cart-items-wrapper'); 

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) 
    {
        if (wrapper) {
            wrapper.innerHTML = `
                <div style="text-align:center; padding: 20px; color:#64748b;">
                    Giỏ hàng trống. Quay lại 
                    <a href="shop.html" style="color:#eab026; text-decoration: none; font-weight: bold;">cửa hàng</a> nhé.
                </div>`;
        }
        if (totalItemsText) totalItemsText.textContent = 0;
        if (finalTotalText) finalTotalText.textContent = '0đ';
        updateCartBadge();
        return;
    }

    let totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    let totalBill = 0;
    let html = '';

    cart.forEach(item => {
        const priceNum = parseInt(item.price.replace(/\./g, '').replace('đ', ''));
        const subtotal = priceNum * item.quantity;
        totalBill += subtotal;

        html += `
            <div class="cart-item-card">
                <div class="item-img-box">
                    <button class="btn-remove-item" onclick="removeItem('${item.id}')">✕</button>
                    <img src="${item.img}" alt="${item.title}">
                </div>
                
                <div class="item-info-main">
                    <h4>${item.title}</h4>
                    <div class="price-group">
                        <span class="new-price">${item.price}</span>
                    </div>
                </div>
                <div class="item-actions">
                    <span class="item-subtotal">${subtotal.toLocaleString('vi-VN')} đ</span>
                    <div class="qty-input-group">
                        <button onclick="changeCartQty('${item.id}', -1)">-</button>
                        <input type="text" value="${item.quantity}" readonly>
                        <button onclick="changeCartQty('${item.id}', 1)">+</button>
                    </div>
                </div>
            </div>
        `;
    });

    if (container) container.innerHTML = html;
    if (totalItemsText) totalItemsText.textContent = totalQty;
    if (finalTotalText) finalTotalText.textContent = totalBill.toLocaleString('vi-VN') + ' đ';

    updateCartBadge();
}


function changeCartQty(id, amount) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = cart.find(item => item.id === id);

    if (product) {
        product.quantity += amount;
        
        if (product.quantity <= 0) {
            return removeItem(id);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }
}


function removeItem(id) {
    if (confirm("Bạn chắc chắn muốn bỏ sản phẩm này khỏi giỏ hàng?")) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== id);
        
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart(); 
    }
}


function updateCartBadge() {
    const badge = document.querySelector('.cart-count'); 
    if (badge) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const total = cart.reduce((sum, item) => sum + item.quantity, 0);
        badge.textContent = total;
    }
}