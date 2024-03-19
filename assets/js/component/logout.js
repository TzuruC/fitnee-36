import { is_login } from "../auth";
import Swal from "sweetalert2";

//登出按鈕

export const logoutBtn = document.querySelector(".logoutBtn");

export const logout = () => {
    let adminLogout;
    console.log(logoutBtn);
    if (islogin) {
        if (window.location.href.includes('admin')) {
            adminLogout = document.querySelector('#adminLogout');
            logoutBtn.addEventListener('click', function (e) {
                e.preventDefault();
                localStorage.removeItem("token");
                localStorage.removeItem("userId");
                localStorage.removeItem("userRole");
                localStorage.removeItem("userName");
                alert("已登出");
                Swal.fire({
                    title: '登入成功！',
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
                window.location.href = 'admin-signin.html';
            })
        } else {
            // 點擊登出按鈕
            logoutBtn.forEach(logoutBtn => {
                logoutBtn.addEventListener('click', function (e) {
                    e.preventDefault();
                    // 清空token
                    localStorage.removeItem("token");
                    localStorage.removeItem("userId");
                    localStorage.removeItem("userRole");
                    localStorage.removeItem("userName");
                    // reload 或 跳轉畫面
                    alert("已登出");
                    window.location.href = 'index.html';
                })
            });
        }
    }
}