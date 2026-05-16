document.addEventListener('DOMContentLoaded', () => {
    console.log("VA Figure Script đã sẵn sàng!");

    // === 1. XỬ LÝ SLIDER (BANNER) ===
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    function showSlide(index) {
        if (!slides.length) return;
        if (index >= slides.length) currentIndex = 0;
        else if (index < 0) currentIndex = slides.length - 1;
        else currentIndex = index;

        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        slides[currentIndex].classList.add('active');
        if(dots[currentIndex]) dots[currentIndex].classList.add('active');
    }

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            currentIndex++;
            showSlide(currentIndex);
        });
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            currentIndex--;
            showSlide(currentIndex);
        });
    }

    setInterval(() => {
        currentIndex++;
        showSlide(currentIndex);
    }, 5000);

    // === 2. XỬ LÝ NÚT 3 GẠCH (HAMBURGER MENU) ===
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            navList.classList.toggle('active');
        });
    }

    // === 3. XỬ LÝ MENU CON (SUBMENU) ===
    const menuLinks = document.querySelectorAll('.has-submenu > a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 1024) {
                e.preventDefault();
                e.stopPropagation();
                const parentLi = this.parentElement;
                document.querySelectorAll('.has-submenu').forEach(li => {
                    if (li !== parentLi) li.classList.remove('open');
                });
                parentLi.classList.toggle('open');
            }
        });
    });

    // === 4. ĐÓNG MENU KHI BẤM RA NGOÀI ===
    document.addEventListener('click', (e) => {
        if (navList && navList.classList.contains('active')) {
            if (!navList.contains(e.target) && !menuToggle.contains(e.target)) {
                navList.classList.remove('active');
                document.querySelectorAll('.has-submenu').forEach(li => li.classList.remove('open'));
            }
        }
    });

    // === 5. XỬ LÝ BACK TO TOP (Đã đưa ra khỏi khối lồng) ===
    const backToTopBtn = document.getElementById('backToTop');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            // Kiểm tra vị trí cuộn hiện tại
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;

            if (scrollPosition > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    } else {
        console.warn("Lưu ý: Nút Back to Top chưa xuất hiện trên trang này.");
    }
});