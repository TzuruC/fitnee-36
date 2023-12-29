import { api_url } from "./config.js";

const registMail = document.querySelector('#registMail');
const registName = document.querySelector('#registName');
const registPhone = document.querySelector('#registPhone');
const registPsw = document.querySelector('#registPsw');
const registConfirmPsw = document.querySelector('#registConfirmPsw');
const registBtn = document.querySelector('#registBtn');

// 表單驗證
const form = document.querySelector(".register-form");
const inputs = document.querySelectorAll("input[name]");
const constraints = {
    "電子信箱": {
        presence: {
            message: "為必填欄位"
        },
        email: {
            message: "格式錯誤"
        }
    },
    "會員姓名": {
        presence: {
            message: "為必填欄位"
        }
    },
    "聯絡電話": {
        presence: {
            message: "為必填欄位"
        }
    },
    "密碼": {
        presence: {
            message: "為必填欄位"
        },
        length: {
            minimum: 8,
            message: "需超過 8 碼"
        }
    },
    "確認密碼": {
        presence: {
            message: "為必填欄位",
            equality: "密碼"
        }
    },
};
inputs.forEach((item) => {
    // change, blur(移開焦點), input(填寫值改變時觸發)
    item.addEventListener("change", function () {
        item.nextElementSibling.textContent = '';
        let errors = validate(form, constraints) || '';
        if (errors) {
            Object.keys(errors).forEach(function (keys) {
                console.log(document.querySelector(`[data-message=${keys}]`))
                document.querySelector(`[data-message="${keys}"]`).textContent = errors[keys];
            })
        }
    });
});
// 註冊功能
registBtn.addEventListener('click',function(e){
    e.preventDefault();
    // 輸入帳號
    const newUser = {
        "email": registMail.value,
        "password": registPsw.value,
        "name": registName.value,
        "contact": registPhone.value,
        "role": "user"
    }
    //傳送post
    axios.post(`${api_url}/users`, newUser)
    .then(function (res) {
        alert("註冊成功，請重新登入");
        // 我想在這裡加入自動登入功能
        window.location.href = 'login.html';
        console.log(res.data);
    })
    .catch(function (error) {
        if (err.response.data == 'Email and password are required'){
            registMail.textContent = '*請輸入註冊用信箱!';
            alertPsw.textContent = '*請輸入密碼！';
            registPsw.value = '';
        }else if(err.response.data == 'Email format is invalid'){
            registMail.textContent = '*信箱格式錯誤！';
            registPsw.value = '';
        }else if(err.response.data == 'Password is too short'){
            alertPsw.textContent = '*密碼過短！請輸入 4 個以上數字或字母組合';
            registPsw.value = '';
        }
    })
})
