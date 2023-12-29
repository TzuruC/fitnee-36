import { api_url } from "./config.js";
import  Swal  from '../../node_modules/sweetalert2/src/sweetalert2.js';

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
            message: "為必填欄位"
        },
        equality: {
            attribute: "密碼",
            message: "與密碼不符",
        }
    },
    
};

function init(){
    registPsw.value = '';
    registConfirmPsw.value = '';
}
init();
function formValidate(item){
    item.nextElementSibling.textContent = '';
    let errors = validate(form, constraints) || '';
    if (errors) {
        Object.keys(errors).forEach(function (keys) {
            document.querySelector(`[data-message="${keys}"]`).textContent = errors[keys];
        })
        init();
    }
}
inputs.forEach((item) => {
    // change, blur(移開焦點), input(填寫值改變時觸發)
    item.addEventListener("change", function () {
        item.nextElementSibling.textContent = '';
        let errors = validate(form, constraints) || '';
        if (errors) {
            Object.keys(errors).forEach(function (keys) {
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
        Swal.fire({
            title: '註冊成功',
            text: '請重新登入',
            icon: 'success'
        });
        setTimeout(() => {
            window.location.href = 'member-login.html';
        }, 0);
        })
    .catch(function (err) {
        console.log(err.response.data);
        if(err.response.data == 'Email already exists'){
            Swal.fire({
                title: '註冊失敗',
                text: '此 Email 已經註冊',
                icon: 'error',
                confirmButtonText: '確認'
            });
            init();
        }else if (
            err.response.data == 'Email and password are required'
            || err.response.data == 'Email format is invalid'
            || err.response.data == 'Password is too short'
            ){
                inputs.forEach((item) => {
                    formValidate(item);
                });
                Swal.fire({
                    title: '資料送出失敗',
                    text: '請檢查填寫資料',
                    icon: 'warning',
                    confirmButtonText: '確認'
                });
                init();
            }
    })
})
