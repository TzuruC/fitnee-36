import { api_url } from "./config.js";
import Swal from "../../node_modules/sweetalert2/src/sweetalert2.js";


const loginBtn = document.querySelector("#loginBtn");
//取得使用者輸入帳號密碼
const loginPsw = document.querySelector('#loginPsw');
const loginMail = document.querySelector('#loginMail');
// const alertEmail = document.querySelector('#alertEmail');
// const alertPsw = document.querySelector('#alertPsw');

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
    userLogin = {
        "email": loginMail.value,
        "password": loginPsw.value,
        "role": "user"
    };
    //發送login請求
    axios.post(`${api_url}/login`, userLogin)
        .then(function (res) {
            //取得token並存在localstorage
            token = res.data.accessToken;
            userId = res.data.user.id;
            userRole = res.data.user.role;
            userName = res.data.user.name;
            if (token) {
                localStorage.setItem("userLoginToken", token);
                localStorage.setItem("userRole", userRole);
                localStorage.setItem("userId", userId);
                localStorage.setItem("userName", userName);

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
            } else {
                console.log("帳號或密碼錯誤");
                Swal.fire({
                    title: '帳號或密碼錯誤',
                    icon: 'warning',
                    confirmButtonText: '確認',
                    buttonsStyling: false,
                    customClass: {
                        confirmButton: 'btn btn-success py-3 px-10',
                    }
                })
            }
        })
        .catch(function (err) {
            console.log(err.response.data);
        })
});


