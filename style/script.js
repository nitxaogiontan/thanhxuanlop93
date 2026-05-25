document.addEventListener('DOMContentLoaded', () => {
    const gatekeeper = document.getElementById('gatekeeper');
    const gateBtns = document.querySelectorAll('.gate-btn');
    const gateAlert = document.getElementById('gateAlert');
    const alertGif = document.getElementById('alertGif');
    const alertMsg = document.getElementById('alertMsg');

    const correctGif = "https://i.pinimg.com/originals/b7/c6/4a/b7c64aca651271c52087f58276bd1de1.gif";
    const wrongGif = "https://i.pinimg.com/originals/59/4f/99/594f995748f0463a8c61c1c593510815.gif";
    
    // SFX for verification
    const correctSfx = new Audio('style/question/correct.mp3');
    const wrongSfx = new Audio('style/question/wrong.mp3');

    if (gatekeeper && gateAlert) {
        gateBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const answer = btn.getAttribute('data-answer');
                const card = gatekeeper.querySelector('.gate-card');
                
                if (answer === 'D') {
                    btn.classList.add('correct');
                    if (card) card.classList.add('blur-all');
                    if (alertGif) alertGif.src = correctGif;
                    alertMsg.innerText = "Chào mừng trở lại!";
                    gateAlert.className = "gate-alert success show";
                    
                    // SFX and Music Start
                    correctSfx.play();
                    playSongAtIndex(0); // Start the first song in bgMusic
                    
                    setTimeout(() => {
                        gatekeeper.classList.add('fade-out');
                        document.body.style.overflow = 'auto'; 
                        setTimeout(() => gatekeeper.remove(), 1000);
                    }, 1800);
                } else {
                    btn.classList.add('wrong');
                    if (card) card.classList.add('blur-all');
                    if (alertGif) alertGif.src = wrongGif;
                    alertMsg.innerText = "Bạn không phải là thành viên của lớp này";
                    gateAlert.className = "gate-alert error show";
                    
                    // Play Wrong SFX
                    wrongSfx.play();
                    
                    setTimeout(() => {
                        gateAlert.classList.remove('show');
                        btn.classList.remove('wrong');
                        if (card) card.classList.remove('blur-all');
                    }, 2000);
                }
            });
        });
    }
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        burger.classList.toggle('toggle'); 
    });

    const links = document.querySelectorAll('.nav-links li a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('nav-active');
            burger.classList.remove('toggle');
        });
    });

    const memberGrid = document.getElementById('memberGrid');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    
    
       const members = [

    { name: 'Tâm An', nickname: 'Peace', img: 'style/img/ThanhVien/TamAn.jpg' },
    { name: 'Tường An', nickname: 'Dầu Ăn', quote: 'hả cái gì', img: 'style/img/ThanhVien/TuongAn.jpg', hobbies: 'Trốn tìm với giám thị', message: 'hả cái gì' },
    { name: 'Gia Huy', nickname: 'Gia Heo', quote: 'Nếu anh là con mèo thì anh sẽ dành 9 mạng cho em!', img: 'style/img/ThanhVien/GiaHuy.jpg', hobbies: 'Nấu mì tôm đêm', message: 'Nếu anh là con mèo thì anh sẽ dành 9 mạng cho em!' },
    { name: 'Gia Bảo', nickname: 'Đạo Trường', quote: 'Mấy con gà công nghiệp thì biết cái gì', img: 'style/img/ThanhVien/GiaBao.jpg', hobbies: 'Canh cô giáo', message: 'Mấy con gà công nghiệp thì biết cái gì' },
    { name: 'Quốc Đạt', nickname: 'zai đẹp 9/3', quote: 'Ai hỏi?', img: 'style/img/ThanhVien/QuocDat.jpg', hobbies: 'Lưu ảnh dìm', message: 'Ai hỏi?' },
    { name: 'Toàn Thắng', nickname: 'Ziệt Kiều Cần Thơ', quote: 'Ai hỏi?', img: 'style/img/ThanhVien/ToanThang.jpg', hobbies: 'Ăn vụng trong lớp', message: 'Ai hỏi?' },
    { name: 'Anh Quân', nickname: 'Đầu vàng pikachu', quote: 'Đường vào tim ôi băng giá', img: 'style/img/ThanhVien/AnhQuan.jpg', hobbies: 'Top 1 speed', message: 'Đường vào tim ôi băng giá' },
    { name: 'Hà Duy', nickname: 'Cà rốt 7 màu', quote: 'gặp tao không biết chào à??', img: 'style/img/ThanhVien/HaDuy.jpg', hobbies: 'Chạy deadline phút chót', message: 'gặp tao không biết chào à??' },
    { name: 'An Phúc', nickname: 'Phúc XO', img: 'style/img/ThanhVien/AnPhuc.jpg', hobbies: 'Bấm điện thoại dưới hộc bàn' },
    { name: 'Đăng Khoa', nickname: 'Anh Pi', quote: 'Tỷ lệ ngủ trong tiết toán = 0%', img: 'style/img/ThanhVien/DangKhoa.jpg', hobbies: 'Ngủ mọi lúc mọi nơi', message: 'Tỷ lệ ngủ trong tiết toán = 0%' },
    { name: 'Bảo Anh', nickname: 'Banh', quote: 'Cái lớp như cái...', img: 'style/img/ThanhVien/BaoAnh.jpg', hobbies: 'Vẽ bậy lên bàn', message: 'Cái lớp như cái...' },
    { name: 'Anh Hào', nickname: 'Trùm nấu xói', quote: 'Ai Hát?? 🤡', img: 'style/img/ThanhVien/AnhHao.jpg', hobbies: 'Nấu xói', message: 'Ai Hát?? 🤡' },
    { name: 'Anh Tuấn', nickname: 'Học Bá', quote: 'English is not difficult', img: 'style/img/ThanhVien/AnhTuan.jpg', hobbies: 'Tóp Tóp', message: 'English is not difficult' },
    { name: 'Nhật Long', nickname: 'Trùm calisthenic', quote: 'Aim to full front lever', img: 'style/img/ThanhVien/NhatLong.jpg', hobbies: 'Hóa', message: 'Dăm ba môn hóa, anh mày cân tất' },
    { name: 'Bảo Nam', nickname: 'Trùm kháy', quote: 'Supercalifragilisticexpialidocious', img: 'style/img/ThanhVien/BaoNam.jpg', hobbies: 'đá đểu', message: 'Supercalifragilisticexpialidocious' },
    { name: 'Bảo Khang', nickname: 'Vooc', quote: 'Toán có thể đưa con người đến chiều không gian thứ 4 nhất thời nhưng thích chim cánh cụt là mãi mãi', img: 'style/img/ThanhVien/BaoKhang.jpg', hobbies: 'Đọc truyện lén', message: 'Toán có thể đưa con người đến chiều không gian thứ 4 nhất thời nhưng thích chim cánh cụt là mãi mãi' },
    { name: 'Khôi Nguyên', nickname: 'Khôi Ngoo', quote: 'Dog Rose', img: 'style/img/ThanhVien/KhoiNguyen.jpg', hobbies: 'Nâng tạ', message: 'Dog Rose' },
    { name: 'Kha Thy', nickname: 'Ếch', quote: 'con ếch xanh cute=))', img: 'style/img/ThanhVien/KhaThy.jpg', hobbies: 'Lên phòng giám thị uống trà', message: 'con ếch xanh cute=))' },
    { name: 'Nhật Thư', nickname: 'Gấu trúc', quote: 'Trùm mền fifai', img: 'style/img/ThanhVien/NhatThu.jpg', hobbies: 'Khua bàn gõ ghế', message: 'Trùm mền fifai' },
    { name: 'Thanh Tiền', nickname: 'Dân chơi', quote: 'hi hi hi hi hi hi hi hi hi hi', img: 'style/img/ThanhVien/ThanhTien.jpg', hobbies: 'Trốn học thêm', message: 'hi hi hi hi hi hi hi hi hi hi' },
    { name: 'Minh Nhật', nickname: 'Slay', quote: 'Chân gà sốt thái, chân gà xã tắc, con Kim chân gà!!', img: 'style/img/ThanhVien/MinhNhat.jpg', hobbies: 'Soi gương trong lớp', message: 'Chân gà sốt thái, chân gà xã tắc, con Kim chân gà!!' },
    { name: 'Tú Quyên', nickname: 'Thợ săn học bổng', quote: 'dư sức làm một người bạn gái hoàn hảo, nhưng tiếc thay tôi là less 🤡', img: 'style/img/ThanhVien/TuQuyen.jpg', hobbies: 'Học văn', message: 'dư sức làm một người bạn gái hoàn hảo, nhưng tiếc thay tôi là less 🤡' },
    { name: 'Ngọc Phát', nickname: 'Trùm Quỵt kèo', quote: 'người đàn ông dư nhiễm sắc thể X', img: 'style/img/ThanhVien/NgocPhat.jpg', hobbies: 'Sinh Học', message: 'người đàn ông dư nhiễm sắc thể X' },
    { name: 'Minh Tú', nickname: 'Minh Tus', quote: 'Cứ thành công hạnh phúc nhé', img: 'style/img/ThanhVien/MinhTu.jpg', hobbies: 'Ra vẻ', message: 'Cứ thành công hạnh phúc nhé' },
    { name: 'Ngọc Tiên', nickname: 'Ca Sĩ', quote: '9/3 đụng là var', img: 'style/img/ThanhVien/NgocTien.jpg', hobbies: 'Makeup', message: '9/3 đụng là var' },
    { name: 'Bảo Ngọc', nickname: 'Ngố', img: 'style/img/ThanhVien/BaoNgoc.jpg', hobbies: 'Gánh còng lưng' },
    { name: 'Khánh Ngọc', nickname: 'Chúa hề', quote: 'Lông nách xào xã tắc kèm hột vịt lộn mắm tôm ngon từ trong lông đầu nhảy ra', img: 'style/img/ThanhVien/KhanhNgoc.jpg', hobbies: 'Tấu hài', message: 'Lông nách xào xã tắc kèm hột vịt lộn mắm tôm ngon từ trong lông đầu nhảy ra' },
    { name: 'Hoàng Vy', nickname: 'Ngủ nướng', quote: 'uh', img: 'style/img/ThanhVien/HoangVy.jpg', hobbies: 'Ngủ gục', message: 'uh' },
    { name: 'Diễm My', nickname: 'Jet Jet Biên Hòa', quote: 'Thế mà lại hay ', img: 'style/img/ThanhVien/DiemMy.jpg', hobbies: 'Cày anime trong giờ', message: 'Thế mà lại hay ' },
    { name: 'Bích Liên', nickname: 'Jet Jet', quote: 'Cơm mẹ nấu chê đắng , bước ra đời ăn cơm tấm 🐄', img: 'style/img/ThanhVien/BichLien.jpg', hobbies: 'Chạy trễ giờ', message: 'Cơm mẹ nấu chê đắng , bước ra đời ăn cơm tấm 🐄' },
    { name: 'Gia Linh', nickname: 'Dân Anh Chị', quote: 'tui tên lĩnh', img: 'style/img/ThanhVien/GiaLinh.jpg', hobbies: 'Viết tus suy', message: 'tui tên lĩnh' },
    { name: 'Gia Ân', nickname: 'KaKa', img: 'style/img/ThanhVien/GiaAn.jpg' },
    { name: 'Thanh Vân', nickname: 'Mỹ nữ', quote: 'yêu bản thân=))', img: 'style/img/ThanhVien/ThanhVan.jpg', hobbies: 'Ngồi chép phạt', message: 'yêu bản thân=))' },
    { name: 'Thiên Kim', nickname: 'Cao nhân', quote: '9/3 đụng là var', img: 'style/img/ThanhVien/ThienKim.jpg', hobbies: 'Tiên tri đề thi', message: '9/3 đụng là var' },
    { name: 'Trúc Lam', nickname: 'Rich kid', quote: 'Sáng đi Maybach, chiều đi ăn ké bánh tráng trộn của cả lớp :))', img: 'style/img/ThanhVien/TrucLam.jpg', hobbies: 'Mời lớp ăn vặt' },
    { name: 'Nhã Đan', nickname: 'Bé Đản', quote: '', img: 'style/img/ThanhVien/NhaDan.jpg', hobbies: 'Nhìn lén crush' },
    { name: 'Xuân Mai', nickname: 'heo', quote: 'I may fail math, but never the vibe.', img: 'style/img/ThanhVien/XuanMai.jpg', hobbies: 'Hóng biến', message: 'I may fail math, but never the vibe.' },
    { name: 'Yến Nhi', nickname: 'Wibu', quote: 'Nỗ lực đến mức thiên tài phải dùng bạn làm thước đo', img: 'style/img/ThanhVien/YenNhi.jpg', hobbies: 'Nấu mì ly', message: 'Nỗ lực đến mức thiên tài phải dùng bạn làm thước đo' },
    { name: 'Ngọc Liên', nickname: 'Thánh nhọ', quote: 'Ngầu như cái bồn cầu, cục xì lầu um bê lắc he he he', img: 'style/img/ThanhVien/NgocLien.jpg', hobbies: 'Mang xui xẻo', message: 'Ngầu như cái bồn cầu, cục xì lầu um bê lắc he he he' },
    { name: 'Ngọc Diệu', nickname: 'Wibu', quote: 'Do your best and never give up!', img: 'style/img/ThanhVien/NgocDieu.jpg', hobbies: 'Lưu giữ kỉ niệm', message: 'Do your best and never give up!' },
    { name: 'Cô Nguyễn Lê Minh Thùy', nickname: 'Boss Cuối', title: 'GVCN lớp 9/3', img: 'style/img/ThanhVien/NguyenLeMinhThuy.jpg', quote: 'Giáo Viên chủ nhiệm lớp 9/3 2025-2026' }
];
    let currentIndex = 0;
    let isShowingAll = false;

    function getInitialItemsCount() {
        return window.innerWidth <= 768 ? 3 : 6;
    }

    function createMemberCard(m) {
        const card = document.createElement('div');
        card.className = 'member-card animate-up';
        card.innerHTML = `
            <div class="member-img-wrapper">
                <img src="${m.img}" alt="${m.name}" loading="lazy">
                <div class="member-overlay">
                    <p class="quote">"${m.quote}"</p>
                    <div class="view-more">Xem chi tiết <i class="fas fa-arrow-right"></i></div>
                </div>
            </div>
            <div class="member-info">
                <div class="name-container">
                    <h3 class="member-name">${m.name}</h3>
                    <h3 class="member-nickname">${m.nickname}</h3>
                </div>
            </div>
        `;
        card.addEventListener('click', () => openProfile(m));
        return card;
    }

    function renderMembers(count, isReset = false) {
        if (isReset) {
            memberGrid.innerHTML = '';
            currentIndex = 0;
            isShowingAll = false;
        }

        const nextItems = members.slice(currentIndex, currentIndex + count);
        nextItems.forEach(m => {
            const card = createMemberCard(m);
            memberGrid.appendChild(card);
        });

        currentIndex += nextItems.length;
        const initialCount = getInitialItemsCount();
        if (members.length <= initialCount) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-block';
            if (currentIndex >= members.length) {
                isShowingAll = true;
                loadMoreBtn.innerHTML = 'Ẩn bớt <i class="fas fa-chevron-up"></i>';
            } else {
                isShowingAll = false;
                loadMoreBtn.innerHTML = 'Xem thêm <i class="fas fa-chevron-down"></i>';
            }
        }
    }

    if (loadMoreBtn) {
        renderMembers(getInitialItemsCount());

        loadMoreBtn.addEventListener('click', () => {
            if (isShowingAll) {
                renderMembers(getInitialItemsCount(), true);
                const membersSection = document.getElementById('members');
                const offset = 80;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = membersSection.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            } else {
                // Tui để 6 thay vì 3 để 40 người bấm load more cho lẹ đỡ cực :))
                renderMembers(9); 
            }
        });
    }

    function program(delay = 200) {
      (function () {
        const _b = (s) => decodeURIComponent(escape(atob(s)));
        const _d = [
          "QuG6o24gcXV54buBbiB0aHXhu5ljIHbhu4IgRHIuR2lmdGVy",
          "VGlrdG9rOiBodHRwczovL3d3dy50aWt0b2suY29tL0Bkci5naWZ0ZXIzMDY=",
          "R2l0aHViOiBodHRwczovL2dpdGh1Yi5jb20vRHJHaWZ0ZXI="
        ];
    
        setTimeout(() => {
          _d.forEach(x => console.log(_b(x)));
        }, delay);
      })();
    }

    const profileModal = document.getElementById('profileModal');
    const closeProfile = document.querySelector('.close-profile');
    const modalCard = profileModal.querySelector('.modal-card');

    function openProfile(m) {
        document.getElementById('profileImg').src = m.img;
        document.getElementById('profileName').innerText = m.name;
        document.getElementById('profileNickname').innerText = m.nickname;
        document.getElementById('profileMessage').innerText = m.message;
        
        profileModal.style.display = 'flex';
        setTimeout(() => modalCard.classList.add('show'), 10);
    }

    closeProfile.addEventListener('click', () => {
        modalCard.classList.remove('show');
        setTimeout(() => profileModal.style.display = 'none', 300);
    });

    const galleryGrid = document.getElementById('galleryGrid');
    const galleryImages = [];
    const layoutClasses = ['', 'wide', 'tall', ''];

    for (let i = 1; i <= 27; i++) {
        const randomClass = layoutClasses[Math.floor(Math.random() * layoutClasses.length)];
        galleryImages.push({
            src: `style/img/AnhTapThe/Anh (${i}).jpg`,
            class: randomClass
        });
    }

    galleryImages.forEach(img => {
        const item = document.createElement('div');
        item.className = `gallery-item ${img.class}`;
        item.innerHTML = `<img src="${img.src}" alt="Gallery image" loading="lazy">`;
        item.addEventListener('click', () => openLightbox(img.src));
        galleryGrid.appendChild(item);
    });

    setInterval(() => {
        const grid = document.getElementById('galleryGrid');
        const items = document.querySelectorAll('.gallery-item');
        
        grid.style.opacity = '0';
        grid.style.transform = 'scale(0.98)';
        grid.style.transition = 'all 0.6s ease-in-out';

        setTimeout(() => {
            items.forEach(item => {
                item.classList.remove('wide', 'tall');
                const newLayout = layoutClasses[Math.floor(Math.random() * layoutClasses.length)];
                if (newLayout) item.classList.add(newLayout);
            });

            grid.style.opacity = '1';
            grid.style.transform = 'scale(1)';
        }, 600); // Match this with the transition time
    }, 15000);

    // 6. Gallery Lightbox & Reactions
    const modal = document.getElementById('galleryModal');
    const modalImg = document.getElementById('modalImg');
    const closeModal = document.querySelector('.close-modal');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentImgIndex = 0;

    function openLightbox(src) {
        currentImgIndex = galleryImages.findIndex(img => img.src === src);
        updateModalImage();
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    function updateModalImage() {
        modalImg.style.opacity = '0';
        setTimeout(() => {
            modalImg.src = galleryImages[currentImgIndex].src;
            modalImg.style.opacity = '1';
        }, 150);
    }

    function showNext() {
        currentImgIndex = (currentImgIndex + 1) % galleryImages.length;
        updateModalImage();
    }

    function showPrev() {
        currentImgIndex = (currentImgIndex - 1 + galleryImages.length) % galleryImages.length;
        updateModalImage();
    }

    if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); showNext(); });
    if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); showPrev(); });

    closeModal.onclick = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    window.onclick = (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (e.target == profileModal) {
            modalCard.classList.remove('show');
            setTimeout(() => profileModal.style.display = 'none', 300);
        };
    };

    // Reaction System
    const reactionItems = document.querySelectorAll('.reaction-item');
    let clickCounts = {};
    let holdTimers = {};

    program();
    
    reactionItems.forEach(item => {
        const emoji = item.getAttribute('data-emoji');
        clickCounts[emoji] = 0;

        const startContinuousFloating = (x, y) => {
            // Initial one
            createFloatingEmoji(emoji, x, y);
            // Continuous
            item.floatInterval = setInterval(() => {
                createFloatingEmoji(emoji, x, y);
            }, 100);
        };

        const stopContinuousFloating = () => {
            clearInterval(item.floatInterval);
            clearTimeout(holdTimers[emoji]);
        };

        item.addEventListener('mousedown', (e) => {
            startContinuousFloating(e.clientX, e.clientY);
            
            // Rapid click logic
            clickCounts[emoji]++;
            if (clickCounts[emoji] >= 10) {
                createEmojiRain(emoji);
                clickCounts[emoji] = 0;
            }
            clearTimeout(item.clickTimeout);
            item.clickTimeout = setTimeout(() => { clickCounts[emoji] = 0; }, 2000);

            // Long press rain logic
            holdTimers[emoji] = setTimeout(() => {
                createEmojiRain(emoji);
            }, 800);
        });

        item.addEventListener('mouseup', stopContinuousFloating);
        item.addEventListener('mouseleave', stopContinuousFloating);

        // Touch support
        item.addEventListener('touchstart', (e) => {
            e.preventDefault();
            const touch = e.touches[0];
            startContinuousFloating(touch.clientX, touch.clientY);
            holdTimers[emoji] = setTimeout(() => {
                createEmojiRain(emoji);
            }, 800);
        });
        item.addEventListener('touchend', stopContinuousFloating);
    });

    function createFloatingEmoji(emoji, x, y) {
        const span = document.createElement('span');
        span.innerText = emoji;
        span.className = 'floating-emoji';
        span.style.left = x + 'px';
        span.style.top = y + 'px';
        span.style.setProperty('--random-x', (Math.random() * 100 - 50) + 'px');
        span.style.setProperty('--random-rotate', (Math.random() * 40 - 20) + 'deg');
        document.body.appendChild(span);
        setTimeout(() => span.remove(), 1500);
    }

    function createEmojiRain(emoji) {
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const rain = document.createElement('span');
                rain.innerText = emoji;
                rain.className = 'rain-emoji';
                rain.style.left = Math.random() * 100 + 'vw';
                rain.style.animationDelay = (Math.random() * 1.5) + 's';
                document.body.appendChild(rain);
                setTimeout(() => rain.remove(), 4000);
            }, i * 60);
        }
    }
    const stickyNotes = document.getElementById('stickyNotes');
    const loadMoreGuestbook = document.getElementById('loadMoreGuestbook');
    let guestbookData = [];
    let mobilePageIdx = 0;
    let isDesktopExpanded = false;
    let mobileInterval;

    function getGuestbookMode() {
        return window.innerWidth <= 768 ? 'mobile' : 'desktop';
    }

    function addNoteDOM(text, isNew = false) {
        const note = document.createElement('div');
        const randomColorIdx = Math.floor(Math.random() * 6) + 1;
        note.className = `sticky-note color-${randomColorIdx} note-appear`;
        
        let contentHTML = '';
        const trimmedText = text.trim();
        const lastDashIdx = trimmedText.lastIndexOf('-');
        
        if (lastDashIdx !== -1 && lastDashIdx > trimmedText.length - 25) {
            const content = trimmedText.substring(0, lastDashIdx).trim();
            const signature = trimmedText.substring(lastDashIdx + 1).trim();
            contentHTML = `<p>${content}</p><span class="signature">- ${signature}</span>`;
        } else {
            contentHTML = `<p>${trimmedText}</p>`;
        }

        note.innerHTML = `
            ${contentHTML}
            <i class="fas fa-thumbtack" style="position:absolute; top:10px; right:10px; color:rgba(0,0,0,0.1);"></i>
        `;
        const randomRotate = Math.floor(Math.random() * 20) - 10;
        note.style.transform = `rotate(${randomRotate}deg)`;
        
        if (isNew) stickyNotes.prepend(note);
        else stickyNotes.appendChild(note);
    }

    function renderGuestbook() {
        if (!stickyNotes) return;
        const mode = getGuestbookMode();
        stickyNotes.innerHTML = '';

        if (mode === 'mobile') {
            stickyNotes.classList.remove('collapsed');
            const start = mobilePageIdx % guestbookData.length;
            const note1 = guestbookData[start];
            const note2 = guestbookData[(start + 1) % guestbookData.length];
            
            if (note1) addNoteDOM(note1);
            if (note2) addNoteDOM(note2);

            loadMoreGuestbook.innerHTML = 'Thêm lời nhắn khác <i class="fas fa-sync"></i>';
        } else {
            guestbookData.forEach(text => addNoteDOM(text));
            if (isDesktopExpanded) {
                stickyNotes.classList.remove('collapsed');
                loadMoreGuestbook.innerHTML = 'Ẩn bớt lời nhắn <i class="fas fa-chevron-up"></i>';
            } else {
                stickyNotes.classList.add('collapsed');
                loadMoreGuestbook.innerHTML = 'Xem thêm lời nhắn <i class="fas fa-chevron-down"></i>';
            }
        }
    }

    function startMobileCycle() {
        clearInterval(mobileInterval);
        if (getGuestbookMode() === 'mobile') {
            mobileInterval = setInterval(() => {
                mobilePageIdx = (mobilePageIdx + 2) % guestbookData.length;
                renderGuestbook();
            }, 5000);
        }
    }

    fetch('style/guestbook.txt')
        .then(res => res.text())
        .then(data => {
            guestbookData = data.trim().split('\n').filter(line => line.trim());
            renderGuestbook();
            startMobileCycle();
        })
        .catch(err => console.error("Could not load guestbook.txt", err));

    window.addEventListener('resize', () => {
        renderGuestbook();
        startMobileCycle();
    });

    if (loadMoreGuestbook) {
        loadMoreGuestbook.addEventListener('click', () => {
            if (getGuestbookMode() === 'mobile') {
                mobilePageIdx = (mobilePageIdx + 2) % guestbookData.length;
                renderGuestbook();
                startMobileCycle(); 
            } else {
                isDesktopExpanded = !isDesktopExpanded;
                renderGuestbook();
            }
        });
    }

    const musicMenu = document.getElementById('musicMenu');
    const musicModal = document.getElementById('musicModal');
    const closeMusic = document.querySelector('.close-music');
    const musicOptions = document.querySelectorAll('.music-option');
    const bgMusic = document.getElementById('bg-music');
    const musicOptionsArray = Array.from(musicOptions);
    let currentSongIdx = 0;

    function playSongAtIndex(index) {
        if (index < 0) index = musicOptionsArray.length - 1;
        if (index >= musicOptionsArray.length) index = 0;
        
        currentSongIdx = index;
        const option = musicOptionsArray[currentSongIdx];
        const src = option.getAttribute('data-src');
        const img = option.getAttribute('data-img');
        const title = option.querySelector('strong') ? option.querySelector('strong').innerText : '';
        
        const currentAlbumArt = document.getElementById('currentAlbumArt');
        const currentSongTitle = document.getElementById('currentSongTitle');
        const mainPlayBtn = document.getElementById('mainPlayBtn');

        musicOptionsArray.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
        
        bgMusic.src = src;
        bgMusic.play().then(() => {
            musicModal.classList.add('playing');
            mainPlayBtn.className = 'fas fa-pause';
        }).catch(e => console.log('Playback error:', e));
        
        if (currentAlbumArt && img) currentAlbumArt.src = img;
        if (currentSongTitle) {
            currentSongTitle.innerText = title;
            currentSongTitle.style.animation = 'none';
            currentSongTitle.offsetHeight; 
            currentSongTitle.style.animation = '';
        }
    }

    if (musicMenu) {
        musicMenu.addEventListener('click', () => {
            const card = musicModal.querySelector('.modal-card');
            musicModal.style.display = 'flex';
            setTimeout(() => card.classList.add('show'), 10);
        });
    }

    if (closeMusic) {
        closeMusic.addEventListener('click', () => {
            const card = musicModal.querySelector('.modal-card');
            card.classList.remove('show');
            setTimeout(() => musicModal.style.display = 'none', 300);
        });
    }

    musicOptionsArray.forEach((option, index) => {
        option.addEventListener('click', () => {
            playSongAtIndex(index);
        });
    });

    const mainPlayBtn = document.getElementById('mainPlayBtn');
    if (mainPlayBtn) {
        mainPlayBtn.addEventListener('click', () => {            
            if (!bgMusic.src || bgMusic.src === "" || bgMusic.src.endsWith('index.html') || bgMusic.getAttribute('src') === null) {
                playSongAtIndex(0);
                return;
            }

            if (bgMusic.paused) {
                bgMusic.play().then(() => {
                    musicModal.classList.add('playing');
                    mainPlayBtn.className = 'fas fa-pause';
                });
            } else {
                bgMusic.pause();
                musicModal.classList.remove('playing');
                mainPlayBtn.className = 'fas fa-play';
            }
        });
    }

    const prevSongBtn = document.getElementById('prevSongBtn');
    if (bgMusic) {
        bgMusic.addEventListener('ended', () => {
            playSongAtIndex(currentSongIdx + 1);
        });
    }

    const nextSongBtn = document.getElementById('nextSongBtn');

    if (prevSongBtn) {
        prevSongBtn.addEventListener('click', () => {
            playSongAtIndex(currentSongIdx - 1);
        });
    }

    if (nextSongBtn) {
        nextSongBtn.addEventListener('click', () => {
            playSongAtIndex(currentSongIdx + 1);
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === musicModal) {
            const card = musicModal.querySelector('.modal-card');
            card.classList.remove('show');
            setTimeout(() => musicModal.style.display = 'none', 300);
        }
    });

    const timelineList = document.getElementById('timelineList');
    const loadMoreTimeline = document.getElementById('loadMoreTimeline');
    let timelineData = [];
    let displayedTimelineCount = 0;

    function renderTimelineChunk(count) {
        const nextItems = timelineData.slice(displayedTimelineCount, displayedTimelineCount + count);
        nextItems.forEach((itemData, index) => {
            const actualIndex = displayedTimelineCount + index;
            const item = document.createElement('div');
            item.className = `timeline-item ${actualIndex % 2 === 0 ? 'left' : 'right'} animate-up`;
            item.innerHTML = `
                <div class="timeline-dot"></div>
                <div class="timeline-card">
                    <span class="date">${itemData.date}</span>
                    <h3>${itemData.title}</h3>
                    <p>${itemData.desc}</p>
                </div>
            `;
            timelineList.appendChild(item);
        });

        displayedTimelineCount += nextItems.length;
        if (displayedTimelineCount >= timelineData.length) {
            loadMoreTimeline.style.display = 'none';
        }
    }

    if (timelineList) {
        fetch('style/timeline.txt')
            .then(res => res.text())
            .then(data => {
                const lines = data.trim().split('\n');
                timelineData = lines.map(line => {
                    const parts = line.split('|').map(p => p.trim());
                    return parts.length >= 3 ? { date: parts[0], title: parts[1], desc: parts[2] } : null;
                }).filter(i => i);

                renderTimelineChunk(4);
            })
            .catch(err => console.error("Could not load timeline.txt", err));

        loadMoreTimeline.addEventListener('click', () => {
            renderTimelineChunk(4);
        });
    }

    function createParticle() {
        const hero = document.getElementById('home');
        if (!hero) return;
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.background = 'rgba(255, 255, 255, 0.4)';
        particle.style.width = Math.random() * 4 + 'px';
        particle.style.height = particle.style.width;
        particle.style.borderRadius = '50%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.zIndex = '1';
        particle.style.pointerEvents = 'none';
        
        hero.appendChild(particle);

        const animation = particle.animate([
            { transform: 'translateY(0) translateX(0)', opacity: 0 },
            { transform: `translateY(-${Math.random() * 100}px) translateX(${Math.random() * 50 - 25}px)`, opacity: 0.8 },
            { transform: `translateY(-${Math.random() * 200}px) translateX(${Math.random() * 100 - 50}px)`, opacity: 0 }
        ], {
            duration: Math.random() * 3000 + 2000,
            easing: 'linear'
        });

        animation.onfinish = () => particle.remove();
    }

    setInterval(createParticle, 300);
});