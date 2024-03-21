import Swal from "sweetalert2";


// 判斷是否有登入
export const is_login = localStorage.getItem("userLoginToken");
export const logoutBtn = document.querySelector(".logoutBtn");
// AUTH
// export const
export const header = (is_login) => {
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