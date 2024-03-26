import { api_url } from "./config.js";
import Swal from "sweetalert2";


const loginBtn = document.querySelector(".loginBtn");
//取得使用者輸入帳號密碼
const loginPsw = document.querySelector('.loginPsw');
const loginMail = document.querySelector('.loginMail');

function init() {
    loginPsw.value = '';
}
init();

let userLogin = {};
//點擊送出btn
loginBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let token = "";
    let userId = "";
    let userRole = "";
    let userName = "";
    userLogin = {
        "email": loginMail.value,
        "password": loginPsw.value,
        "role": "admin"
    };

    //發送login請求
    axios.post(`${api_url}/login`, userLogin)
        .then(function (res) {
            //取得token並存在localstorage
            token = res.data.accessToken;
            userId = res.data.user.id;
            userRole = res.data.user.role;
            userName = res.data.user.name;
            console.log(res);
            if (token && userRole === 'admin') {
                localStorage.setItem("userLoginToken", token);
                localStorage.setItem("userRole", userRole);
                localStorage.setItem("userName", userName);
                localStorage.setItem("userId", userId);
                Swal.fire({
                    title: '登入成功！',
                    icon: 'success',
                    text: `歡迎回來，管理員${userName}`,
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                });
                setTimeout(() => {
                    window.location.href = 'admin-article-list.html';
                }, 2000);
            } else if (token && userRole !== 'admin') {
                Swal.fire({
                    title: '您沒有權限進入',
                    icon: 'warning',
                    confirmButtonText: '確認',
                    buttonsStyling: false,
                    customClass: {
                        confirmButton: 'btn btn-success py-3 px-10',
                    }
                })
            } else {
                Swal.fire({
                    title: '帳號或密碼錯誤',
                    icon: 'warning',
                    confirmButtonText: '確認',
                    buttonsStyling: false,
                    customClass: {
                        confirmButton: 'btn btn-success py-3 px-10',
                    }
                })
                console.log("帳號或密碼錯誤");
            }
        })
        .catch(function (err) {
            Swal.fire({
                title: '帳號或密碼錯誤',
                icon: 'error',
                confirmButtonText: '確認',
                buttonsStyling: false,
                customClass: {
                    confirmButton: 'btn btn-success py-3 px-10',
                }
            })
            console.log(err);
        })
});


