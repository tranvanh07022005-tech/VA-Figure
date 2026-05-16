/**
 * BẢN CẬP NHẬT TỐI THƯỢNG - ĐẦY ĐỦ BẪY LỖI GIÁ ÂM
 * Đã sửa: Tự động tắt cảnh báo khi gõ, hiện bong bóng tại ô, và chặn giá âm 100%.
 */

// 1. Hàm hiển thị ảnh preview
function handleFiles(files) {
    const gallery = document.getElementById("gallery");
    const uploadContent = document.querySelector(".upload-content");
    if (!gallery) return;
    gallery.innerHTML = ""; 
    for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = document.createElement("img");
            img.src = e.target.result;
            img.style.width = "100%";
            img.style.borderRadius = "8px";
            img.style.marginTop = "15px";
            gallery.appendChild(img);
            if (uploadContent) uploadContent.style.display = "none";
        };
        reader.readAsDataURL(files[i]);
    }
}

// 2. Hàm Toast thông báo (Chỉ hiện khi thành công)
function showToast(message, type) {
    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.style.background = type === 'success' ? '#27ae60' : '#e74c3c';
    toast.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i> <span>${message}</span>`;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = '0.5s';
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

// 3. Khởi tạo khi DOM sẵn sàng
document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const btnSave = document.querySelector('.btn-save');

    // --- A. TỰ ĐỘNG ĐIỀN DỮ LIỆU TỪ URL ---
    const nameValue = params.get('name');
    if (nameValue) {
        const prodInput = document.getElementById('prod-name');
        const cateInput = document.getElementById('cate-name');
        if (prodInput) prodInput.value = nameValue;
        if (cateInput) cateInput.value = nameValue;
    }

    const fieldMaps = { 'title': 'blog-title', 'content': 'blog-content', 'price': 'prod-price', 'sale': 'prod-sale' };
    for (const [param, inputId] of Object.entries(fieldMaps)) {
        const input = document.getElementById(inputId);
        if (input && params.has(param)) input.value = params.get(param);
    }

    const imgUrl = params.get('img');
    if (imgUrl) {
        const gallery = document.getElementById("gallery");
        const uploadContent = document.querySelector(".upload-content");
        if (gallery && uploadContent) {
            gallery.innerHTML = `<img src="${imgUrl}" style="width: 100%; border-radius: 8px; margin-top: 15px;">`;
            uploadContent.style.display = "none";
        }
    }

    // --- B. XỬ LÝ NÚT LƯU & BẪY LỖI (GIÁ ÂM + TRỐNG) ---
    if (btnSave) {
        btnSave.addEventListener('click', function(e) {
            e.preventDefault(); 

            // 3.1. Danh sách ô bắt buộc (Không được trống)
            const requiredFields = [
                { id: 'prod-name', msg: 'Vui lòng điền tên sản phẩm' },
                { id: 'prod-price', msg: 'Vui lòng điền giá bán' },
                { id: 'cate-name', msg: 'Vui lòng điền tên danh mục' },
                { id: 'cate-desc', msg: 'Vui lòng điền mô tả danh mục' },
                { id: 'blog-title', msg: 'Vui lòng điền tiêu đề tin tức' },
                { id: 'blog-content', msg: 'Vui lòng điền nội dung tin tức' }
            ];

            for (let field of requiredFields) {
                const el = document.getElementById(field.id);
                if (el) {
                    el.setCustomValidity(""); 
                    if (!el.value.trim()) {
                        el.setCustomValidity(field.msg);
                        el.reportValidity(); // Hiện bong bóng
                        return; 
                    }
                }
            }

            // 3.2. KIỂM TRA GIÁ ÂM (PHẦN ANH XÃ HỎI ĐÂY NÈ!)
            const priceElem = document.getElementById('prod-price');
            const saleElem = document.getElementById('prod-sale');

            if (priceElem && parseFloat(priceElem.value) < 0) {
                priceElem.setCustomValidity("Giá bán không được âm! ");
                priceElem.reportValidity();
                return;
            }

            if (saleElem && saleElem.value && parseFloat(saleElem.value) < 0) {
                saleElem.setCustomValidity("Giá khuyến mãi không được âm!");
                saleElem.reportValidity();
                return;
            }

            // 3.3. Thành công
            showToast("Đã lưu thành công! ", "success");
        });
    }

    // --- C. XÓA CẢNH BÁO NGAY KHI GÕ PHÍM ---
    const allInputs = document.querySelectorAll('input, textarea');
    allInputs.forEach(input => {
        input.addEventListener('input', function() {
            this.setCustomValidity("");
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('.admin-sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    if (menuToggle && sidebar && overlay) {
        // Hàm bật/tắt menu
        function toggleMenu() {
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
            // Đổi icon từ 3 gạch sang dấu X cho oai
            const icon = menuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        }

        // Click vào nút hamburger
        menuToggle.addEventListener('click', toggleMenu);

        // Click vào lớp phủ hoặc chọn một mục menu thì đóng lại
        overlay.addEventListener('click', toggleMenu);
        
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                if (sidebar.classList.contains('active')) toggleMenu();
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('.admin-sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    if (menuToggle && sidebar && overlay) {
        // Mở menu
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            sidebar.classList.add('active');
            overlay.classList.add('active');
        });

        // Đóng menu khi bấm vào lớp phủ mờ
        overlay.addEventListener('click', function() {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });

        // Đóng menu khi bấm vào các liên kết điều hướng (tùy chọn)
        const navLinks = document.querySelectorAll('.nav-item');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                sidebar.classList.remove('active');
                overlay.classList.remove('active');
            });
        });
    }
});