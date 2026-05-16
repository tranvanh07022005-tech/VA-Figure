document.addEventListener('DOMContentLoaded', () => {
    const filterTitles = document.querySelectorAll('.group-title');
    filterTitles.forEach(title => {
        title.addEventListener('click', () => {
            title.parentElement.classList.toggle('active');
        });
    });

    function updateShopContent() {
        const urlParams = new URLSearchParams(window.location.search);
        let category = urlParams.get('cat');
        const parent = urlParams.get('parent');

        const breadcrumbNav = document.getElementById('dynamic-breadcrumb');
        const pageTitle = document.getElementById('shop-page-title');
        const allProducts = document.querySelectorAll('.shop-item, .product-card');

        let displayTitle = category || "Tất cả sản phẩm";
        if (category === "Cửa Hàng") displayTitle = "Tất cả sản phẩm";

        let breadcrumbHTML = `<a href="index.html">Trang chủ</a>`;
        if (parent) breadcrumbHTML += ` <span>/</span> <a href="shop.html?cat=${encodeURIComponent(parent)}">${parent}</a>`;
        breadcrumbHTML += ` <span>/</span> ${displayTitle}`;
        
        if (breadcrumbNav) breadcrumbNav.innerHTML = breadcrumbHTML;
        if (pageTitle) pageTitle.textContent = displayTitle.toUpperCase();

        allProducts.forEach(product => {
            const itemCat = product.getAttribute('data-cat');
            const itemSub = product.getAttribute('data-sub');
            let shouldShow = false;

            if (!category || category === "Cửa Hàng") shouldShow = true;
            else if (parent) { if (itemCat === parent && itemSub === category) shouldShow = true; }
            else { if (itemCat === category) shouldShow = true; }

            product.style.display = shouldShow ? "block" : "none";
        });
    }

    updateShopContent();
    window.addEventListener('popstate', updateShopContent);

    const addButtons = document.querySelectorAll('.add-to-cart-hover');
    addButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            let productId = button.getAttribute('data-id');

            if (!productId) {
                const parentCard = button.closest('.product-card') || button.closest('.shop-item');
                if (parentCard) {
                    const link = parentCard.querySelector('a');
                    if (link && link.getAttribute('href')) {
                        const queryString = link.getAttribute('href').split('?')[1];
                        if (queryString) {
                            productId = new URLSearchParams(queryString).get('id');
                        }
                    }
                }
            }

            if (productId) {
                addToCart(productId, e);
            } else {
                console.error("Lỗi: Không tìm thấy ID sản phẩm để thêm vào giỏ!");
            }
        });
    });

    updateCartBadge();
});

function addToCart(id, event = null, quantityToAdd = 1) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }

    if (typeof productData === 'undefined') {
        console.error("Lỗi: productData chưa được định nghĩa.");
        return;
    }

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = productData.find(p => p.id === id);

    if (product) {
        const existingItem = cart.find(item => item.id === id);
        
        if (existingItem) {
            existingItem.quantity += quantityToAdd;
        } else {
            cart.push({ ...product, quantity: quantityToAdd });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        
        const productName = product.title || product.name || "Sản phẩm";
        alert(`Đã thêm ${quantityToAdd} "${productName}" vào giỏ hàng!`);
        
        updateCartBadge(); 
    } else {
        console.error("Không tìm thấy sản phẩm có ID:", id);
    }
}

function updateCartBadge() {
    const badge = document.querySelector('.cart-count') || document.querySelector('.cart-badge');
    if (badge) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const total = cart.reduce((sum, item) => sum + item.quantity, 0);
        badge.textContent = total;
    }
}   