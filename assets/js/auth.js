import Swal from "sweetalert2";

// 判斷是否有登入
const is_login = localStorage.getItem("userLoginToken");
const roleCheck = localStorage.getItem("userRole");
//判斷後台權限
if (window.location.href.includes('admin')
    && !window.location.href.includes('admin-login.html')
    && roleCheck !== 'admin') {
    // 會快速閃過html內容
    document.querySelector('body').innerHTML = '';
    // alert('您沒有權限進入!');
    Swal.fire({
        title: '沒有權限造訪的頁面!',
        icon: 'warning',
        text: "即將返回網站首頁",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
    });
    setTimeout(() => {
        window.location.href = 'http://localhost:5173/fitnee-36/pages/index.html';
    }, 2500);

} else if (window.location.href.includes('admin')
) {
    const adminNav = document.querySelector(".adminNav");
    const adminLogoutUI = document.querySelector(".adminLogoutUI");
    if (!is_login
        && roleCheck !== 'admin') {
        adminNav.classList.add("d-none");
        adminLogoutUI.classList.add("d-none");
    } else if (is_login
        && roleCheck === 'admin') {
        const adminLogoutBtn = document.querySelector(".adminLogout");
        const adminName = document.querySelector(".adminName");
        console.log(adminName);
        adminName.innerHTML = `管理員 ${localStorage.getItem("userName")}`;
        adminLogoutBtn.addEventListener('click', function (e) {
            e.preventDefault();
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
            localStorage.removeItem("userRole");
            localStorage.removeItem("userName");
            localStorage.removeItem("userLoginToken");
            Swal.fire({
                title: '已登出！',
                icon: 'success',
                confirmButtonText: '確認',
                buttonsStyling: false,
                customClass: {
                    confirmButton: 'btn btn-success py-3 px-10',
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = 'admin-login.html';
                }
            });
        });
    }
} else if (!window.location.href.includes('admin')) {
    const logoutBtn = document.querySelector(".logoutBtn");
    const header = (is_login) => {
        const loginLink = document.querySelector(".loginLink");
        const registLink = document.querySelector(".registLink");
        const logoutBtn = document.querySelector(".logoutBtn");
        if (is_login) {
            loginLink.classList.add("d-none");
            registLink.classList.add("d-none");
            logoutBtn.classList.remove("d-none");
        } else if (!is_login) {
            loginLink.classList.remove("d-none");
            registLink.classList.remove("d-none");
            logoutBtn.classList.add("d-none");
        }
    }
    logoutBtn.addEventListener('click', function (e) {
        e.preventDefault();
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("userRole");
        localStorage.removeItem("userName");
        localStorage.removeItem("userLoginToken");
        Swal.fire({
            title: '已登出！',
            icon: 'success',
            confirmButtonText: '確認',
            buttonsStyling: false,
            customClass: {
                confirmButton: 'btn btn-success py-3 px-10',
            }
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'index.html';
            }
        });
    });
    header(is_login);
}

//申請教練頁面檢查登入

if (window.location.href.includes('coach-audit')) {
    const auditLogin = document.querySelector(".audit-login");
    const auditLogout = document.querySelector(".audit-logout");
    if (!is_login) {
        auditLogin.classList.add("d-none");

    } else if (is_login) {
        auditLogout.classList.add("d-none");

    }
}