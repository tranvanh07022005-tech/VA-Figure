document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = urlParams.get('id');

    // Kiểm tra xem newsData đã được nạp từ data.js chưa
    if (typeof newsData !== 'undefined' && blogId) {
        const blog = newsData.find(item => item.id === blogId);

        if (blog) {
            // 1. Cập nhật các thông tin cơ bản
            document.getElementById('blog-title').textContent = blog.title;
            document.getElementById('blog-author').innerHTML = `Đăng bởi: <strong>${blog.author}</strong>`;
            document.getElementById('blog-date').textContent = blog.date;
            document.getElementById('breadcrumb-current').textContent = blog.title;

            const contentArea = document.getElementById('blog-detail-body'); 
            if (contentArea) {
                // 2. Xử lý ảnh đại diện (Main Image)
                let mainImageHtml = '';
                if (blog.img) {
                    // Tạo thẻ img cho ảnh đại diện bài viết
                    mainImageHtml = `<img src="${blog.img}" alt="${blog.title}" class="main-detail-img">`;
                }

                // 3. Hiển thị ảnh đại diện kết hợp với nội dung bài viết
                contentArea.innerHTML = mainImageHtml + blog.content;
            }
        } 
        else {
            document.querySelector('.news-main-box').innerHTML = "<h3 style='padding: 20px;'>Không tìm thấy bài viết này rồi! 🥲</h3>";
        }
    } else {
        console.error("Lỗi: Dữ liệu newsData chưa được nạp hoặc thiếu ID trên thanh địa chỉ!");
    }
});