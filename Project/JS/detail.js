document.addEventListener('DOMContentLoaded', () => {
    // 1. LẤY ID SẢN PHẨM TỪ URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Kiểm tra tính hợp lệ của dữ liệu
    if (!productId || typeof productData === 'undefined') {
        console.error("Không tìm thấy ID sản phẩm hoặc dữ liệu productData.");
        return;
    }

    // 2. HIỂN THỊ THÔNG TIN CHI TIẾT
    const product = productData.find(item => item.id === productId);
    if (product) {
        document.getElementById('product-title').textContent = product.title || product.name;
        // Kiểm tra thuộc tính img hoặc image tùy theo dữ liệu của bạn
        document.getElementById('product-img').src = product.img || product.image;
        document.getElementById('product-status').textContent = product.status || "Còn hàng";
        document.getElementById('product-brand').textContent = product.brand || "Đang cập nhật";
        
        // Đảm bảo giá hiển thị đúng định dạng tiền tệ
        const price = typeof product.price === 'number' ? product.price.toLocaleString() + 'đ' : product.price;
        document.getElementById('product-price').textContent = price;
        
        // Thông số kỹ thuật
        document.getElementById('spec-desc').textContent = product.title || product.name;
        document.getElementById('spec-brand').textContent = product.brand || "Đang cập nhật";
        document.getElementById('spec-size').textContent = product.size || "Đang cập nhật";
        document.getElementById('spec-material').textContent = product.material || "PVC";

        // Gọi hàm renderBreadcrumbs (nếu bạn đã định nghĩa)
        if (typeof renderBreadcrumbs === 'function') {
            renderBreadcrumbs(product);
        }
    }

    // 3. LOGIC THAY ĐỔI SỐ LƯỢNG VÀ THÊM VÀO GIỎ
    const btnAddCart = document.querySelector('.btn-add-cart');
    const inputQty = document.getElementById('quantity');

    // Hàm đổi số lượng (Gán vào window để các nút onclick="changeQty()" gọi được)
    window.changeQty = (amount) => {
        let currentVal = parseInt(inputQty.value) || 1;
        currentVal += amount;
        if (currentVal < 1) currentVal = 1;
        inputQty.value = currentVal;
    };

    if (btnAddCart) {
        btnAddCart.addEventListener('click', () => {
            const quantity = parseInt(inputQty.value) || 1;
            // Gọi hàm addToCart từ file shop.js (đảm bảo hàm này nhận 3 tham số: id, event, quantityToAdd)
            if (typeof addToCart === 'function') {
                addToCart(productId, null, quantity);
            } else {
                console.error("Hàm addToCart chưa được tải.");
            }
        });
    }

    // 4. LOGIC CAROUSEL SẢN PHẨM LIÊN QUAN
    const relatedContainer = document.getElementById('related-items-list');
    const nextBtn = document.getElementById('rel-next');
    const prevBtn = document.getElementById('rel-prev');
    const scrollStep = 300; 

    if (relatedContainer) {
        const slideNext = () => {
            if (relatedContainer.scrollLeft + relatedContainer.clientWidth >= relatedContainer.scrollWidth - 10) {
                relatedContainer.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                relatedContainer.scrollBy({ left: scrollStep, behavior: 'smooth' });
            }
        };

        const slidePrev = () => {
            if (relatedContainer.scrollLeft <= 0) {
                relatedContainer.scrollTo({ left: relatedContainer.scrollWidth, behavior: 'smooth' });
            } else {
                relatedContainer.scrollBy({ left: -scrollStep, behavior: 'smooth' });
            }
        };

        if (nextBtn) nextBtn.onclick = slideNext;
        if (prevBtn) prevBtn.onclick = slidePrev;

        // Tự động chạy
        let autoSlide = setInterval(slideNext, 4000);

        // Dừng khi di chuột vào
        relatedContainer.addEventListener('mouseenter', () => clearInterval(autoSlide));
        relatedContainer.addEventListener('mouseleave', () => {
            clearInterval(autoSlide);
            autoSlide = setInterval(slideNext, 4000);
        });
    }

    // Cập nhật Badge giỏ hàng khi load trang chi tiết
    if (typeof updateCartBadge === 'function') {
        updateCartBadge();
    }
});


/**
 * Hàm xử lý hiển thị đường dẫn Breadcrumb
 */
function renderBreadcrumbs(product) {
    const breadcrumbNav = document.getElementById('detail-breadcrumb');
    if (!breadcrumbNav) return;

    let breadcrumbHTML = `<a href="index.html">Trang chủ</a> <span>/</span> `;
    
    if (product.cat) {
        breadcrumbHTML += `<a href="shop.html?cat=${encodeURIComponent(product.cat)}">${product.cat}</a>`;
    }
    
    if (product.sub) {
        breadcrumbHTML += ` <span>/</span> <a href="shop.html?parent=${encodeURIComponent(product.cat)}&cat=${encodeURIComponent(product.sub)}">${product.sub}</a>`;
    }
    
    breadcrumbHTML += ` <span>/</span> ${product.title}`;
    breadcrumbNav.innerHTML = breadcrumbHTML;
}

/**
 * Hàm hỗ trợ tăng/giảm số lượng sản phẩm mua
 */
function changeQty(amount) {
    const qtyInput = document.getElementById('quantity');
    if (!qtyInput) return;

    let currentValue = parseInt(qtyInput.value);
    
    if (!isNaN(currentValue)) {
        let newValue = currentValue + amount;
        if (newValue >= 1) {
            qtyInput.value = newValue;
        }
    }
}