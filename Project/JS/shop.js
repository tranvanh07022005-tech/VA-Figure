document.addEventListener('DOMContentLoaded', () => {
    // 1. Sidebar toggle
    const filterTitles = document.querySelectorAll('.group-title');
    filterTitles.forEach(title => {
        title.addEventListener('click', () => {
            title.parentElement.classList.toggle('active');
        });
    });

    // 2. Lọc sản phẩm
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

    // 3. Sự kiện Thêm vào giỏ (Hỗ trợ cả Index và Cửa Hàng)
    const addButtons = document.querySelectorAll('.add-to-cart-hover');
    addButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Chặn chuyển trang tuyệt đối
            e.preventDefault();
            e.stopPropagation();

            let productId = button.getAttribute('data-id');

            // Nếu không có data-id, tự động bóc tách ID từ thẻ <a> bao quanh nó
            if (!productId) {
                const parentCard = button.closest('.product-card') || button.closest('.shop-item');
                if (parentCard) {
                    const link = parentCard.querySelector('a');
                    if (link && link.getAttribute('href')) {
                        // Tương thích với cách viết link của bạn
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

    // Cập nhật số lượng giỏ hàng khi load trang
    updateCartBadge();
});

// Cập nhật hàm addToCart để nhận thêm số lượng (mặc định là 1)
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
            // Cộng thêm số lượng người dùng đã chọn
            existingItem.quantity += quantityToAdd;
        } else {
            // Thêm mới với số lượng người dùng chọn
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

// Cập nhật số lượng hiển thị trên giỏ hàng
function updateCartBadge() {
    const badge = document.querySelector('.cart-count') || document.querySelector('.cart-badge');
    if (badge) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const total = cart.reduce((sum, item) => sum + item.quantity, 0);
        badge.textContent = total;
    }
}   