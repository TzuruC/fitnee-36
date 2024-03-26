import Swal from "sweetalert2";

// 判斷是否有登入
const is_login = localStorage.getItem("userLoginToken");
const roleCheck = localStorage.getItem("userRole");
console.log(roleCheck);
//判斷後台權限
if (window.location.href.includes('admin')
    && !window.location.href.includes('admin-login.html')) {
    if (roleCheck !== 'admin') {
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

    } else {
        //找到user的role
        axios.get(renderUrl + 'users')
            .then(
                function (res) {
                    console.log('滿足登入權限')
                }
            )
    };

} else if (window.location.href.includes('admin')) {
    const adminNav = document.querySelector(".adminNav");
    const adminLogoutUI = document.querySelector(".adminLogoutUI");

    if (roleCheck !== "admin" || !is_login) {
        adminNav.classList.add("d-none");
        adminLogoutUI.classList.add("d-none");
    }
} else {
    // const logoutBtn = document.querySelector(".logoutBtn");
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