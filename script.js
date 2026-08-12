(function() {
    // ===== TẠO HẠT TUYẾT RƠI =====
    const snowflakesContainer = document.getElementById('snowflakesContainer');
    const snowflakeIcons = ['❄️', '❅', '❆', '✦', '✧', '💠', '🔹', '✨'];
    
    function createSnowflake() {
        const snowflake = document.createElement('span');
        snowflake.classList.add('snowflake');
        snowflake.textContent = snowflakeIcons[Math.floor(Math.random() * snowflakeIcons.length)];
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.fontSize = (Math.random() * 1.2 + 0.6) + 'em';
        snowflake.style.animationDuration = (Math.random() * 8 + 6) + 's';
        snowflake.style.animationDelay = Math.random() * 5 + 's';
        snowflake.style.opacity = Math.random() * 0.5 + 0.2;
        snowflakesContainer.appendChild(snowflake);

        setTimeout(() => {
            if (snowflake && snowflake.parentNode) {
                snowflake.remove();
            }
        }, 14000);
    }

    setInterval(createSnowflake, 400);
    for (let i = 0; i < 25; i++) {
        setTimeout(createSnowflake, i * 180);
    }

    // ===== TOAST SYSTEM =====
    function showToast(message, type = 'info') {
        const toastContainer = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.classList.add('toast', type);
        const icons = { success: '✅', error: '❌', info: 'ℹ️' };
        toast.innerHTML = `<span>${icons[type] || '🔔'}</span> ${message}`;
        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'slideOutRight 0.4s ease-in forwards';
            setTimeout(() => toast.remove(), 400);
        }, 3200);
    }

    // ===== MODAL SYSTEM =====
    const modalOverlay = document.getElementById('modalOverlay');
    const modalInnerContent = document.getElementById('modalInnerContent');
    const modalCloseBtn = document.getElementById('modalCloseBtn');

    function openModal(contentHTML) {
        modalInnerContent.innerHTML = contentHTML;
        modalOverlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modalOverlay.classList.add('hidden');
        document.body.style.overflow = '';
    }

    modalCloseBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    // ===== MỞ CHI TIẾT ACC LIÊN QUÂN =====
    window.openAccDetail = function() {
        const detailHTML = `
            <h2 style="font-size:26px; margin-bottom:5px; background:linear-gradient(135deg,#fbbf24,#f59e0b); -webkit-background-clip:text; -webkit-text-fill-color:transparent;">
                ⚔️ Acc Liên Quân Mobile
            </h2>
            <img src="https://i.postimg.cc/13N3QtRb/35de367fbce985a45f6239363fd2a607.jpg" alt="Acc Liên Quân" style="width:100%; border-radius:20px; margin:10px 0; border:2px solid rgba(255,255,255,0.15);" onerror="this.src='https://placehold.co/600x400/1a1025/fbbf24?text=LIEN+QUAN+ACC'">
            
            <div style="display:grid; grid-template-columns: repeat(2,1fr); gap:10px; margin:15px 0;">
                <div style="background:rgba(255,255,255,0.05); padding:12px; border-radius:16px; text-align:center; border:1px solid rgba(255,255,255,0.1);">
                    <div style="font-size:22px; font-weight:800; color:#fbbf24;">Ẩn</div>
                    <div style="font-size:11px; color:#94a3b8;">Rank Hiện Tại</div>
                </div>
                <div style="background:rgba(255,255,255,0.05); padding:12px; border-radius:16px; text-align:center; border:1px solid rgba(255,255,255,0.1);">
                    <div style="font-size:22px; font-weight:800; color:#fbbf24;">80+</div>
                    <div style="font-size:11px; color:#94a3b8;">Số Tướng</div>
                </div>
                <div style="background:rgba(255,255,255,0.05); padding:12px; border-radius:16px; text-align:center; border:1px solid rgba(255,255,255,0.1);">
                    <div style="font-size:22px; font-weight:800; color:#fbbf24;">120+</div>
                    <div style="font-size:11px; color:#94a3b8;">Số Skin</div>
                </div>
                <div style="background:rgba(255,255,255,0.05); padding:12px; border-radius:16px; text-align:center; border:1px solid rgba(255,255,255,0.1);">
                    <div style="font-size:22px; font-weight:800; color:#fbbf24;">15.000đ</div>
                    <div style="font-size:11px; color:#94a3b8;">Giá Bán</div>
                </div>
            </div>

            <a href="https://zalo.me/0776307956" target="_blank" class="buy-btn-main" style="text-decoration: none; display: flex; margin-top: 10px;">
                <i class="fas fa-shopping-cart"></i> MUA ACC NÀY QUA ZALO <i class="fas fa-bolt"></i>
            </a>
            <p style="text-align:center; color:#94a3b8; font-size:12px; margin-top:10px;">
                📞 Zalo: <strong style="color:#fbbf24;">0776307956</strong> | 💜 Shop TinLuu Store
            </p>
        `;
        openModal(detailHTML);
    };

    // ===== MODAL NẠP TIỀN QR =====
    function openDepositModal() {
        const qrModalHTML = `
            <h2 style="font-size:26px; margin-bottom:8px; background:linear-gradient(135deg,#10b981,#34d399); -webkit-background-clip:text; -webkit-text-fill-color:transparent;">
                💰 NẠP TIỀN CHUYỂN KHOẢN
            </h2>
            <p style="color:#cbd5e1; margin-bottom:15px; font-size:14px;">Quét mã QR bên dưới để thanh toán</p>
            
            <div class="qr-container">
                <img src="https://i.postimg.cc/Kv81dxMF/Chat-GPT-Image-23-45-24-11-thg-8-2026.png" 
                     alt="QR Code Nap Tien" 
                     style="width:200px; height:200px;"
                     onerror="this.onerror=null; this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><rect width=%22200%22 height=%22200%22 fill=%22%23f0f0f0%22/><text x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 font-size=%2216%22 fill=%22%23333%22>QR CODE</text></svg>';">
            </div>
            
            <div class="bank-info">
                <div class="info-row">
                    <span style="color:#94a3b8;">🏦 Ngân hàng:</span>
                    <span style="color:#fff; font-weight:700;">VietTinBank iPay</span>
                </div>
                <div class="info-row">
                    <span style="color:#94a3b8;">👤 Chủ TK:</span>
                    <span style="color:#fff; font-weight:700;">NGUYỄN THỊ ÚT</span>
                </div>
                <div class="info-row">
                    <span style="color:#94a3b8;">🔢 Số TK:</span>
                    <span style="color:#fbbf24; font-weight:700;">0935742761</span>
                    <button class="copy-btn" onclick="navigator.clipboard.writeText('0935742761').then(()=>alert('Đã sao chép số tài khoản!'))">
                        <i class="fas fa-copy"></i> Copy
                    </button>
                </div>
                <div class="info-row">
                    <span style="color:#94a3b8;">💰 Số tiền:</span>
                    <span style="color:#10b981; font-weight:700;">15.000đ</span>
                </div>
                <div class="info-row">
                    <span style="color:#94a3b8;">📝 Nội dung:</span>
                    <span style="color:#fbbf24; font-weight:700;">NAP TINLUU STORE</span>
                </div>
            </div>
            
            <a href="https://zalo.me/0776307956" target="_blank" class="buy-btn-zalo" style="text-decoration: none; display: flex;">
                <span class="zalo-icon-small">Z</span> Xác nhận qua Zalo: 0776307956
            </a>
            
            <button onclick="document.getElementById('modalOverlay').classList.add('hidden'); document.body.style.overflow='';" 
                    style="background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); color:#fff; padding:12px 25px; border-radius:25px; cursor:pointer; margin-top:12px; width:100%; font-weight:600;">
                <i class="fas fa-times"></i> Đóng
            </button>
        `;
        openModal(qrModalHTML);
    }

    // ===== ĐẾM NGƯỢC FLASH SALE =====
    function startCountdown(durationMinutes = 15) {
        const timerEl = document.getElementById('countdownTimer');
        let totalSeconds = durationMinutes * 60;

        function updateTimer() {
            const minutes = Math.floor(totalSeconds / 60);
            const seconds = totalSeconds % 60;
            timerEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            
            if (totalSeconds <= 0) {
                timerEl.textContent = 'HẾT HẠN';
                return;
            }
            totalSeconds--;
        }
        updateTimer();
        setInterval(updateTimer, 1000);
    }

    // ===== DOM ELEMENTS =====
    const authSection = document.getElementById('authSection');
    const shopSection = document.getElementById('shopSection');
    const loginToggle = document.getElementById('loginToggleBtn');
    const registerToggle = document.getElementById('registerToggleBtn');
    const authTitle = document.getElementById('authTitle');
    const authBtnText = document.getElementById('authBtnText');
    const confirmPasswordField = document.getElementById('confirmPasswordField');
    const confirmPasswordInput = document.getElementById('confirmPasswordInput');
    const usernameInput = document.getElementById('usernameInput');
    const passwordInput = document.getElementById('passwordInput');
    const authActionBtn = document.getElementById('authActionBtn');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const logoutBtn = document.getElementById('logoutBtn');
    const depositBtn = document.getElementById('depositBtn');

    let isRegisterMode = false;
    const STORAGE_KEY = 'tinluu_store_v5';

    function getUsers() {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : {};
    }

    function saveUsers(users) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
    }

    function getCurrentSession() {
        return sessionStorage.getItem('tinluu_session_v5');
    }

    function setCurrentSession(username) {
        sessionStorage.setItem('tinluu_session_v5', username);
    }

    function clearSession() {
        sessionStorage.removeItem('tinluu_session_v5');
    }

    function updateAuthUI() {
        if (isRegisterMode) {
            authTitle.textContent = 'Đăng Ký';
            authBtnText.textContent = 'Đăng Ký';
            confirmPasswordField.style.display = 'flex';
            loginToggle.classList.remove('active');
            registerToggle.classList.add('active');
        } else {
            authTitle.textContent = 'Đăng Nhập';
            authBtnText.textContent = 'Đăng Nhập';
            confirmPasswordField.style.display = 'none';
            loginToggle.classList.add('active');
            registerToggle.classList.remove('active');
        }
    }

    loginToggle.addEventListener('click', () => { isRegisterMode = false; updateAuthUI(); });
    registerToggle.addEventListener('click', () => { isRegisterMode = true; updateAuthUI(); });

    authActionBtn.addEventListener('click', () => {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (!username || !password) {
            showToast('Vui lòng nhập đầy đủ thông tin!', 'error');
            return;
        }

        const users = getUsers();

        if (isRegisterMode) {
            const confirmPass = confirmPasswordInput.value.trim();
            if (password !== confirmPass) {
                showToast('Mật khẩu xác nhận không khớp!', 'error');
                return;
            }
            if (users[username]) {
                showToast('Tên đăng nhập đã tồn tại!', 'error');
                return;
            }
            users[username] = { password, created: new Date().toISOString() };
            saveUsers(users);
            showToast('Đăng ký thành công! 💜', 'success');
            setCurrentSession(username);
            showShopInterface(username);
            clearAuthFields();
        } else {
            const userRecord = users[username];
            if (!userRecord) {
                showToast('Tài khoản không tồn tại!', 'error');
                return;
            }
            if (userRecord.password !== password) {
                showToast('Mật khẩu không chính xác!', 'error');
                return;
            }
            showToast('Đăng nhập thành công! ✨', 'success');
            setCurrentSession(username);
            showShopInterface(username);
            clearAuthFields();
        }
    });

    function clearAuthFields() {
        usernameInput.value = '';
        passwordInput.value = '';
        confirmPasswordInput.value = '';
    }

    function showShopInterface(username) {
        authSection.style.display = 'none';
        shopSection.style.display = 'flex';
        welcomeMessage.innerHTML = `💜 Shop tinluu.store xin chào <span>${username}</span> (Mấy Em Trai)`;
        startCountdown(15);
    }

    function showAuthInterface() {
        shopSection.style.display = 'none';
        authSection.style.display = 'flex';
        isRegisterMode = false;
        updateAuthUI();
    }

    logoutBtn.addEventListener('click', () => {
        clearSession();
        showAuthInterface();
        showToast('Đã đăng xuất! 👋', 'info');
    });

    depositBtn.addEventListener('click', () => {
        openDepositModal();
    });

    document.addEventListener('click', (e) => {
        if (e.target.closest('.code-badge')) {
            const codeText = e.target.closest('.code-badge').textContent.trim();
            showToast(`📋 Đã sao chép mã: ${codeText}`, 'info');
        }
    });

    window.addEventListener('load', () => {
        const currentUser = getCurrentSession();
        if (currentUser) {
            const users = getUsers();
            if (users[currentUser]) {
                showShopInterface(currentUser);
            } else {
                clearSession();
                showAuthInterface();
            }
        } else {
            showAuthInterface();
        }
        updateAuthUI();
    });

    console.log('⚔️ Shop tinluu.store - 1 Ảnh Liên Quân + Nút Mua Zalo!');
    console.log('💬 Zalo: https://zalo.me/0776307956');
})();