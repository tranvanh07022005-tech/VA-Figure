document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = urlParams.get('id');

    if (typeof newsData !== 'undefined' && blogId) {
        const blog = newsData.find(item => item.id === blogId);

        if (blog) {
            document.getElementById('blog-title').textContent = blog.title;
            document.getElementById('blog-author').innerHTML = `Đăng bởi: <strong>${blog.author}</strong>`;
            document.getElementById('blog-date').textContent = blog.date;
            document.getElementById('breadcrumb-current').textContent = blog.title;

            const contentArea = document.getElementById('blog-detail-body'); 
            if (contentArea) {
                let mainImageHtml = '';
                if (blog.img) {
                    mainImageHtml = `<img src="${blog.img}" alt="${blog.title}" class="main-detail-img">`;
                }

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