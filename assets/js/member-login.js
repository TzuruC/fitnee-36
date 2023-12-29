import { api_url } from "./config.js";
import  Swal  from "../../node_modules/sweetalert2/src/sweetalert2.js";


const loginBtn = document.querySelector("#loginBtn");
//取得使用者輸入帳號密碼
const loginPsw = document.querySelector('#loginPsw');
const loginMail = document.querySelector('#loginMail');
const alertEmail = document.querySelector('#alertEmail');
const alertPsw = document.querySelector('#alertPsw');

function init(){
    loginPsw.value = '';
}
init();

//點擊送出btn
loginBtn.addEventListener('click', function(e){
    e.preventDefault();
    let token="";
    let userId="";
    let userRole="";
    const userLogin = {
        "email": loginMail,
        "password": loginPsw,
        "role":"user"
    };
    //發送login請求
    axios.post(`${api_url}/login`,userLogin)
    .then(function(res){
        //取得token並存在localstorage
        token = res.data.accessToken;  
        userId = res.data.user.id;
        userRole = res.data.user.role;
        if(token){
            localStorage.setItem("vistaLoginToken",token);
            localStorage.setItem("userRole",userRole);
            localStorage.setItem("userId",userId);
            Swal.fire({
                title: '登入成功！',
                icon: 'success'
            });
            window.location.href = 'index.html';
        } else {
            console.log("帳號或密碼錯誤");   
        }
    })
    .catch(function(err){
        console.log(err.response.data);
        // if (err.response.data == 'Email and password are required'){
        //     alertEmail.textContent = '*請輸入註冊用信箱!';
        //     alertPsw.textContent = '*請輸入密碼！';
        //     loginPsw = '';
        // }else if(err.response.data == 'Email format is invalid'){
        //     alertEmail.textContent = '*信箱格式錯誤！';
        //     loginPsw = '';
        // }else if(err.response.data == 'Password is too short'){
        //     alertPsw.textContent = '*密碼過短！請輸入 4 個以上數字或字母組合';
        //     loginPsw = '';
        // }else if(err.response.data == 'Cannot find user'){
        //     alertEmail.textContent = '*此信箱尚未註冊';
        //     loginPsw = ''; //想清空但是失敗了
        // }else if(err.response.data == 'Incorrect password'){
        //     alertPsw.textContent = '*密碼錯誤';
        //     loginPsw = ''; //想清空但是失敗了
        // }
    })
});