//登出
let logoutBtn;
let adminLogout;
// 判斷是否有登入再執行，以免沒事跳錯
document.addEventListener("DOMContentLoaded", function () {
    logoutBtn = document.querySelectorAll(".logoutBtn");

    if (islogin) {
        if (window.location.href.includes('admin')) {
            adminLogout = document.querySelector('#adminLogout');
            logoutBtn.addEventListener('click', function (e) {
                e.preventDefault();
                localStorage.removeItem("vistaLoginToken");
                localStorage.removeItem("userId");
                localStorage.removeItem("userRole");
                localStorage.removeItem("vistaSaved");
                alert("已登出");
                window.location.href = 'admin-signin.html';
            })
        } else {
            // 點擊登出按鈕
            logoutBtn.forEach(logoutBtn => {
                logoutBtn.addEventListener('click', function (e) {
                    e.preventDefault();
                    // 清空token
                    localStorage.removeItem("vistaLoginToken");
                    localStorage.removeItem("userId");
                    localStorage.removeItem("userRole");
                    localStorage.removeItem("vistaSaved");
                    // reload 或 跳轉畫面
                    alert("已登出");
                    window.location.href = 'index.html';
                })
            });
        }
    }
});