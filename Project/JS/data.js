const productData = [
    {
        id: "sp-01",
        title: "Mô hình Shimoe Koharu 22cm PVC",
        price: "180.000đ",
        img: "Images/51RPkzAjDML._AC_SX679_.jpg",
        status: "Còn hàng",
        brand: "MegaHouse",
        cat: "Mô Hình",
        sub: "Mô Hình Nữ",
        size: "22cm",
        material: "PVC",
        desc: "Mô hình Shimoe Koharu phiên bản chính hãng."
    },
    {
        id: "sp-02",
        title: "Mô hình Honkai: Star Rail Jingliu 38cm PVC",
        price: "550.000đ",
        img: "Images/s-l960.webp",
        status: "Còn hàng",
        brand: "Mihoyo",
        cat: "Mô Hình",
        sub: "Mô Hình Nữ",
        size: "38cm",
        material: "PVC",
        desc: "Mô hình Jingliu sắc nét từ tựa game Honkai: Star Rail."
    },
    {
        id: "sp-03",
        title: "Hatsune Miku ver Outfit Sakura-Vocaloid-Chính hãng TAITO",
        price: "500.000đ",
        img: "Images/582c56fc8e1e1b244b32e3eab022389c98c4ad26.webp",
        status: "Còn hàng",
        brand: "Taito",
        cat: "Mô Hình",
        sub: "Mô Hình Nữ",
        size: "18cm",
        material: "PVC",
        desc: "Hatsune Miku phiên bản Sakura cực dễ thương."
    },
    {
        id: "sp-04",
        title: "Mô hình Charlotte Linlin dòng Battle Record Collection Extra",
        price: "950.000đ",
        img: "Images/OnePieceBattleRecordCollectionExtra-CharlotteLinlin01.webp",
        status: "Còn hàng",
        brand: "Banpresto",
        cat: "Mô Hình",
        sub: "Mô Hình Nữ",
        size: "25cm",
        material: "PVC",
        desc: "Big Mom thời hoàng kim trong One Piece."
    },
    {
        id: "sp-05",
        title: "Mô hình Albedo ver Pirate dòng Coreful-Overlord",
        price: "950.000đ",
        img: "Images/hinh-anh_2026-04-30_150914867-e1777536574948.webp",
        status: "Còn hàng",
        brand: "Taito",
        cat: "Mô Hình",
        sub: "Mô Hình Nữ",
        size: "20cm",
        material: "PVC",
        desc: "Albedo trong trang phục cướp biển cực ngầu."
    },
    {
        id: "sp-06",
        title: "Mô hình Desktop Cute Nino Nakano Original Cat Room Wear Ver",
        price: "750.000đ",
        img: "Images/TheQuintessentialQuintupletsDesktopCuteFigure-NinoNakanoOriginalCatRoomWearVer._TaikureExclusive_1.webp",
        status: "Còn hàng",
        brand: "Taito",
        cat: "Mô Hình",
        sub: "Mô Hình Nữ",
        size: "15cm",
        material: "PVC/ABS",
        desc: "Nino Nakano phiên bản mèo con dễ thương."
    },
    {
        id: "sp-07",
        title: "Trio-Try-iT Hatsune Miku chủ đề Kuromi SnowMiku",
        price: "590.000đ",
        img: "Images/hinh-anh_2026-02-17_170512435-e1771322733808.webp",
        status: "Còn hàng",
        brand: "Furyu",
        cat: "Mô Hình",
        sub: "Mô Hình Nữ",
        size: "21cm",
        material: "PVC",
        desc: "Sự kết hợp giữa Miku và Kuromi."
    },
    {
        id: "sp-08",
        title: "S.H.Figuarts Portgas D. Ace ver Marineford Summit Battle",
        price: "1.200.000đ",
        img: "Images/hinh-anh_2026-04-23_194413592-e1776948276631.webp",
        status: "Còn hàng",
        brand: "Tamashii Nations",
        cat: "Mô Hình",
        sub: "Mô Hình Nam",
        size: "14cm",
        material: "PVC/ABS",
        desc: "Ace hỏa quyền trong trận chiến thượng đỉnh."
    },
    {
        id: "sp-09",
        title: "Miku Nakano Original Cat Roomwear Ver-Gotoubun no Hanayome",
        price: "499.000đ",
        img: "Images/TheQuintessentialQuintupletsDesktopCute-MikuNakanoOriginalCatRoomwearVer._TaikureExclusive_1.webp",
        status: "Còn hàng",
        brand: "Taito",
        cat: "Mô Hình",
        sub: "Mô Hình Nữ",
        size: "15cm",
        material: "PVC",
        desc: "Miku Nakano phiên bản đồ ngủ mèo."
    },
    {
        id: "sp-10",
        title: "Albedo Wing-Overlord-KADOKAWA",
        price: "1.500.000đ",
        img: "Images/d18734f0-e4d9-40b1-939c-5a0aa4e4f19e_4c285e8e01864bfd9de1802d6e1c9cea_master.webp",
        status: "Còn hàng",
        brand: "Kadokawa",
        cat: "Mô Hình",
        sub: "Mô Hình Nữ",
        size: "31cm",
        material: "PVC",
        desc: "Albedo với đôi cánh đen tuyệt đẹp."
    },
    {
        id: "sp-11",
        title: "Fushiguro Toji-Jujutsu Kaisen-PowerClub Studio",
        price: "1.200.000đ",
        img: "Images/adb106d6-ebe2-4d45-a1b2-c58042efca3f_8f8cbbb0d437475fa2217a3a4e7e35d6_master.webp",
        status: "Còn hàng",
        brand: "PowerClub",
        cat: "Mô Hình",
        sub: "Mô Hình Nam",
        size: "28cm",
        material: "Resin/PU",
        desc: "Phục hắc Toji cực ngầu từ Chú Thuật Hồi Chiến."
    },
    {
        id: "sp-12",
        title: "Nendoroid Kyoko Sakura-Puella Magi Madoka Magica",
        price: "300.000đ",
        img: "Images/hinh-anh_2026-04-22_134049041.webp",
        status: "Còn hàng",
        brand: "Good Smile Company",
        cat: "Nendoroid",
        sub: "Nendoroid Nữ",
        size: "10cm",
        material: "PVC/ABS",
        desc: "Nendoroid Kyoko Sakura dễ thương kèm phụ kiện."
    },
    {
        id: "sp-13",
        title: "Mô hình Albedo dòng T-most-Overlord-Chính hãng Taito",
        price: "2.350.000đ",
        img: "Images/OverlordT-mostFigure-Albedo_TaikureExclusive_1.webp",
        status: "Còn hàng",
        brand: "Taito",
        cat: "Mô Hình",
        sub: "Mô Hình Nữ",
        size: "23cm",
        material: "PVC",
        desc: "Phiên bản Albedo dòng T-most cao cấp."
    },
    {
        id: "sp-14",
        title: "Blindbox huy hiệu chủ đề CG vol 6-Honkai Impact 3rd",
        price: "690.000đ",
        img: "Images/hinh-anh_2025-01-22_111315129.webp",
        status: "Còn hàng",
        brand: "Mihoyo",
        cat: "Blind Box",
        sub: "Phụ Kiện",
        size: "5.8cm",
        material: "Thiếc",
        desc: "Huy hiệu nhân vật Honkai Impact 3rd ngẫu nhiên."
    },
    {
        id: "sp-15",
        title: "Mô hình Kenjaku dòng Masterlise Expiece-Jujutsu Kaisen",
        price: "2.375.000đ",
        img: "Images/IchibanKujiJujutsuKaisenCullingGamePart2-JPrizeKenjakuMasterliseExpieceFigure_1.webp",
        status: "Còn hàng",
        brand: "Bandai",
        cat: "Mô Hình",
        sub: "Mô Hình Nam",
        size: "26cm",
        material: "PVC",
        desc: "Kenjaku Masterlise chi tiết cực cao."
    },
    {
        id: "sp-16",
        title: "Nendoroid Tsukatsuki Rio-Blue Archive",
        price: "450.000đ",
        img: "Images/FIGURE-200643.jpg",
        status: "Còn hàng",
        brand: "Good Smile Company",
        cat: "Nendoroid",
        sub: "Nendoroid Nữ",
        size: "10cm",
        material: "PVC",
        desc: "Chủ tịch Rio từ Millennium Science School."
    },
    {
        id: "sp-17",
        title: "Mô Hình Nendoroid Doll Venti",
        price: "810.000đ",
        img: "Images/20241208_lu6NSQoxf6.jpeg",
        status: "Còn hàng",
        brand: "Good Smile Company",
        cat: "Nendoroid",
        sub: "Nendoroid Nam",
        size: "14cm",
        material: "Vải/PVC",
        desc: "Nendoroid Doll Venti có thể thay quần áo vải."
    },
    {
        id: "sp-18",
        title: "Mô Hình Nendoroid Honkai: Star Rail – Sunday",
        price: "450.000đ",
        img: "Images/O1CN01gseIF51fEbNnyNoMd_!!4611686018427383383-0-item_pic.webp",
        status: "Còn hàng",
        brand: "Good Smile Company",
        cat: "Nendoroid",
        sub: "Nendoroid Nam",
        size: "10cm",
        material: "PVC",
        desc: "Nendoroid Sunday từ Penacony."
    },
    {
        id: "sp-19",
        title: "Mô hình Noodle Stopper Hatsune Miku Tiên Nữ Linh Lan",
        price: "690.000đ",
        img: "Images/O1CN01cJUq0M1QY65bTZCqy_4611686018427380099-2-item_pic.avif",
        status: "Còn hàng",
        brand: "Furyu",
        cat: "Mô Hình",
        sub: "Mô Hình Nữ",
        size: "14cm",
        material: "PVC",
        desc: "Miku dùng để chặn nắp mì ly cực tiện lợi."
    },
    {
        id: "sp-20",
        title: "Revoltech Miyako-Blue Archive-Chính hãng Kaiyodo",
        price: "690.000đ",
        img: "Images/FIGURE-201207.webp",
        status: "Còn hàng",
        brand: "Kaiyodo",
        cat: "Mô Hình",
        sub: "Mô Hình Nữ",
        size: "14.5cm",
        material: "PVC/ABS",
        desc: "Mô hình Miyako có khớp cử động linh hoạt."
    },
    {
        id: "sp-21",
        title: "Mô hình tĩnh Anime Figure Saber Alter Fate/Grand Order",
        price: "1.200.000đ",
        img: "Images/4019ff2496ab3eaa534f3c3846038545-1684084209524.jpg",
        status: "Còn hàng",
        brand: "Xinhao",
        cat: "Mô Hình",
        sub: "Mô Hình Nữ",
        size: "24cm",
        material: "PVC",
        desc: "Vua Arthur phiên bản hắc hóa."
    },
    {
        id: "sp-22",
        title: "Mô hình Trio-Try-iT Elaina – Majo no Tabitabi",
        price: "750.000đ",
        img: "Images/hinh-anh_2025-08-20_122315268.webp",
        status: "Còn hàng",
        brand: "Furyu",
        cat: "Mô Hình",
        sub: "Mô Hình Nữ",
        size: "20cm",
        material: "PVC",
        desc: "Phù thủy hành trình Elaina."
    },
    {
        id: "sp-23",
        title: "Zenless Zone Zero - Ellen Joe - figure 1/7",
        price: "650.000đ",
        img: "Images/hr_apex16188.webp",
        status: "Còn hàng",
        brand: "Apex",
        cat: "Mô Hình",
        sub: "Mô Hình Nữ",
        size: "28cm",
        material: "PVC",
        desc: "Ellen Joe từ ZZZ với thiết kế đuôi cá mập."
    },
    {
        id: "sp-24",
        title: "Figure Yatogami Tohka - Date A Live IV",
        price: "900.000đ",
        img: "Images/0a0e3424-4e4b-416b-af8e-e02d65351c34-jpeg-1745835082334.webp",
        status: "Còn hàng",
        brand: "Taito",
        cat: "Mô Hình",
        sub: "Mô Hình Nữ",
        size: "20cm",
        material: "PVC",
        desc: "Tohka trong trang phục váy tinh khôi."
    },
    {
        id: "sp-25",
        title: "Genshin Impact - Nendoroid Raiden Shogun",
        price: "300.000đ",
        img: "Images/Image_0_2411081231033754.webp",
        status: "Còn hàng",
        brand: "Good Smile Company",
        cat: "Nendoroid",
        sub: "Nendoroid Nữ",
        size: "10cm",
        material: "PVC",
        desc: "Lôi thần Raiden Shogun phiên bản Nendoroid."
    },
    {
        id: "sp-26",
        title: "Nendoroid Hatsune Miku: Rabbit Hole Ver",
        price: "300.000đ",
        img: "Images/nendoroid-character-vocal-series-01-hatsune-miku-rabbit-hole-ver-good-smile-company-figurine-yattajapan-1.webp",
        status: "Còn hàng",
        brand: "Good Smile Company",
        cat: "Nendoroid",
        sub: "Nendoroid Nữ",
        size: "10cm",
        material: "PVC",
        desc: "Miku Rabbit Hole cực hot trend."
    },
    {
        id: "sp-27",
        title: "Kimetsu no Yaiba: Shinobu Kocho Nendoroid Swacchao!",
        price: "300.000đ",
        img: "Images/51orYJAW6DL._AC_.jpg",
        status: "Còn hàng",
        brand: "Good Smile Company",
        cat: "Nendoroid",
        sub: "Nendoroid Nữ",
        size: "9cm",
        material: "PVC",
        desc: "Shinobu phiên bản ngồi ghế nhỏ gọn."
    },
    {
        id: "sp-28",
        title: "Haikyu!! - YuMe Anime Blind Box Figure",
        price: "350.000đ",
        img: "Images/E1087325_1_1920x1920.jpg",
        status: "Còn hàng",
        brand: "YuMe",
        cat: "Blind Box",
        sub: "Mô Hình Nam",
        size: "8cm",
        material: "PVC",
        desc: "Nhân vật Haikyu ngẫu nhiên trong hộp."
    },
    {
        id: "sp-29",
        title: "Jujutsu Kaisen Mystery Blind Bag, Version 1",
        price: "200.000đ",
        img: "Images/61Cy2CxghBL._AC_SX679_.jpg",
        status: "Còn hàng",
        brand: "Monogram",
        cat: "Blind Box",
        sub: "Mô Hình Nam",
        size: "5cm",
        material: "Cao su/PVC",
        desc: "Móc khóa nhân vật Jujutsu Kaisen ngẫu nhiên."
    },
    {
        id: "sp-30",
        title: "Pack nhân phẩm One Piece TCG - Chính hãng BANDAI",
        price: "400.000đ",
        img: "Images/op_baf86e4833df42518779e492cd36b789_grande.jpg",
        status: "Còn hàng",
        brand: "Bandai",
        cat: "Pack Card",
        sub: "Thẻ bài",
        size: "Tiêu chuẩn",
        material: "Giấy cứng",
        desc: "Gói thẻ bài One Piece chính hãng Bandai."
    },
    {
        id: "sp-31",
        title: "Nhồi Bông Frieren: Beyond Journey's End",
        price: "350.000đ",
        img: "Images/Nhoi-Bong-Frieren-Beyond-Journey-s-End-Mascot-Plush-Chibigurumi-Vol-1-Banpresto--1.jpg",
        status: "Còn hàng",
        brand: "Banpresto",
        cat: "Phụ Kiện Khác",
        sub: "Gấu bông",
        size: "15cm",
        material: "Vải bông",
        desc: "Gấu bông Frieren mềm mại dễ thương."
    },
    {
        id: "sp-32",
        title: "Cốc Đổi Màu Detective Conan",
        price: "150.000đ",
        img: "Images/20240801_9EgqynyUxd.jpeg",
        status: "Còn hàng",
        brand: "OEM",
        cat: "Phụ Kiện Khác",
        sub: "Đồ gia dụng",
        size: "350ml",
        material: "Sứ",
        desc: "Cốc đổi màu khi rót nước nóng chủ đề Conan."
    }
];


//BLOGS

const newsData = [
    {
        id: "news-01",
        title: "[FURYU] LỊCH PHÁT HÀNH MÔ HÌNH GAMEPRIZE THÁNG 6/2026",
        author: "Trần Việt Anh",
        date: "18/12/2024",
        content: `
            <img src="Images/64786b91-9496-4495-9423-93cc39627640.jpg" alt="ảnh"> 
            <p>FuRyu vừa chính thức công bố danh sách những mẫu mô hình Game Prize cực hot sẽ được phát hành tại Nhật Bản vào tháng 6/2026 tới đây.</p>
            <p>Tâm điểm của tháng này chính là sự xuất hiện của dòng Trio-Try-iT với các nhân vật trong series "The Quintessential Quintuplets" và "Re:Zero" mang phong cách mùa hè rực rỡ.</p>
            <p>Các fan của dòng Bicute Bunnies cũng không thể bỏ lỡ mẫu nhân vật Hatsune Miku mới với kích thước vượt trội và độ hoàn thiện tinh xảo trong từng chi tiết nhỏ.</p>
            <p>Dù là hàng giải thưởng arcade nhưng chất lượng sơn và tạo hình của FuRyu trong năm 2026 này đã tiệm cận với các dòng scale figure cao cấp.</p>
            <p>VA Figure sẽ sớm mở nhận đặt trước cho các mẫu này để đảm bảo các nhà sưu tập có thể sở hữu ngay khi hàng vừa cập bến thị trường Việt Nam.</p>
            <p>Đừng quên theo dõi fanpage thường xuyên để không bỏ lỡ bất kỳ thông tin quan trọng nào về lịch trình ship hàng và giá cả ưu đãi nhé!</p>
        `
    },
    {
        id: "news-02",
        title: "[TAITO] LỊCH PHÁT HÀNH MÔ HÌNH GAMEPRIZE THÁNG 8/2026",
        author: "Trần Việt Anh",
        date: "16/12/2024",
        content: `
            <img src="Images/f5a2b6c3-e681-433e-acc8-d671baf2aae9.jpg" alt="Giáng sinh 2024">
            <p>Taito vừa hâm nóng cộng đồng sưu tập bằng lịch phát hành tháng 8/2026 với những cái tên không thể hot hơn trong dòng Coreful và AMP+.</p>
            <p>Dòng Aqua Float Girls sẽ đón chào thêm những gương mặt mới từ series "Overlord" và "Date A Live", hứa hẹn làm mát dịu cơn nóng mùa hè của các nhà sưu tập.</p>
            <p>Điểm nhấn đáng chú ý là mẫu mô hình Albedo phiên bản váy ngủ với độ chi tiết vượt xa các dòng Prize thông thường, chắc chắn sẽ cháy hàng ngay khi mở bán.</p>
        `
    },
    {
        id: "news-03",
        title: "[ICHIBAN KUJI] LỊCH PHÁT HÀNH MÔ HÌNH ICHIBAN KUJI THÁNG 10/2026",
        author: "Trần Việt Anh",
        date: "01/10/2026",
        content: `
            <img src="Images/190b2744-ea86-4b2d-ba68-dc205878c7d7.jpg" alt="Khai trương">
            <p>Tháng 10/2026 sẽ là bữa tiệc của các tín đồ Ichiban Kuji với sự trở lại của các giải thưởng cực phẩm từ vũ trụ "Dragon Ball" và "One Piece".</p>
            <p>Giải A lần này là một mẫu Masterlise cực khủng với tạo hình chiến đấu mãn nhãn, đi kèm là giải Last One có màu sắc ánh kim đặc biệt.</p>
            <p>VA Figure đã sẵn sàng nhập kho các bộ kuji mới nhất để các chủ nhân có thể thử vận may của mình ngay tại shop với tỷ lệ trúng thưởng cực cao.</p>
        `
    },
    {
        id: "news-04",
        title: "[BANDAI] LỊCH PHÁT HÀNH MÔ HÌNH GAMEPRIZE THÁNG 12/2026",
        author: "Trần Việt Anh",
        date: "12/08/2026",
        content: `
            <img src="Images/3014ecb4-3634-46b2-9ac6-012f59a53db9.jpg" alt="Taito">
            <p>Bandai Spirits vừa hé lộ danh sách mô hình Prize cho dịp cuối năm 2026, tập trung mạnh vào các dòng Vibration Stars và DXF nổi tiếng.</p>
            <p>Các nhân vật từ "Jujutsu Kaisen" và "Naruto" sẽ được tái hiện lại trong những tư thế thi triển chiêu thức đặc trưng với hiệu ứng sơn bóng bẩy.</p>
            <p>Đặc biệt, dòng mô hình kích thước lớn Grandista sẽ có sự góp mặt của một nhân vật phản diện được yêu thích, là món quà Noel tuyệt vời cho fan anime.</p>
        `
    },
    {
        id: "news-05",
        title: "Mười năm sau năm 2016: Những tác phẩm anime vẫn giữ nguyên sức...",
        author: "Trần Việt Anh",
        date: "12/08/2026",
        content: `
            <img src="Images/march-comes-in-like-a-lion-2-1777534569263449523725-0-0-1200-1920-crop-17775359298361359069871.webp" alt="Taito">
            <p>Nhìn lại năm 2016 - một năm bản lề với những siêu phẩm như "Re:Zero", "Yuri on Ice" và "March Comes in Like a Lion" vẫn đang gây bão cho tới nay.</p>
            <p>Sau một thập kỷ, giá trị của các bộ anime này không chỉ dừng lại ở nội dung mà còn ở hệ sinh thái mô hình vô cùng phong phú và bền bỉ.</p>
            <p>VA Figure tự hào là nơi lưu giữ những mẫu figure hiếm từ thời kỳ hoàng kim này dành cho các nhà sưu tập muốn tìm lại ký ức tuổi thơ.</p>
        `
    },
    {
        id: "news-06",
        title: "Trailer 'Kagurabachi' cán mốc 6 triệu lượt xem sau 24 giờ",
        author: "Trần Việt Anh",
        date: "12/08/2026",
        content: `
            <img src="Images/kb-teaser-en-17774504080891011386714-0-0-764-1221-crop-17774504341071747455539.webp" alt="Taito">
            <p>Hiện tượng Kagurabachi vừa chứng minh sức hút khủng khiếp khi trailer anime đầu tiên phá kỷ lục lượt xem trên toàn cầu chỉ trong một ngày.</p>
            <p>Câu chuyện về chàng thợ rèn kiếm Chihiro đang được kỳ vọng sẽ trở thành "trụ cột" tiếp theo của Shonen Jump sau khi Jujutsu Kaisen kết thúc.</p>
            <p>Dự kiến các dòng mô hình của series này sẽ sớm được các ông lớn như Bandai hay FuRyu sản xuất vào nửa đầu năm 2027 tới đây.</p>
        `
    },
    {
        id: "news-07",
        title: "Chiến dịch Ani-May 2026: Crunchyroll chiếu miễn phí Solo...",
        author: "Trần Việt Anh",
        date: "12/08/2026",
        content: `
            <img src="Images/crunchyroll-02-1760585106935962588350.webp" alt="Taito">
            <p>Crunchyroll vừa công bố chiến dịch Ani-May 2026 với ưu đãi cực sốc: chiếu miễn phí toàn bộ phần 1 của "Solo Leveling" cho người dùng.</p>
            <p>Đây là cơ hội tuyệt vời để các fan hâm mộ Sung Jin-woo có thể xem lại hành trình thăng cấp trước khi phần tiếp theo được ra mắt chính thức.</p>
            <p>Kèm theo chiến dịch này, các mẫu mô hình Jin-woo phiên bản Shadow Monarch cũng đang được VA Figure giảm giá mạnh để tri ân khách hàng.</p>
        `
    },
    {
        id: "news-08",
        title: "My Hero Academia hé lộ tập đặc biệt: Lời chào sau cuối cho hành...",
        author: "Trần Việt Anh",
        date: "12/08/2026",
        content: `
            <img src="Images/3-1777279542357638045461-0-33-1053-1718-crop-17772807258241153683813.webp" alt="Taito">
            <p>Sau khi manga kết thúc, My Hero Academia vừa tung ra teaser cho tập anime đặc biệt nhằm tri ân chặng đường 10 năm của lớp 1-A.</p>
            <p>Tập phim sẽ tập trung vào những khoảnh khắc chưa từng được kể trong cuộc chiến cuối cùng, mang lại cái nhìn sâu sắc hơn về thế giới siêu năng lực.</p>
            <p>Hàng loạt mẫu mô hình Deku và Bakugo phiên bản "Final Battle" đã cập bến VA Figure để các fan có thể lưu giữ lại cột mốc lịch sử này.</p>
        `
    },
    {
        id: "news-09",
        title: "5 điều fan cần biết trước khi Black Clover sắp khép lại hành trình",
        author: "Trần Việt Anh",
        date: "12/08/2026",
        content: `
            <img src="Images/anh-man-hinh-2026-04-26-luc-14-59-32-1777190381679936023752-0-20-846-1374-crop-177719040033460684114.webp" alt="Taito">
            <p>Black Clover đang tiến rất gần tới hồi kết, dưới đây là những điều quan trọng fan cần chuẩn bị trước khi chia tay vương quốc Clover.</p>
            <p>Trận chiến giữa Asta và các thực thể cao cấp đang đi đến cao trào, hứa hẹn một cái kết bùng nổ về mặt cảm xúc lẫn hình ảnh.</p>
            <p>Đừng quên theo dõi VA Figure để cập nhật lịch ship các mẫu mô hình giới hạn của Asta và Yuno dự kiến phát hành vào cuối năm nay nhé!</p>
        `
    }
];